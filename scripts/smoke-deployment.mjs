import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const CRITICAL_IMAGE_ASSETS = [
  { label: "泳池背景", stem: "pool-background-cover-v1", extension: "jpg" },
  ...Array.from({ length: 5 }, (_, index) => index + 1).flatMap((stage) => [
    { label: `stage ${stage} idle`, stem: `seal-stage-${stage}-aligned-v1`, extension: "webp" },
    { label: `stage ${stage} eat`, stem: `seal-stage-${stage}-eat-aligned-v1`, extension: "webp" },
    { label: `stage ${stage} chew`, stem: `seal-stage-${stage}-eat-closed-v2-aligned-v1`, extension: "webp" },
  ]),
];

const wait = (milliseconds) => new Promise((resolveWait) => setTimeout(resolveWait, milliseconds));
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function findCriticalImagePaths(bundleSource) {
  return CRITICAL_IMAGE_ASSETS.map((asset) => {
    const filePattern = new RegExp(`${escapeRegExp(asset.stem)}-[A-Za-z0-9_-]{6,12}\\.${asset.extension}`);
    const fileName = bundleSource.match(filePattern)?.[0];
    if (!fileName) throw new Error(`${asset.label} reference is missing from built JS`);
    return { ...asset, path: `assets/${fileName}` };
  });
}

export function hasExpectedImageSignature(extension, bytes) {
  if (!(bytes instanceof Uint8Array)) return false;
  if (extension === "jpg" || extension === "jpeg") {
    return bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }
  if (extension === "webp") {
    return bytes.length >= 12
      && String.fromCharCode(...bytes.slice(0, 4)) === "RIFF"
      && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
  }
  return false;
}

export async function checkDeployment(target, options = {}) {
  const baseUrl = new URL(target);
  const requestTimeout = Math.max(1000, Number(options.requestTimeout || 15000));
  const fetchImpl = options.fetchImpl || fetch;
  const fetchFresh = (url) => fetchImpl(url, {
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(requestTimeout),
  });
  const pageUrl = new URL(baseUrl);
  pageUrl.searchParams.set("smoke", options.cacheKey || process.env.GITHUB_SHA || Date.now().toString(36));
  const pageResponse = await fetchFresh(pageUrl);
  if (!pageResponse.ok) throw new Error(`homepage returned ${pageResponse.status}`);

  const html = await pageResponse.text();
  if (!html.includes("MOGU MOGU")) throw new Error("homepage identity is missing");
  const scriptPath = html.match(/<script[^>]+src=["']([^"']+\.js)["']/i)?.[1];
  const stylePath = html.match(/<link[^>]+href=["']([^"']+\.css)["']/i)?.[1];
  if (!scriptPath || !stylePath) throw new Error("built JS or CSS reference is missing");

  const scriptUrl = new URL(scriptPath, pageUrl);
  const scriptResponse = await fetchFresh(scriptUrl);
  if (!scriptResponse.ok) throw new Error(`${scriptUrl.pathname} returned ${scriptResponse.status}`);
  const bundleSource = await scriptResponse.text();

  const styleUrl = new URL(stylePath, pageUrl);
  const styleResponse = await fetchFresh(styleUrl);
  if (!styleResponse.ok) throw new Error(`${styleUrl.pathname} returned ${styleResponse.status}`);
  await styleResponse.body?.cancel();

  const criticalImages = findCriticalImagePaths(bundleSource);
  for (const asset of criticalImages) {
    const assetUrl = new URL(asset.path, pageUrl);
    const assetResponse = await fetchFresh(assetUrl);
    if (!assetResponse.ok) throw new Error(`${asset.label} (${assetUrl.pathname}) returned ${assetResponse.status}`);
    const contentType = assetResponse.headers?.get?.("content-type") || "";
    if (contentType.toLowerCase().startsWith("image/")) {
      await assetResponse.body?.cancel();
    } else if (contentType.toLowerCase().startsWith("application/octet-stream")) {
      const bytes = new Uint8Array(await assetResponse.arrayBuffer());
      if (!hasExpectedImageSignature(asset.extension, bytes)) {
        throw new Error(`${asset.label} (${assetUrl.pathname}) did not contain a valid ${asset.extension} image`);
      }
    } else if (contentType) {
      throw new Error(`${asset.label} (${assetUrl.pathname}) returned ${contentType} instead of an image`);
    } else {
      const bytes = new Uint8Array(await assetResponse.arrayBuffer());
      if (!hasExpectedImageSignature(asset.extension, bytes)) {
        throw new Error(`${asset.label} (${assetUrl.pathname}) did not contain a valid ${asset.extension} image`);
      }
    }
  }

  return { baseUrl: baseUrl.href, checkedImages: criticalImages.length };
}

export async function runDeploymentSmoke(target, options = {}) {
  const attempts = Number(options.attempts || process.env.SMOKE_ATTEMPTS || 12);
  const delay = Number(options.delay || process.env.SMOKE_DELAY_MS || 5000);
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await checkDeployment(target, options);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await wait(delay);
    }
  }
  throw new Error(`Deployment smoke check failed for ${target}: ${lastError?.message || "unknown error"}`);
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  const target = process.argv[2];
  if (!target) throw new Error("Usage: node scripts/smoke-deployment.mjs <site-url>");
  const result = await runDeploymentSmoke(target);
  console.log(`Deployment smoke check passed: ${result.baseUrl} (${result.checkedImages} critical images)`);
}

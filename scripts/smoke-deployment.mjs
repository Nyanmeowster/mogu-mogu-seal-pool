const target = process.argv[2];

if (!target) {
  throw new Error("Usage: node scripts/smoke-deployment.mjs <site-url>");
}

const baseUrl = new URL(target);
const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const attempts = Number(process.env.SMOKE_ATTEMPTS || 12);
const delay = Number(process.env.SMOKE_DELAY_MS || 5000);
const requestTimeout = Math.max(1000, Number(process.env.SMOKE_TIMEOUT_MS || 15000));
const fetchFresh = (url) => fetch(url, {
  cache: "no-store",
  redirect: "follow",
  signal: AbortSignal.timeout(requestTimeout),
});
let lastError;

for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    const pageUrl = new URL(baseUrl);
    pageUrl.searchParams.set("smoke", process.env.GITHUB_SHA || Date.now().toString(36));
    const pageResponse = await fetchFresh(pageUrl);
    if (!pageResponse.ok) throw new Error(`homepage returned ${pageResponse.status}`);

    const html = await pageResponse.text();
    if (!html.includes("MOGU MOGU")) throw new Error("homepage identity is missing");
    const scriptPath = html.match(/<script[^>]+src=["']([^"']+\.js)["']/i)?.[1];
    const stylePath = html.match(/<link[^>]+href=["']([^"']+\.css)["']/i)?.[1];
    if (!scriptPath || !stylePath) throw new Error("built JS or CSS reference is missing");

    for (const path of [scriptPath, stylePath]) {
      const assetUrl = new URL(path, pageUrl);
      const assetResponse = await fetchFresh(assetUrl);
      if (!assetResponse.ok) throw new Error(`${assetUrl.pathname} returned ${assetResponse.status}`);
      await assetResponse.body?.cancel();
    }

    console.log(`Deployment smoke check passed: ${baseUrl}`);
    process.exit(0);
  } catch (error) {
    lastError = error;
    if (attempt < attempts) await wait(delay);
  }
}

throw new Error(`Deployment smoke check failed for ${baseUrl}: ${lastError?.message || "unknown error"}`);

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  checkDeployment,
  CRITICAL_IMAGE_ASSETS,
  findCriticalImagePaths,
} from "../scripts/smoke-deployment.mjs";

const pluginSource = await readFile(new URL("../build/sites-vite-plugin.js", import.meta.url), "utf8");

function builtBundle({ omit = "" } = {}) {
  return CRITICAL_IMAGE_ASSETS
    .filter((asset) => asset.label !== omit)
    .map((asset) => `/game/assets/${asset.stem}-Ab12_cd3.${asset.extension}`)
    .join("\n");
}

test("Sites build 只保留 Vite 實際引用的素材，不會整包複製原圖與舊 3D 圖", () => {
  assert.doesNotMatch(pluginSource, /assetSource|assetOutput|cp\(assetSource/);
  assert.match(pluginSource, /copyFile\(hostingConfig/);
});

test("部署素材清單包含背景與五種體型的 idle、eat、chew", () => {
  const paths = findCriticalImagePaths(builtBundle());
  assert.equal(paths.length, 16);
  for (let stage = 1; stage <= 5; stage += 1) {
    assert.ok(paths.some((asset) => asset.label === `stage ${stage} idle`));
    assert.ok(paths.some((asset) => asset.label === `stage ${stage} eat`));
    assert.ok(paths.some((asset) => asset.label === `stage ${stage} chew`));
  }
  assert.throws(() => findCriticalImagePaths(builtBundle({ omit: "stage 4 chew" })), /stage 4 chew reference is missing/);
});

test("部署 smoke 會實際請求所有 16 張關鍵圖片", async () => {
  const requested = [];
  const html = '<!doctype html><title>MOGU MOGU</title><script src="./assets/app.js"></script><link rel="stylesheet" href="./assets/app.css">';
  const fetchImpl = async (input) => {
    const url = new URL(input);
    requested.push(url.pathname);
    if (url.pathname === "/game/") return new Response(html, { status: 200, headers: { "content-type": "text/html" } });
    if (url.pathname === "/game/assets/app.js") return new Response(builtBundle(), { status: 200, headers: { "content-type": "text/javascript" } });
    if (url.pathname === "/game/assets/app.css") return new Response("body{}", { status: 200, headers: { "content-type": "text/css" } });
    if (url.pathname.startsWith("/game/assets/")) return new Response("image", { status: 200, headers: { "content-type": "image/webp" } });
    return new Response("missing", { status: 404 });
  };

  const result = await checkDeployment("https://example.test/game/", { fetchImpl, cacheKey: "test" });
  assert.equal(result.checkedImages, 16);
  assert.equal(requested.filter((path) => /(?:\.webp|\.jpg)$/.test(path)).length, 16);
});

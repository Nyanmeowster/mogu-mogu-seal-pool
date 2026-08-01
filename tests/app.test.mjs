import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [html, script, styles, readme] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../app.js", import.meta.url), "utf8"),
  readFile(new URL("../style.css", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8"),
]);

test("餵食連擊介面與加成已完整移除", () => {
  assert.doesNotMatch(html, /餵食連擊|feed-streak|streak-text|streak-bar/);
  assert.doesNotMatch(styles, /feed-streak|feed-meter|is-streak/);
  assert.doesNotMatch(script, /FEED_STREAK|nextStreak|bonusSatiety|bonusText/);
  assert.doesNotMatch(readme, /餵食連擊/);
  assert.match(script, /const satietyGain = 10;/);
});

test("舊版連擊資料會在讀檔時清除", () => {
  assert.match(script, /delete normalized\.feedStreak;/);
  assert.match(script, /delete normalized\.lastFeedComboAt;/);
  assert.match(script, /delete normalized\.bestFeedStreak;/);
});

test("固定沿用最終 2D 海豹素材", () => {
  assert.match(script, /const FORCE_SPRITE_FALLBACK = true;/);
  assert.match(script, /const SPRITE_ASSETS = \[/);
  assert.equal((script.match(/seal-stage-[1-5](?:-(?:eat|pet|walk))?\.webp/g) || []).length, 20);
  assert.equal((script.match(/seal-stage-[1-5]-eat-closed-v2\.webp/g) || []).length, 5);
  assert.equal((script.match(/seal-stage-[1-5]-doflamingo-ring\.webp/g) || []).length, 5);
  assert.match(html, /id="seal-art-wrap"/);
  assert.doesNotMatch(html, /seal-three-canvas|GLTFLoader|three\.min\.js/);
  assert.match(styles, /background-size: contain;/);
  assert.doesNotMatch(styles, /background-size: 300% 200%;/);
});

test("不同互動會切換對應姿勢與動作", () => {
  assert.match(script, /function react\(kind, icon, zone = "", visualAsset = "", motion = ""\)/);
  assert.match(script, /seal\.dataset\.motion = motion/);
  assert.match(script, /const careVisuals = \{/);
  assert.match(script, /const petVisuals = \{/);
  assert.match(script, /feed-\$\{food\.sound\}/);
  assert.match(styles, /data-motion="head"/);
  assert.match(styles, /data-motion="enrich"/);
  assert.match(styles, /@keyframes interaction-fin-swim/);
});

test("餵食後會有連續咀嚼動畫", () => {
  assert.match(html, /id="seal-jaw-sprite"/);
  assert.match(styles, /\.pet-seal\.eat \.seal-action-sprite/);
  assert.match(styles, /\.pet-seal\.eat \.seal-jaw-sprite/);
  assert.match(styles, /animation: seal-frame-chew 1\.32s steps\(1, end\);/);
  assert.match(styles, /@keyframes seal-frame-chew/);
  assert.match(styles, /20%, 36%, 52%, 68%, 84%/);
  assert.match(script, /seal-jaw-sprite/);
  assert.match(script, /chew: sealStage5Chew/);
});

test("真實照護狀態包含飽足、信任、健康與水質", () => {
  assert.match(styles, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(html, /id="satiety-status"/);
  assert.match(html, /id="affection-status"/);
  assert.match(html, /id="health-status"/);
  assert.match(html, /id="water-status"/);
  assert.match(script, /function performCare\(actionId\)/);
  assert.match(script, /const CARE_ACTIONS = \[/);
  assert.match(script, /pet\.waterQuality/);
  assert.match(script, /pet\.energy/);
});

test("進入網站會先載入並解碼全部 2D 體型素材", () => {
  assert.match(html, /id="app-loader"/);
  assert.equal((html.match(/rel="preload" as="image"/g) || []).length, 5);
  assert.match(script, /async function preloadEssentialAssets\(\)/);
  assert.match(script, /SPRITE_ASSETS\.slice\(1\)\.flatMap/);
  assert.match(script, /function preloadImage\(url\)/);
  assert.match(script, /await image\.decode\(\)/);
  assert.match(script, /async function bootApp\(\)/);
  assert.match(script, /interactionLock = true;/);
  assert.match(script, /interactionLock = false;/);
});

test("遊戲泳池沿用封面風格的乾淨背景並預先載入", () => {
  assert.match(script, /pool-background-cover-v1\.jpg/);
  assert.match(script, /--pool-background/);
  assert.match(script, /`\$\{poolBackground\}\?v=\$\{ASSET_VERSION\}`/);
  assert.match(styles, /var\(--pool-background\)/);
  assert.match(styles, /background-size: cover;/);
});

test("上岸休息會實際移動到背景石台並停留", () => {
  assert.match(script, /resting-on-rock/);
  assert.match(script, /motion === "haul" \? 7200/);
  assert.match(script, /if \(motion === "haul"\) setBusy\(true\);/);
  assert.match(styles, /\.seal-roamer\.reacting\.resting-on-rock/);
  assert.match(styles, /@keyframes haul-out-to-rock/);
  assert.match(styles, /translate: clamp\(64px, 21cqw, 152px\) -68px;/);
  assert.match(styles, /@keyframes rock-sleep/);
});

test("Doflamingo 泳圈會依海豹比例放大並切換專屬玩耍圖", () => {
  assert.match(script, /data-pool-toy="ring"/);
  assert.match(script, /doflamingo-swim-ring-v1\.webp/);
  assert.match(script, /ring: sealStage5Ring/);
  assert.match(script, /<img src="\$\{doflamingoRing\}/);
  assert.match(script, /function ringTouchesSeal\(ring\)/);
  assert.match(script, /pointermove/);
  assert.match(script, /pet\.affection = clamp\(pet\.affection \+ 5\)/);
  assert.match(script, /"ring-play"/);
  assert.match(script, /react\("pet", "🦩", "ring", "ring", "ring-play"\)/);
  assert.match(styles, /width: clamp\(150px, 42cqw, 220px\);/);
  assert.match(styles, /touch-action: none;/);
  assert.match(styles, /\.decor-ring\.is-over-seal/);
  assert.match(styles, /@keyframes interaction-ring-play/);
});

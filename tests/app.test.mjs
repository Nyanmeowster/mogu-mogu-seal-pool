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
  assert.equal((script.match(/seal-stage-[1-5]-sprite\.png/g) || []).length, 5);
  assert.match(html, /id="seal-art-wrap"/);
  assert.doesNotMatch(html, /seal-three-canvas|GLTFLoader|three\.min\.js/);
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
  assert.match(script, /stages = \[1, 2, 3, 4, 5\]/);
  assert.match(script, /await image\.decode\(\)/);
  assert.match(script, /async function bootApp\(\)/);
  assert.match(script, /interactionLock = true;/);
  assert.match(script, /interactionLock = false;/);
});

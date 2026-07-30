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

test("即時 3D 使用可執行的程序化海豹模型", () => {
  assert.match(script, /import \* as THREE from "three";/);
  assert.match(script, /function createProceduralSealModel\(\)/);
  assert.match(script, /function createSealCoatTexture\(seed = 1\)/);
  assert.match(script, /new THREE\.WebGLRenderer/);
  assert.match(script, /new ResizeObserver\(\(\) => syncCanvasSize\(\)\)/);
  assert.match(html, /id="seal-art-wrap"/);
  assert.doesNotMatch(html, /GLTFLoader|three\.min\.js/);
});

test("狀態列維持飽足度與好感度兩欄", () => {
  assert.match(styles, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(html, /id="satiety-status"/);
  assert.match(html, /id="affection-status"/);
});

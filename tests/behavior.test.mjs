import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const script = await readFile(new URL("../app.js", import.meta.url), "utf8");
const currentSchemaVersion = Number(script.match(/^const SAVE_SCHEMA_VERSION = (\d+);/m)?.[1]);
assert.ok(Number.isInteger(currentSchemaVersion), "app.js 應宣告數字 SAVE_SCHEMA_VERSION");

function extractFunction(name) {
  const start = script.indexOf(`function ${name}(`);
  assert.notEqual(start, -1, `app.js 應宣告 ${name}()`);
  const bodyStart = script.indexOf("{", start);
  let depth = 0;
  let quote = "";
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = bodyStart; index < script.length; index += 1) {
    const character = script[index];
    const next = script[index + 1];

    if (lineComment) {
      if (character === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (character === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = "";
      continue;
    }
    if (character === "/" && next === "/") {
      lineComment = true;
      index += 1;
      continue;
    }
    if (character === "/" && next === "*") {
      blockComment = true;
      index += 1;
      continue;
    }
    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      continue;
    }
    if (character === "{") depth += 1;
    if (character === "}") {
      depth -= 1;
      if (depth === 0) return script.slice(start, index + 1);
    }
  }

  assert.fail(`無法擷取 ${name}() 的完整函式內容`);
}

function extractOptionalFunction(name) {
  return script.includes(`function ${name}(`) ? extractFunction(name) : "";
}

function extractConstant(name) {
  const match = script.match(new RegExp(`^const ${name} = [^;]+;`, "m"));
  assert.ok(match, `app.js 應宣告 ${name}`);
  return match[0];
}

class MemoryStorage {
  constructor(entries = {}) {
    this.values = new Map(Object.entries(entries));
  }

  getItem(key) {
    return this.values.has(key) ? this.values.get(key) : null;
  }

  setItem(key, value) {
    this.values.set(key, String(value));
  }

  removeItem(key) {
    this.values.delete(key);
  }
}

function completeSave(overrides = {}) {
  const now = 1_750_000_000_000;
  return {
    schemaVersion: currentSchemaVersion,
    satiety: 55,
    affection: 48,
    energy: 72,
    waterQuality: 86,
    health: 91,
    bodyCondition: 52,
    coins: 18,
    lastFedAt: now,
    lastSeenAt: now,
    lastStatAt: now,
    lastCoinAt: now,
    offlineRemainderMs: 0,
    updatedAt: now,
    owned: [],
    active: [],
    dead: false,
    soundOn: true,
    vibrationOn: true,
    careLog: {},
    recentFoods: [],
    activityLog: [],
    memories: [],
    interactionCounts: {},
    lastResponseIndexes: {},
    profileComplete: true,
    name: "Mogu",
    ...overrides,
  };
}

function createSaveHarness({ current = null, backup = null, pet = completeSave() } = {}) {
  const storage = new MemoryStorage({
    ...(current === null ? {} : { "mogu-pet-v1": JSON.stringify(current) }),
    ...(backup === null ? {} : { "mogu-pet-v1-backup": JSON.stringify(backup) }),
  });
  const notices = [];
  const context = vm.createContext({
    console,
    localStorage: storage,
    seedPet: structuredClone(pet),
    document: { body: { classList: { contains: () => false } } },
    showNotice: (...args) => notices.push(args),
  });
  const declarations = [
    extractConstant("SAVE_KEY"),
    extractConstant("SAVE_BACKUP_KEY"),
    extractConstant("SAVE_SCHEMA_VERSION"),
    extractConstant("HOUR"),
    extractConstant("COIN_INTERVAL"),
    "const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));",
    "const PREVIEW_DEAD = false;",
    "let storageAvailable = true;",
    "let storageWarningShown = false;",
    "let recoveredSave = false;",
    "let saveWriteProtected = false;",
    "let futureSaveWarningShown = false;",
    "let tabReadOnly = false;",
    "let tabOwnershipMode = 'none';",
    "let pet = globalThis.seedPet;",
    extractFunction("decodeSavedPet"),
    extractFunction("isRecognizableSave"),
    extractOptionalFunction("isCompleteSave"),
    extractFunction("hasFutureSchema"),
    extractFunction("protectFutureSave"),
    extractFunction("migrateSave"),
    extractFunction("parseSavedPet"),
    extractFunction("safeRead"),
    extractFunction("safeSave"),
    `globalThis.saveApi = {
      safeRead,
      safeSave,
      migrateSave,
      parseSavedPet,
      state: () => ({ storageAvailable, recoveredSave, saveWriteProtected, pet }),
    };`,
  ].filter(Boolean).join("\n");
  vm.runInContext(declarations, context);
  return { api: context.saveApi, storage, notices };
}

test("v1 存檔會執行真正的遷移函式並清除舊餵食連擊", () => {
  const legacy = completeSave({
    schemaVersion: undefined,
    feedStreak: 9,
    lastFeedComboAt: 123,
    bestFeedStreak: 12,
    lastResponseIndexes: undefined,
  });
  const { api } = createSaveHarness({ current: legacy });

  const restored = api.safeRead();

  assert.equal(restored.schemaVersion, currentSchemaVersion);
  assert.equal(restored.feedStreak, undefined);
  assert.equal(restored.lastFeedComboAt, undefined);
  assert.equal(restored.bestFeedStreak, undefined);
  assert.equal(Object.prototype.toString.call(restored.lastResponseIndexes), "[object Object]");
});

test("殘缺主存檔不會阻止有效備份復原", () => {
  const backup = completeSave({ satiety: 63, updatedAt: 1_750_000_000_300 });
  const { api } = createSaveHarness({ current: { owned: [] }, backup });

  const restored = api.safeRead();

  assert.equal(restored.satiety, 63);
  assert.equal(restored.updatedAt, backup.updatedAt);
  assert.equal(api.state().recoveredSave, true);
});

test("寫入新進度時不會用殘缺主檔污染既有備份", () => {
  const backup = completeSave({ satiety: 71, updatedAt: 1_750_000_000_100 });
  const nextPet = completeSave({ satiety: 82, updatedAt: 1_750_000_000_500 });
  const { api, storage } = createSaveHarness({ current: { owned: [] }, backup, pet: nextPet });
  const originalBackup = storage.getItem("mogu-pet-v1-backup");

  api.safeSave();

  assert.equal(storage.getItem("mogu-pet-v1-backup"), originalBackup);
  assert.equal(JSON.parse(storage.getItem("mogu-pet-v1")).satiety, 82);
});

test("舊程式不會覆寫較新 schema 的存檔", () => {
  const future = completeSave({ schemaVersion: 99, satiety: 96 });
  const { api, storage } = createSaveHarness({ current: future, pet: completeSave({ satiety: 12 }) });
  const original = storage.getItem("mogu-pet-v1");

  api.safeSave();

  assert.equal(storage.getItem("mogu-pet-v1"), original);
  assert.equal(api.state().saveWriteProtected, true);
});

test("schema 4 會用舊體型資料建立持久化體態，且保留舊幣", () => {
  const legacy = completeSave({
    schemaVersion: 4,
    satiety: 63,
    bodyCondition: undefined,
    coins: 1000,
  });
  const { api } = createSaveHarness({ current: legacy });

  const restored = api.safeRead();

  assert.equal(restored.schemaVersion, currentSchemaVersion);
  assert.equal(restored.bodyCondition, 63);
  assert.equal(restored.coins, 1000);
});

test("schema 5 的舊版中止狀態會遷移為可恢復的專業照護", () => {
  const legacy = completeSave({
    schemaVersion: 5,
    dead: true,
    carePauseReason: undefined,
    name: "阿福",
    achievements: ["hello"],
  });
  const { api } = createSaveHarness({ current: legacy });

  const restored = api.safeRead();

  assert.equal(restored.schemaVersion, currentSchemaVersion);
  assert.equal(restored.carePauseReason, "clinic");
  assert.equal(restored.name, "阿福");
  assert.deepEqual(Array.from(restored.achievements), ["hello"]);
});

test("舊存檔缺少照護時間時會回填穩定的照護基準", () => {
  const checkpoint = 1_750_000_000_000;
  const context = vm.createContext({});
  vm.runInContext([
    extractFunction("positiveTimestampOr"),
    `const careCheckpoint = positiveTimestampOr(${checkpoint}, 123);`,
    "globalThis.restCheckpoint = positiveTimestampOr(0, careCheckpoint);",
    "globalThis.cleanCheckpoint = positiveTimestampOr(null, careCheckpoint);",
  ].join("\n"), context);
  assert.equal(context.restCheckpoint, checkpoint);
  assert.equal(context.cleanCheckpoint, checkpoint);
});

test("匯入的未來照護時間會被限制在當下，無效照護鍵會被移除", () => {
  const now = 1_750_000_000_000;
  const context = vm.createContext({});
  vm.runInContext([
    `const CARE_ACTIONS = [{ id: "haul" }, { id: "clean" }, { id: "enrich" }, { id: "check" }];`,
    extractFunction("positiveTimestampOr"),
    extractFunction("normalizeCareLog"),
    `globalThis.timestamps = {
      checkpoint: positiveTimestampOr(${now + 10_000}, 123, ${now}),
      careLog: normalizeCareLog({ haul: ${now + 20_000}, clean: ${now - 1000}, unknown: ${now + 30_000}, check: "bad" }, ${now}),
    };`,
  ].join("\n"), context);

  assert.equal(context.timestamps.checkpoint, now);
  assert.equal(context.timestamps.careLog.haul, now);
  assert.equal(context.timestamps.careLog.clean, now - 1000);
  assert.equal(context.timestamps.careLog.unknown, undefined);
  assert.equal(context.timestamps.careLog.check, undefined);
});

test("殘缺的未來 schema 會保持寫入保護並顯示有效備份", () => {
  const backup = completeSave({ satiety: 67, updatedAt: 1_750_000_000_700 });
  const { api } = createSaveHarness({ current: { schemaVersion: 99 }, backup });

  const restored = api.safeRead();

  assert.equal(restored.satiety, 67);
  assert.equal(api.state().recoveredSave, true);
  assert.equal(api.state().saveWriteProtected, true);
});

function createLeaseHarness(storage, tabId) {
  const context = vm.createContext({ localStorage: storage });
  vm.runInContext([
    `const TAB_LEASE_KEY = "mogu-pet-v1-primary-writer-lease";`,
    `const TAB_LEASE_DURATION = 15000;`,
    `const TAB_ID = ${JSON.stringify(tabId)};`,
    `let storageAvailable = true;`,
    `let tabOwnershipMode = "lease";`,
    extractFunction("decodeTabLease"),
    extractFunction("readTabLease"),
    extractFunction("acquireTabLease"),
    extractFunction("renewTabLease"),
    `globalThis.leaseApi = { acquireTabLease, renewTabLease, available: () => storageAvailable };`,
  ].join("\n"), context);
  return context.leaseApi;
}

test("Web Locks 不可用時，localStorage lease 同一時間只允許一個寫入者", () => {
  const storage = new MemoryStorage();
  const first = createLeaseHarness(storage, "tab-a");
  const second = createLeaseHarness(storage, "tab-b");

  assert.equal(first.acquireTabLease(1000), true);
  assert.equal(second.acquireTabLease(1000), false);
  assert.equal(first.renewTabLease(5000), true);
  assert.equal(second.acquireTabLease(19_999), false);
  assert.equal(second.acquireTabLease(20_001), true);
  assert.equal(first.renewTabLease(20_002), false);
});

test("Web Locks request 拒絕時會保持唯讀，不會失敗即放行", async () => {
  const context = vm.createContext({
    navigator: { locks: { request: () => Promise.reject(new Error("denied")) } },
    Promise,
  });
  vm.runInContext([
    `let storageAvailable = true; let tabOwnershipMode = "none"; let tabReadOnly = false;`,
    `function acquireTabLease() { throw new Error("lease branch should not run"); }`,
    `function startTabLeaseHeartbeat() {}`,
    `function queueLeaseTakeover() {}`,
    extractFunction("establishTabOwnership"),
    `globalThis.ownershipApi = { establishTabOwnership, readOnly: () => tabReadOnly };`,
  ].join("\n"), context);

  assert.equal(await context.ownershipApi.establishTabOwnership(), false);
  assert.equal(context.ownershipApi.readOnly(), true);
});

function createClassList() {
  const values = new Set();
  return {
    contains: (name) => values.has(name),
    toggle(name, force) {
      if (force === undefined ? !values.has(name) : force) values.add(name);
      else values.delete(name);
    },
  };
}

function createInteractionHarness() {
  const attributes = { seal: new Map(), drawer: new Map() };
  const elements = {
    seal: { setAttribute: (name, value) => attributes.seal.set(name, value) },
    drawer: { setAttribute: (name, value) => attributes.drawer.set(name, value) },
  };
  const app = { classList: createClassList() };
  const regularButton = { disabled: false, dataset: {} };
  const alreadyDisabledButton = { disabled: true, dataset: {} };
  const buttons = [regularButton, alreadyDisabledButton];
  const context = vm.createContext({
    document: {
      getElementById: (id) => elements[id],
      querySelector: (selector) => selector === ".pet-app" ? app : null,
      querySelectorAll: () => buttons,
    },
  });
  vm.runInContext([
    "const $ = (id) => document.getElementById(id);",
    "let interactionLock = false;",
    "let interactionGeneration = 0;",
    "let tabReadOnly = false;",
    "let saveWriteProtected = false;",
    "let ringDrag = null;",
    "let poolToyDrag = null;",
    extractFunction("setBusy"),
    extractFunction("syncInteractionState"),
    "globalThis.interactionApi = { setBusy, state: () => interactionLock };",
  ].join("\n"), context);
  return { api: context.interactionApi, attributes, app, regularButton, alreadyDisabledButton };
}

test("互動鎖會真正停用操作，結束後只恢復原本可用的按鈕", () => {
  const { api, attributes, app, regularButton, alreadyDisabledButton } = createInteractionHarness();

  api.setBusy(true);

  assert.equal(api.state(), true);
  assert.equal(attributes.seal.get("aria-busy"), "true");
  assert.equal(attributes.drawer.get("aria-busy"), "true");
  assert.equal(app.classList.contains("is-interacting"), true);
  assert.equal(regularButton.disabled, true);
  assert.equal(regularButton.dataset.busyDisabled, "true");
  assert.equal(alreadyDisabledButton.disabled, true);
  assert.equal(alreadyDisabledButton.dataset.busyDisabled, undefined);

  api.setBusy(false);

  assert.equal(api.state(), false);
  assert.equal(attributes.drawer.get("aria-busy"), "false");
  assert.equal(app.classList.contains("is-interacting"), false);
  assert.equal(regularButton.disabled, false);
  assert.equal(regularButton.dataset.busyDisabled, undefined);
  assert.equal(alreadyDisabledButton.disabled, true);
});

test("較早動作的計時器不能提早解除較新的互動鎖", () => {
  const { api } = createInteractionHarness();

  const firstAction = api.setBusy(true);
  const secondAction = api.setBusy(true);

  assert.equal(api.setBusy(false, firstAction), false);
  assert.equal(api.state(), true);
  assert.equal(api.setBusy(false, secondAction), true);
  assert.equal(api.state(), false);
});

test("今日進度卡會計算三個目標並跳脫匯入紀錄內容", () => {
  const context = vm.createContext({});
  vm.runInContext([
    extractConstant("DAILY_GOALS"),
    `const pet = {
      daily: { feed: 1, care: 2, play: 0, foods: ['鯡魚'] },
      activityLog: [{ id: 'unsafe', icon: '<img src=x>', text: '<script>壞紀錄</script>' }],
    };`,
    extractFunction("escapeAttribute"),
    extractFunction("dailyGoalValue"),
    extractFunction("renderCareProgressCard"),
    "globalThis.progressMarkup = renderCareProgressCard();",
  ].join("\n"), context);

  const markup = context.progressMarkup;
  assert.match(markup, /1／3 完成/);
  assert.match(markup, /1／2 進行中/);
  assert.match(markup, /2／2 完成/);
  assert.equal((markup.match(/class="is-done"/g) || []).length, 1);
  assert.doesNotMatch(markup, /<script>|<img src=x>/);
  assert.match(markup, /&lt;script&gt;壞紀錄&lt;\/script&gt;/);
});

function createFakeTimers() {
  let now = 0;
  let nextId = 1;
  const scheduled = [];
  return {
    setTimeout(callback, delay = 0) {
      const task = { id: nextId, at: now + Number(delay), callback };
      nextId += 1;
      scheduled.push(task);
      return task.id;
    },
    advance(milliseconds) {
      const target = now + milliseconds;
      while (true) {
        scheduled.sort((left, right) => left.at - right.at || left.id - right.id);
        const task = scheduled[0];
        if (!task || task.at > target) break;
        scheduled.shift();
        now = task.at;
        task.callback();
      }
      now = target;
    },
  };
}

function createFeedHarness() {
  const timers = createFakeTimers();
  const renderedStages = [];
  const reactionStages = [];
  const preloadedStages = [];
  const completedOnboardingSteps = [];
  const context = vm.createContext({
    setTimeout: timers.setTimeout,
    renderedStages,
    reactionStages,
    preloadedStages,
    completedOnboardingSteps,
  });
  vm.runInContext([
    "const COARSE_POINTER = false;",
    "let coarsePointer = false;",
    "const FEED_LINES = ['吃完了'];",
    "const THREE_POSE_STATES = { EAT: 'eat' };",
    "const threeState = { ready: false };",
    "const preloaded = new Set();",
    "const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));",
    `let pet = {
      dead: false,
      satiety: 35,
      affection: 20,
      health: 90,
      energy: 72,
      bodyCondition: 39.5,
      recentFoods: [],
    };`,
    "let currentStage = 2;",
    "let visualStageLock = 0;",
    "let visualStageGeneration = 0;",
    "let interactionGeneration = 0;",
    "let interactionLock = false;",
    "let tabReadOnly = false;",
    "let saveWriteProtected = false;",
    "function syncInteractionState() {}",
    "function safeSave() {}",
    "function animateFood() {}",
    "function sound() {}",
    "function vibrate() {}",
    "function showNotice() {}",
    "function rememberInteraction() {}",
    "function updateDaily() {}",
    "function addActivity() {}",
    "function pickVariant(_key, options) { return options[0]; }",
    "function prefersReducedMotion() { return true; }",
    `function preloadStage(nextStage) {
      preloadedStages.push(nextStage);
      preloaded.add(nextStage);
      return Promise.resolve(true);
    }`,
    `function preloadStageActions(nextStage, actions) {
      preloadedStages.push(nextStage);
      preloaded.add(nextStage);
      return Promise.resolve(actions.map(() => true));
    }`,
    "function render() { renderedStages.push(visualStageLock || stage()); }",
    "function react() { reactionStages.push(visualStageLock || stage()); }",
    "function advanceOnboarding(step) { completedOnboardingSteps.push(step); }",
    extractFunction("stageForBodyCondition"),
    extractFunction("stageForSatiety"),
    extractFunction("stage"),
    extractFunction("setBusy"),
    extractFunction("feed"),
    `globalThis.feedApi = {
      start: () => feed({ id: 'fish', icon: '🐟', name: '鯡魚', sound: 'fish', health: 2 }, {}),
      kill: () => { pet.dead = true; },
      invalidate: () => setBusy(true),
      state: () => ({
        dead: pet.dead,
        satiety: pet.satiety,
        bodyCondition: pet.bodyCondition,
        interactionLock,
        visualStageLock,
        visibleStage: visualStageLock || stage(),
      }),
    };`,
  ].join("\n"), context);
  return { api: context.feedApi, timers, renderedStages, reactionStages, preloadedStages, completedOnboardingSteps };
}

test("餵食跨越體型門檻時，咀嚼完成前維持原圖並持續鎖定互動", () => {
  const harness = createFeedHarness();

  harness.api.start();
  assert.equal(harness.api.state().satiety, 35);
  assert.equal(harness.api.state().interactionLock, true);
  assert.equal(harness.api.state().visualStageLock, 2);
  assert.equal(harness.api.state().visibleStage, 2);
  assert.deepEqual(harness.preloadedStages, [3]);

  harness.timers.advance(60);
  assert.equal(harness.api.state().satiety, 45);
  assert.equal(harness.api.state().bodyCondition, 40.1);
  assert.equal(harness.api.state().visibleStage, 2);
  assert.equal(harness.api.state().interactionLock, true);
  assert.deepEqual(harness.renderedStages, [2]);
  assert.deepEqual(harness.reactionStages, [2]);

  harness.timers.advance(119);
  assert.equal(harness.api.state().visibleStage, 2);
  assert.equal(harness.api.state().interactionLock, true);

  harness.timers.advance(1);
  assert.equal(harness.api.state().visualStageLock, 0);
  assert.equal(harness.api.state().visibleStage, 3);
  assert.equal(harness.api.state().interactionLock, false);
  assert.deepEqual(harness.renderedStages, [2, 3]);
  assert.deepEqual(harness.completedOnboardingSteps, [2]);
});

test("餐點延遲期間若海豹死亡，舊回呼不會將它復活或增加狀態", () => {
  const harness = createFeedHarness();
  harness.api.start();
  harness.api.kill();
  harness.timers.advance(60);

  assert.equal(harness.api.state().dead, true);
  assert.equal(harness.api.state().satiety, 35);
  assert.equal(harness.api.state().bodyCondition, 39.5);
  assert.equal(harness.api.state().interactionLock, false);
  assert.equal(harness.api.state().visualStageLock, 0);
  assert.deepEqual(harness.reactionStages, []);
});

test("較新互動已取得鎖時，舊餐點回呼不會提交或提早解鎖", () => {
  const harness = createFeedHarness();
  harness.api.start();
  harness.api.invalidate();
  harness.timers.advance(60);

  assert.equal(harness.api.state().satiety, 35);
  assert.equal(harness.api.state().interactionLock, true);
  assert.equal(harness.api.state().visualStageLock, 0);
  assert.deepEqual(harness.reactionStages, []);
});

function createElapsedStatsHarness(overrides = {}) {
  const start = 1_750_000_000_000;
  const context = vm.createContext({ seedPet: {
    dead: false, carePauseReason: "", satiety: 35, affection: 20, energy: 72, waterQuality: 86, health: 90,
    bodyCondition: 48, interactionFatigue: 0, recentFoods: [], lastRestAt: start,
    lastCleanAt: start, lastFedAt: start, lastStatAt: start, ...overrides,
  } });
  vm.runInContext([
    extractConstant("HOUR"), extractConstant("FIVE_DAYS"),
    "const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));",
    "let pet = globalThis.seedPet;", extractFunction("applyElapsedStats"),
    "globalThis.elapsedApi = { applyElapsedStats, pet: () => pet };",
  ].join("\n"), context);
  return { api: context.elapsedApi, start };
}

test("全新健康海豹離線 24 小時不會死亡，衰減有合理上限", () => {
  const { api, start } = createElapsedStatsHarness();
  api.applyElapsedStats(start + 24 * 36e5);
  assert.equal(api.pet().dead, false);
  assert.ok(api.pet().satiety >= 27);
  assert.ok(api.pet().waterQuality >= 80);
  assert.ok(api.pet().health >= 80);
});

test("一次結算與逐時計算的照護衰減一致", () => {
  const batch = createElapsedStatsHarness();
  const stepped = createElapsedStatsHarness();
  batch.api.applyElapsedStats(batch.start + 96 * 36e5);
  for (let hour = 1; hour <= 96; hour += 1) {
    stepped.api.applyElapsedStats(stepped.start + hour * 36e5);
  }
  for (const key of ["satiety", "affection", "energy", "waterQuality", "health", "bodyCondition"]) {
    assert.ok(Math.abs(batch.api.pet()[key] - stepped.api.pet()[key]) < 0.001, `${key} should be stable across batching`);
  }
  assert.equal(batch.api.pet().dead, false);
  assert.equal(stepped.api.pet().dead, false);
});

test("長時間離線傷害會封頂，五天未餵會安全轉交代班照護", () => {
  const fourDays = createElapsedStatsHarness();
  fourDays.api.applyElapsedStats(fourDays.start + 4 * 24 * 36e5);
  assert.equal(fourDays.api.pet().dead, false);
  assert.ok(fourDays.api.pet().health >= 70);
  const fiveDays = createElapsedStatsHarness();
  fiveDays.api.applyElapsedStats(fiveDays.start + 5 * 24 * 36e5);
  assert.equal(fiveDays.api.pet().dead, true);
  assert.equal(fiveDays.api.pet().carePauseReason, "substitute");
});

test("結束代班照護會保留名字、回憶、收藏、成就與長期進度", () => {
  const start = 1_750_000_000_000;
  const preserved = {
    name: "阿福",
    birthday: "2025-04-03",
    dead: true,
    carePauseReason: "substitute",
    satiety: 12,
    energy: 18,
    waterQuality: 22,
    health: 14,
    affection: 83,
    bodyCondition: 67,
    coins: 91,
    owned: ["ring", "plant"],
    active: ["ring"],
    memories: [{ id: "memory-1", text: "一起玩泳圈" }],
    achievements: ["hello", "ring-friend"],
    lifetime: { feeds: 40, care: 21, play: 35, ring: 7, days: ["2026-08-20"] },
    currentHealthEvent: "tired",
    diagnosedHealthEvent: "tired",
  };
  const activities = [];
  const context = vm.createContext({ seedPet: structuredClone(preserved), activities });
  vm.runInContext([
    "let pet = globalThis.seedPet;",
    "const addActivity = (...args) => globalThis.activities.push(args);",
    extractFunction("recoverFromCarePause"),
    "globalThis.recoveryApi = { recoverFromCarePause, pet: () => pet };",
  ].join("\n"), context);

  const reason = context.recoveryApi.recoverFromCarePause(start);
  const restored = context.recoveryApi.pet();

  assert.equal(reason, "substitute");
  assert.equal(restored.dead, false);
  assert.equal(restored.carePauseReason, "");
  for (const key of ["name", "birthday", "affection", "bodyCondition", "coins"]) {
    assert.deepEqual(restored[key], preserved[key]);
  }
  for (const key of ["owned", "active", "memories", "achievements", "lifetime"]) {
    assert.deepEqual(structuredClone(restored[key]), preserved[key]);
  }
  assert.ok(restored.satiety >= 45);
  assert.ok(restored.energy >= 65);
  assert.ok(restored.waterQuality >= 75);
  assert.ok(restored.health >= 70);
  assert.equal(restored.lastFedAt, start);
  assert.match(activities[0][1], /代班照護完成/);
});

test("外觀階段只看長期 bodyCondition，不隨當下飽足度跳動", () => {
  const context = vm.createContext({});
  vm.runInContext([
    "let pet = { satiety: 99, bodyCondition: 30 };", extractFunction("stageForBodyCondition"),
    extractFunction("stageForSatiety"), extractFunction("stage"),
    "globalThis.stageApi = { stage, satiety: (value) => { pet.satiety = value; }, body: (value) => { pet.bodyCondition = value; } };",
  ].join("\n"), context);
  assert.equal(context.stageApi.stage(), 2);
  context.stageApi.satiety(1);
  assert.equal(context.stageApi.stage(), 2);
  context.stageApi.body(75);
  assert.equal(context.stageApi.stage(), 4);
});

function createCareHarness() {
  const context = vm.createContext({});
  vm.runInContext([
    "const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));",
    `const CARE_ACTIONS = [{ id: "check", name: "健康檢查", cooldown: 0 }, { id: "enrich", name: "探索活動", cooldown: 0 }];`,
    `const HEALTH_EVENTS = { appetite: { title: "食慾降低", treatment: "enrich", requiresCheck: true } };`,
    `let pet = { dead: false, health: 60, affection: 30, energy: 70, currentHealthEvent: "appetite", diagnosedHealthEvent: "", careLog: {} };`,
    "let interactionLock = false; let tabReadOnly = false; let saveWriteProtected = false; let drawerKey = '';",
    "function setBusy() { return 1; } function updateDaily() {} function addActivity() {} function showNotice() {} function sound() {} function vibrate() {} function render() {} function react() {} function advanceOnboarding() {}",
    "function reactionDuration() { return 0; } function setTimeout() {}",
    extractFunction("careCooldown"), extractFunction("performCare"),
    "globalThis.careApi = { performCare, pet: () => pet };",
  ].join("\n"), context);
  return context.careApi;
}

test("健康檢查只建立診斷記錄，正確處置後才小幅恢復", () => {
  const api = createCareHarness();
  api.performCare("check");
  assert.equal(api.pet().health, 60);
  assert.equal(api.pet().currentHealthEvent, "appetite");
  assert.equal(api.pet().diagnosedHealthEvent, "appetite");
  api.performCare("enrich");
  assert.equal(api.pet().health, 64);
  assert.equal(api.pet().currentHealthEvent, "");
});

test("互動疲勞只會讓收益漸減，不會硬鎖為零", () => {
  const context = vm.createContext({});
  vm.runInContext([
    "let pet = { interactionFatigue: 82 };", extractFunction("interactionAffectionGain"),
    "globalThis.fatigueApi = { gain: interactionAffectionGain, set: (value) => { pet.interactionFatigue = value; } };",
  ].join("\n"), context);
  const tiredGain = context.fatigueApi.gain(9);
  assert.ok(tiredGain > 0 && tiredGain < 9);
  context.fatigueApi.set(100);
  assert.equal(context.fatigueApi.gain(2), 1);
});

test("離線幣改為每六小時一枚", () => {
  const start = 1_750_000_000_000;
  const context = vm.createContext({});
  vm.runInContext([
    extractConstant("HOUR"), extractConstant("COIN_INTERVAL"),
    `let pet = { lastCoinAt: ${start}, lastSeenAt: ${start}, offlineRemainderMs: 0, coins: 11 };`,
    extractFunction("collectOfflineCoins"),
    `globalThis.coinApi = { collect: () => collectOfflineCoins(${start} + 24 * HOUR), pet: () => pet };`,
  ].join("\n"), context);
  assert.equal(context.coinApi.collect(), 4);
  assert.equal(context.coinApi.pet().coins, 15);
});

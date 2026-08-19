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
    "const PREVIEW_DEAD = false;",
    "let storageAvailable = true;",
    "let storageWarningShown = false;",
    "let recoveredSave = false;",
    "let saveWriteProtected = false;",
    "let futureSaveWarningShown = false;",
    "let tabReadOnly = false;",
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

test("殘缺的未來 schema 會保持寫入保護並顯示有效備份", () => {
  const backup = completeSave({ satiety: 67, updatedAt: 1_750_000_000_700 });
  const { api } = createSaveHarness({ current: { schemaVersion: 99 }, backup });

  const restored = api.safeRead();

  assert.equal(restored.satiety, 67);
  assert.equal(api.state().recoveredSave, true);
  assert.equal(api.state().saveWriteProtected, true);
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
    extractFunction("stageForSatiety"),
    extractFunction("stage"),
    extractFunction("setBusy"),
    extractFunction("feed"),
    `globalThis.feedApi = {
      start: () => feed({ id: 'fish', icon: '🐟', name: '鯡魚', sound: 'fish', health: 2 }, {}),
      state: () => ({
        satiety: pet.satiety,
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

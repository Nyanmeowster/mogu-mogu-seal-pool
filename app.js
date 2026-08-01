import sealStage1Idle from "./assets/seal-stage-1.webp";
import sealStage1Eat from "./assets/seal-stage-1-eat.webp";
import sealStage1Chew from "./assets/seal-stage-1-eat-closed-v2.webp";
import sealStage1Pet from "./assets/seal-stage-1-pet.webp";
import sealStage1Walk from "./assets/seal-stage-1-walk.webp";
import sealStage2Idle from "./assets/seal-stage-2.webp";
import sealStage2Eat from "./assets/seal-stage-2-eat.webp";
import sealStage2Chew from "./assets/seal-stage-2-eat-closed-v2.webp";
import sealStage2Pet from "./assets/seal-stage-2-pet.webp";
import sealStage2Walk from "./assets/seal-stage-2-walk.webp";
import sealStage3Idle from "./assets/seal-stage-3.webp";
import sealStage3Eat from "./assets/seal-stage-3-eat.webp";
import sealStage3Chew from "./assets/seal-stage-3-eat-closed-v2.webp";
import sealStage3Pet from "./assets/seal-stage-3-pet.webp";
import sealStage3Walk from "./assets/seal-stage-3-walk.webp";
import sealStage4Idle from "./assets/seal-stage-4.webp";
import sealStage4Eat from "./assets/seal-stage-4-eat.webp";
import sealStage4Chew from "./assets/seal-stage-4-eat-closed-v2.webp";
import sealStage4Pet from "./assets/seal-stage-4-pet.webp";
import sealStage4Walk from "./assets/seal-stage-4-walk.webp";
import sealStage5Idle from "./assets/seal-stage-5.webp";
import sealStage5Eat from "./assets/seal-stage-5-eat.webp";
import sealStage5Chew from "./assets/seal-stage-5-eat-closed-v2.webp";
import sealStage5Pet from "./assets/seal-stage-5-pet.webp";
import sealStage5Walk from "./assets/seal-stage-5-walk.webp";
import poolBackground from "./assets/pool-background-cover-v1.jpg";

const HOUR = 36e5;
const FIVE_DAYS = 432e6;
const SAVE_KEY = "mogu-pet-v1";
const ASSET_VERSION = "30";
const STAT_LOSS_PER_HOUR = 4;
const TRUST_LOSS_PER_HOUR = 1.2;
const WATER_LOSS_PER_HOUR = 2;
const PREVIEW_DEAD = new URLSearchParams(location.search).get("preview") === "dead";
const QUERY_PARAMS = new URLSearchParams(location.search);
const FORCE_REALTIME_3D = false;
const FORCE_SPRITE_FALLBACK = true;
const MODEL_BASE_SCALE = 0.7;
const THREE_POSE_STATES = {
  IDLE: "idle",
  BREATH: "breath",
  CRAWL: "crawl",
  TURN: "turn",
  EAT: "eat",
  PET: "pet",
  WATER: "water",
  SLEEP: "sleep",
  DEAD: "dead",
};
const EXPRESSION_MORPHS = [
  "blink",
  "squint",
  "open-mouth",
  "chew",
  "puff-cheek",
  "poke",
  "happy",
  "hungry",
  "sleep",
  "dead",
  "water",
];

const DECOR = [
  { id: "ring", icon: "🍩", name: "甜甜圈泳圈", price: 4, className: "decor-ring" },
  { id: "ball", icon: "🏖️", name: "海灘球", price: 7, className: "decor-ball" },
  { id: "plant", icon: "🌴", name: "迷你椰子樹", price: 12, className: "decor-plant" },
  { id: "light", icon: "✨", name: "星星池燈", price: 18, className: "decor-light" },
  { id: "shell", icon: "🐚", name: "珍珠貝殼", price: 22, className: "decor-shell" },
  { id: "duck", icon: "🦆", name: "小鴨浮伴", price: 30, className: "decor-duck" },
];

const FOODS = [
  { icon: "🐟", name: "鯡魚", sound: "fish", health: 2, note: "油脂與蛋白質" },
  { icon: "🦑", name: "魷魚", sound: "squid", energy: 3, note: "增加食物變化" },
  { icon: "🦐", name: "甜蝦", sound: "shrimp", affection: 2, note: "小份環境豐富化" },
];

const CARE_ACTIONS = [
  { id: "haul", icon: "🪨", name: "上岸休息", note: "恢復體力、調節體溫", cooldown: 15 * 60e3 },
  { id: "clean", icon: "💧", name: "維護水質", note: "清除污染、補充循環", cooldown: 30 * 60e3 },
  { id: "enrich", icon: "🧊", name: "探索活動", note: "藏食冰塊與嗅聞遊戲", cooldown: 10 * 60e3 },
  { id: "check", icon: "🩺", name: "健康檢查", note: "觀察呼吸、眼睛與體態", cooldown: 60 * 60e3 },
];

const STAGE_LABELS = ["", "纖細小海豹", "健康體型", "圓潤體型", "胖嘟嘟", "幸福圓滾滾"];
const IDLE_LINES = ["噗嚕～水溫剛剛好", "今天也想和你待在一起", "小海豹正在巡視泳池", "要不要陪我玩一下？"];
const SIZE_STOPS = [20, 40, 70, 90];
const SPRITE_ASSETS = [
  null,
  { idle: sealStage1Idle, eat: sealStage1Eat, chew: sealStage1Chew, pet: sealStage1Pet, walk: sealStage1Walk },
  { idle: sealStage2Idle, eat: sealStage2Eat, chew: sealStage2Chew, pet: sealStage2Pet, walk: sealStage2Walk },
  { idle: sealStage3Idle, eat: sealStage3Eat, chew: sealStage3Chew, pet: sealStage3Pet, walk: sealStage3Walk },
  { idle: sealStage4Idle, eat: sealStage4Eat, chew: sealStage4Chew, pet: sealStage4Pet, walk: sealStage4Walk },
  { idle: sealStage5Idle, eat: sealStage5Eat, chew: sealStage5Chew, pet: sealStage5Pet, walk: sealStage5Walk },
];
const $ = (id) => document.getElementById(id);
const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));
const spriteAsset = (stageNumber, action = "idle") => `${SPRITE_ASSETS[stageNumber][action]}?v=${ASSET_VERSION}`;
document.documentElement.style.setProperty("--pool-background", `url("${poolBackground}?v=${ASSET_VERSION}")`);

const fresh = () => {
  const now = Date.now();
  return {
    satiety: 35,
    affection: 20,
    energy: 72,
    waterQuality: 86,
    health: 90,
    coins: 1000,
    lastFedAt: now,
    lastSeenAt: now,
    lastStatAt: now,
    offlineRemainderMs: 0,
    updatedAt: now,
    owned: [],
    active: [],
    dead: false,
    starterCoinsGranted: 1,
    soundOn: true,
    careLog: {},
  };
};

function normalizePet(raw) {
  const base = fresh();
  const validDecorIds = new Set(DECOR.map((item) => item.id));
  const numberOr = (value, fallback) => (Number.isFinite(Number(value)) ? Number(value) : fallback);
  const listOrEmpty = (value) =>
    Array.isArray(value) ? [...new Set(value.filter((id) => validDecorIds.has(id)))] : [];
  const normalized = {
    ...base,
    ...raw,
    satiety: clamp(numberOr(raw?.satiety, base.satiety)),
    affection: clamp(numberOr(raw?.affection, base.affection)),
    energy: clamp(numberOr(raw?.energy, base.energy)),
    waterQuality: clamp(numberOr(raw?.waterQuality, base.waterQuality)),
    health: clamp(numberOr(raw?.health, base.health)),
    coins: Math.max(0, numberOr(raw?.coins, base.coins)),
    lastFedAt: numberOr(raw?.lastFedAt, base.lastFedAt),
    lastSeenAt: numberOr(raw?.lastSeenAt, base.lastSeenAt),
    lastStatAt: numberOr(raw?.lastStatAt, raw?.lastSeenAt || base.lastStatAt),
    offlineRemainderMs: Math.max(0, numberOr(raw?.offlineRemainderMs, 0)),
    updatedAt: numberOr(raw?.updatedAt, 0),
    owned: listOrEmpty(raw?.owned),
    active: listOrEmpty(raw?.active),
    dead: Boolean(raw?.dead),
    soundOn: raw?.soundOn !== false,
    careLog: raw?.careLog && typeof raw.careLog === "object" ? { ...raw.careLog } : {},
    starterCoinsGranted: raw?.starterCoinsGranted === 1 ? 1 : 0,
  };
  normalized.active = normalized.active.filter((id) => normalized.owned.includes(id));
  delete normalized.feedStreak;
  delete normalized.lastFeedComboAt;
  delete normalized.bestFeedStreak;
  return normalized;
}

let storageAvailable = true;
let storageWarningShown = false;

function safeRead() {
  try {
    const value = localStorage.getItem(SAVE_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    storageAvailable = false;
    return null;
  }
}

let pet = normalizePet(safeRead());
let mode = "home";
let currentStage = 0;
let actionActive = "";
let reactionTimer;
let interactionLock = false;
let lastPetAt = 0;
let drawerKey = "";
let decorKey = "";
let hiddenAt = 0;
let noticeTimer;
let audio;
let masterGain;
let ambientGain;
let ambientSource;
let soundUnlocked = false;
const preloaded = new Set();
const spriteCache = new Map();
let threeState = {
  enabled: false,
  ready: false,
  running: false,
  loading: false,
  canvas: null,
  scene: null,
  camera: null,
  renderer: null,
  root: null,
  body: null,
  eyes: [],
  raycaster: null,
  pointer: null,
  morphMap: {},
  action: "",
  actionEndsAt: 0,
  actionZone: "",
  expression: "",
  expressionEndsAt: 0,
  pose: THREE_POSE_STATES.IDLE,
  poseWeight: 0,
  breathPhase: 0,
  wetness: 0.18,
  walkDirection: 1,
  walkProgress: 0,
  walkPos: 0,
  walkSpeed: 0,
  walkCycle: 0,
  lookYaw: 0,
  lookTargetYaw: 0,
  lookReturnStamp: 0,
  lastInteractionStamp: 0,
  idleMotionOffset: Math.random() * Math.PI * 2,
  waterTick: 0,
  sleepTick: 0,
  blinkTick: 0,
  feedTick: 0,
  hitZones: [],
  parts: null,
  materials: [],
  resizeObserver: null,
  animationFrame: 0,
  lastFrameMs: 0,
  lastPose: THREE_POSE_STATES.IDLE,
  morphReady: false,
};
const threeZoneRewards = {
  head: { affection: 9, expression: "squint", line: "摸了摸頭，牠抬起頭看你！", mode: THREE_POSE_STATES.PET },
  cheek: { affection: 8, expression: "poke", line: "被戳到臉頰，牠有點驚喜～", mode: THREE_POSE_STATES.PET },
  belly: { affection: 6, expression: "happy", line: "摸了摸肚肚，牠變得更開心了！", mode: THREE_POSE_STATES.PET },
  fin: { affection: 7, expression: "water", line: "摸了摸鰭，牠想玩水了～", mode: THREE_POSE_STATES.WATER },
  poke: { affection: 4, expression: "poke", line: "輕點就好，不要太用力～" },
};

function applyElapsedStats(now = Date.now()) {
  if (pet.dead) {
    pet.lastStatAt = now;
    return;
  }
  const elapsed = Math.max(0, now - pet.lastStatAt);
  if (!elapsed) return;
  const hours = elapsed / HOUR;
  pet.satiety = clamp(pet.satiety - hours * STAT_LOSS_PER_HOUR);
  pet.affection = clamp(pet.affection - hours * TRUST_LOSS_PER_HOUR);
  pet.waterQuality = clamp(pet.waterQuality - hours * WATER_LOSS_PER_HOUR);
  const stableHabitat = pet.satiety >= 25 && pet.waterQuality >= 40;
  pet.energy = clamp(pet.energy + hours * (stableHabitat ? 2.5 : -3));
  const healthRisk =
    (pet.satiety < 20 ? 2 : 0) +
    (pet.waterQuality < 35 ? 2.5 : 0) +
    (pet.energy < 20 ? 1.5 : 0);
  pet.health = clamp(pet.health + hours * (healthRisk ? -healthRisk : 0.35));
  pet.lastStatAt = now;
  pet.dead = pet.health <= 0 || now - pet.lastFedAt >= FIVE_DAYS;
}

function collectOfflineCoins(elapsedMs) {
  const total = Math.max(0, elapsedMs) + pet.offlineRemainderMs;
  const earned = Math.floor(total / HOUR);
  pet.offlineRemainderMs = total % HOUR;
  pet.coins += earned;
  return earned;
}

const nowAtLoad = Date.now();
const elapsedAway = Math.max(0, nowAtLoad - pet.lastSeenAt);
const starterGift = pet.starterCoinsGranted !== 1;
applyElapsedStats(nowAtLoad);
const offlineCoins = collectOfflineCoins(elapsedAway);
if (starterGift) {
  pet.coins = Math.max(1000, pet.coins);
  pet.starterCoinsGranted = 1;
}
pet.lastSeenAt = nowAtLoad;
pet.lastStatAt = nowAtLoad;
pet.dead = pet.dead || nowAtLoad - pet.lastFedAt >= FIVE_DAYS;
if (PREVIEW_DEAD) {
  pet.satiety = 0;
  pet.affection = 0;
  pet.energy = 0;
  pet.waterQuality = 0;
  pet.health = 0;
  pet.dead = true;
}

function safeSave() {
  if (PREVIEW_DEAD) return;
  pet.lastSeenAt = Date.now();
  pet.updatedAt = Date.now();
  if (!storageAvailable) return;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(pet));
  } catch {
    storageAvailable = false;
    if (!storageWarningShown) {
      storageWarningShown = true;
      showNotice("這個瀏覽器暫時無法保存進度", "warning");
    }
  }
}

function stage() {
  return pet.satiety < 20 ? 1 : pet.satiety < 40 ? 2 : pet.satiety < 70 ? 3 : pet.satiety < 90 ? 4 : 5;
}

function getSizeMorphBlend(value) {
  const sat = clamp(value, 0, 100);
  const weights = Object.create(null);
  BODY_MORPH_TARGETS.forEach((key) => {
    weights[key] = 0;
  });

  if (sat <= SIZE_STOPS[0]) {
    weights["size-thin"] = 1;
    return { weights };
  }
  if (sat >= SIZE_STOPS[SIZE_STOPS.length - 1]) {
    weights["size-plush"] = 1;
    return { weights };
  }

  const stop0 = SIZE_STOPS[0];
  const stop1 = SIZE_STOPS[1];
  const stop2 = SIZE_STOPS[2];
  const stop3 = SIZE_STOPS[3];
  let from = "size-thin";
  let to = "size-fine";
  let progress = 0;

  if (sat <= stop1) {
    from = "size-thin";
    to = "size-fine";
    progress = (sat - stop0) / (stop1 - stop0);
  } else if (sat <= stop2) {
    from = "size-fine";
    to = "size-round";
    progress = (sat - stop1) / (stop2 - stop1);
  } else if (sat <= stop3) {
    from = "size-round";
    to = "size-chubby";
    progress = (sat - stop2) / (stop3 - stop2);
  } else {
    from = "size-chubby";
    to = "size-plush";
    progress = (sat - stop3) / (100 - stop3);
  }
  weights[from] = 1 - progress;
  weights[to] = progress;
  return { weights };
}

function mood() {
  if (pet.dead) return "需要專業獸醫照護";
  if (pet.health < 30) return "今天狀態不太好，請先做健康檢查";
  if (pet.waterQuality < 35) return "水質變差了，游起來不舒服……";
  if (pet.energy < 25) return "想上岸安靜休息一下……";
  if (pet.satiety < 15) return "肚子餓得沒有力氣了……";
  if (pet.satiety < 30) return "肚子咕嚕咕嚕……";
  if (pet.affection < 20) return "慢慢來，我還在熟悉照護員";
  if (pet.affection > 80 && pet.satiety > 75) return "最喜歡和你待在一起！";
  if (pet.satiety > 90) return "飽飽的，好幸福～";
  return "今天的呼吸、食慾和活動都很正常";
}

function preloadImage(url) {
  if (spriteCache.has(url)) return spriteCache.get(url);
  const image = new Image();
  const promise = new Promise((resolve) => {
    let settled = false;
    const finish = async (loaded) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      if (loaded && typeof image.decode === "function") {
        try {
          await image.decode();
        } catch {
          loaded = false;
        }
      }
      resolve(loaded);
    };
    const timeout = setTimeout(() => finish(false), 12000);
    image.onload = () => finish(true);
    image.onerror = () => finish(false);
    image.src = url;
    if (image.complete) finish(image.naturalWidth > 0);
  });
  spriteCache.set(url, promise);
  return promise;
}

async function preloadStage(stageNumber) {
  if (stageNumber < 1 || stageNumber > 5) return false;
  if (preloaded.has(stageNumber)) return true;
  const results = await Promise.all(Object.values(SPRITE_ASSETS[stageNumber]).map((url) => preloadImage(`${url}?v=${ASSET_VERSION}`)));
  if (results.every(Boolean)) preloaded.add(stageNumber);
  return results.every(Boolean);
}

function updateLoadingProgress(completed, total) {
  const progress = Math.round((completed / total) * 100);
  const bar = $("loading-bar");
  const percent = $("loading-percent");
  const label = $("loading-text");
  if (bar) bar.style.width = `${progress}%`;
  if (percent) percent.textContent = `${progress}%`;
  if (label) label.textContent = completed < total ? `正在載入海豹素材 ${completed}/${total}…` : "素材準備完成";
}

async function preloadEssentialAssets() {
  const urls = [
    `${poolBackground}?v=${ASSET_VERSION}`,
    ...SPRITE_ASSETS.slice(1).flatMap((assets) => Object.values(assets).map((url) => `${url}?v=${ASSET_VERSION}`)),
  ];
  let completed = 0;
  updateLoadingProgress(0, urls.length);
  const results = await Promise.all(
    urls.map(async (url) => {
      const loaded = await preloadImage(url);
      completed += 1;
      updateLoadingProgress(completed, urls.length);
      return loaded;
    }),
  );
  [1, 2, 3, 4, 5].forEach((stageNumber) => preloaded.add(stageNumber));
  if (document.fonts?.ready) await document.fonts.ready;
  return results.every(Boolean);
}

function shouldUseRealtime3D() {
  if (FORCE_SPRITE_FALLBACK) return false;
  if (FORCE_REALTIME_3D) return true;
  if (preloadDisabled()) return false;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (typeof navigator === "object") {
    if (navigator.connection?.saveData) return false;
    if (navigator.deviceMemory && navigator.deviceMemory <= 2) return false;
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return false;
  }
  return true;
}

function preloadDisabled() {
  if (!window.__threeLoadFailed) return false;
  return true;
}

function getThreeCanvas() {
  return document.getElementById("seal-three-canvas");
}

function createSkinnedSealBody() {
  const geometry = new THREE.BoxGeometry(3.08, 1.02, 4.5, 30, 18, 40);
  geometry.translate(0, -0.06, 0.0);
  geometry.computeVertexNormals();
  const base = geometry.attributes.position.array;

  const skinIndex = new Uint16Array(geometry.attributes.position.count * 4);
  const skinWeight = new Float32Array(geometry.attributes.position.count * 4);
  for (let i = 0; i < geometry.attributes.position.count; i += 1) {
    const x = base[i * 3];
    const y = base[i * 3 + 1];
    const z = base[i * 3 + 2];
    const clamp01 = (value) => Math.min(1, Math.max(0, value));
    const front = clamp01((z + 1.05) / 1.95);
    const hind = 1 - front;
    const centerFront = Math.max(0, 1 - Math.abs(z - 0.35) / 1.9);
    const belly = clamp01((0.92 - Math.abs(y)) * 1.4);
    const back = clamp01(0.58 + z * 0.08);
    const head = clamp01((z - -0.7) / 1.35);
    const jaw = clamp01((z - 0.86) * 1.2) * (Math.max(0, -y + 0.72));
    const sideLeft = clamp01(((-x) / 1.55) * (0.5 + centerFront) * (1 - Math.abs(y + 0.03)));
    const sideRight = clamp01(((x) / 1.55) * (0.5 + centerFront) * (1 - Math.abs(y + 0.03)));

    const weights = [
      [0, 0.2 + belly * 0.22 + Math.abs(y) * 0.15 + 0.06 * centerFront],
      [1, 0.34 + hind * 0.31 + front * 0.26 + centerFront * 0.18],
      [2, head * 0.9],
      [3, jaw * 0.72],
      [4, 0.18 + sideLeft * 0.72],
      [5, 0.18 + sideRight * 0.72],
      [6, 0.3 + hind * 0.44 + back * 0.18],
      [7, 0.3 + hind * 0.44 + back * 0.18],
    ];
    const bones = [
      { id: 0, w: weights[0][1] },
      { id: 1, w: weights[1][1] },
      { id: 2, w: weights[2][1] },
      { id: 3, w: weights[3][1] },
      { id: 4, w: weights[4][1] },
      { id: 5, w: weights[5][1] },
      { id: 6, w: weights[6][1] },
      { id: 7, w: weights[7][1] },
    ];
    bones.sort((a, b) => b.w - a.w);
    const total = Math.max(0.0001, bones.reduce((sum, item) => sum + item.w, 0));
    let boneOffset = i * 4;
    for (let b = 0; b < 4; b += 1) {
      const bone = bones[b];
      if (!bone) {
        skinIndex[boneOffset + b] = 0;
        skinWeight[boneOffset + b] = 0;
      } else {
        skinIndex[boneOffset + b] = bone.id;
        skinWeight[boneOffset + b] = bone.w / total;
      }
    }
  }
  geometry.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(skinIndex, 4));
  geometry.setAttribute("skinWeight", new THREE.Float32BufferAttribute(skinWeight, 4));

  const baseOffset = base.length;
  const withDelta = (label, mutate) => {
    const delta = new Float32Array(baseOffset);
    for (let i = 0; i < baseOffset; i += 3) {
      const x = base[i];
      const y = base[i + 1];
      const z = base[i + 2];
      const next = mutate({ x, y, z });
      delta[i] = next.x;
      delta[i + 1] = next.y;
      delta[i + 2] = next.z;
    }
    const attr = new THREE.Float32BufferAttribute(delta, 3);
    attr.name = label;
    return attr;
  };

  geometry.morphTargetsRelative = true;
  geometry.morphAttributes.position = [
    withDelta("size-thin", ({ x, y, z }) => {
      const front = Math.max(0, 1 - (z - 0.15) * 0.34);
      const belly = Math.max(0, 1 - Math.abs(y) * 0.9) * (1 - Math.abs(z - 0.3) * 0.33);
      return {
        x: x * -(0.1 + front * 0.14) * (0.7 + belly * 0.35),
        y: y * 0.03,
        z: z * -0.03,
      };
    }),
    withDelta("size-fine", ({ x, y, z }) => {
      const belly = Math.max(0, 0.9 - Math.abs(y)) * (1 - Math.abs(z - 0.4) * 0.32);
      return {
        x: Math.abs(x) > 0.1 ? Math.sign(x) * belly * -0.03 : x * 0.01,
        y: y * -0.015,
        z: z * -0.02,
      };
    }),
    withDelta("size-round", ({ x, y, z }) => {
      const belly = Math.max(0, 1 - Math.abs(y)) * 0.4 * (1 - Math.abs(z - 0.4) * 0.26);
      return {
        x: Math.sign(x) * (0.14 + belly * 0.16),
        y: (Math.abs(y) > 0.45 ? 0.02 : -0.03),
        z: Math.sign(z + 0.2) * 0.038,
      };
    }),
    withDelta("size-chubby", ({ x, y, z }) => {
      const belly = Math.max(0, 1 - Math.abs(y)) * 0.33 * (1 - Math.abs(z - 0.28) * 0.25);
      const neck = clamp((z + 0.9) / 1.5, 0.2, 1);
      return {
        x: Math.sign(x) * (0.17 + belly * 0.2 + neck * 0.08),
        y: -0.03 - Math.abs(y) * 0.08,
        z: Math.sign(z) * (0.12 + (z > 0.2 ? (1 - Math.abs(z - 0.3)) * 0.04 : 0)),
      };
    }),
    withDelta("size-plush", ({ x, y, z }) => {
      const belly = Math.max(0, 1 - Math.abs(y)) * 0.41 * (1 - Math.abs(z - 0.2) * 0.32);
      const cheek = Math.max(0, 1 - Math.abs(x - Math.sign(x) * 0.35)) * (1 - Math.abs(z - 0.9) * 0.24);
      const neck = clamp((z + 1.15) / 1.55, 0.1, 1);
      return {
        x: Math.sign(x) * (0.23 + belly * 0.23 + cheek * 0.04),
        y: (y > 0 ? 0.01 : -0.03) - Math.abs(y) * 0.09 + neck * 0.012,
        z: Math.sign(z) * (0.17 + (z > 0.2 ? (0.45 - Math.abs(z - 0.35)) * 0.08 : 0)),
      };
    }),
    withDelta("blink", ({ x, y, z }) => {
      if (z < 1.4) return { x: 0, y: 0, z: 0 };
      if (Math.abs(x) > 0.45) return { x: 0, y: 0, z: 0 };
      return { x: 0, y: -0.08 * (1 - Math.min(1, Math.abs(y - 0.66) * 1.1)), z: 0 };
    }),
    withDelta("squint", ({ x, y, z }) => {
      if (z < 1.3) return { x: 0, y: 0, z: 0 };
      if (Math.abs(x) > 0.5) return { x: 0, y: 0, z: 0 };
      return { x: 0, y: -0.05, z: 0 };
    }),
    withDelta("open-mouth", ({ x, y, z }) => {
      if (z < 0.85 || z > 1.85) return { x: 0, y: 0, z: 0 };
      if (z > 1.45 || y < -0.1) return { x: 0, y: -0.13, z: 0.08 };
      return { x: 0, y: -0.03 * Math.max(0, z - 0.9), z: 0.05 };
    }),
    withDelta("chew", ({ x, y, z }) => {
      if (z < 1.0 || z > 1.7) return { x: 0, y: 0, z: 0 };
      return { x: 0.02 * x, y: -0.09 + y * 0.05, z: 0.12 };
    }),
    withDelta("puff-cheek", ({ x, y, z }) => {
      if (z > 1.1) return { x: Math.sign(x) * Math.min(0.18, Math.max(0, 1.2 - Math.abs(x)) * 0.1), y: 0.01, z: Math.sign(z) * 0.04 };
      return { x: 0, y: 0, z: 0 };
    }),
    withDelta("poke", ({ x, y, z }) => {
      if (z < 1.0) return { x: 0, y: 0, z: 0 };
      return {
        x: (Math.abs(x) > 0.15 ? 0 : Math.sign(x) * -0.09),
        y: -0.02,
        z: 0.04 * (1 - Math.max(0, (z - 1.0) * 0.4)),
      };
    }),
    withDelta("happy", ({ x, y, z }) => {
      if (z < 0.65 || z > 1.1) return { x: 0, y: 0, z: 0 };
      return { x: x * 0.02, y: 0.04, z: 0.01 };
    }),
    withDelta("hungry", ({ x, y, z }) => {
      if (z < -0.5 || z > 1.75) return { x: 0, y: 0, z: 0 };
      return {
        x: x * -0.02,
        y: Math.abs(y) > 0.2 ? -0.02 : 0.025,
        z: 0.01,
      };
    }),
    withDelta("sleep", ({ x, y, z }) => {
      if (z < 0.9 && z > -1.2) return { x: 0, y: 0.07, z: 0 };
      return { x: 0, y: 0, z: 0 };
    }),
    withDelta("dead", ({ x, y, z }) => {
      if (y < -0.1) return { x: 0, y: -0.16, z: 0 };
      return { x: 0, y: y * -0.035, z: 0 };
    }),
    withDelta("water", ({ x, y, z }) => {
      if (z < 0.2 || z > 0.9) return { x: 0, y: 0, z: 0 };
      return { x: 0, y: 0.03, z: 0.03 };
    }),
  ];

  const bones = [];
  const spine = new THREE.Bone();
  spine.name = "spine";
  const bodyBone = new THREE.Bone();
  bodyBone.name = "body";
  bodyBone.position.set(0, 0.16, 0.45);
  const headBone = new THREE.Bone();
  headBone.name = "head";
  headBone.position.set(0, 0.39, 1.05);
  const jawBone = new THREE.Bone();
  jawBone.name = "jaw";
  jawBone.position.set(0, -0.1, 0.52);
  const frontL = new THREE.Bone();
  frontL.name = "front-left";
  frontL.position.set(-0.98, -0.16, 0.24);
  const frontR = new THREE.Bone();
  frontR.name = "front-right";
  frontR.position.set(0.98, -0.16, 0.24);
  const hindL = new THREE.Bone();
  hindL.name = "hind-left";
  hindL.position.set(-0.57, -0.18, -1.24);
  const hindR = new THREE.Bone();
  hindR.name = "hind-right";
  hindR.position.set(0.57, -0.18, -1.24);
  spine.add(bodyBone);
  bodyBone.add(headBone);
  headBone.add(jawBone);
  bodyBone.add(frontL);
  bodyBone.add(frontR);
  bodyBone.add(hindL);
  bodyBone.add(hindR);
  bones.push(spine, bodyBone, headBone, jawBone, frontL, frontR, hindL, hindR);
  const skeleton = new THREE.Skeleton(bones);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xc6a184,
    roughness: 0.44,
    metalness: 0.03,
    clearcoat: 0.72,
    clearcoatRoughness: 0.19,
    sheen: 0.15,
    sheenColor: new THREE.Color(0x6eb8e1),
    sheenRoughness: 0.36,
    envMapIntensity: 0.28,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.SkinnedMesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.name = "seal-body";
  mesh.add(spine);
  mesh.bind(skeleton);
  const morphMap = {};
  mesh.morphTargetInfluences = mesh.morphTargetInfluences || [];
  mesh.morphTargetDictionary = mesh.morphTargetDictionary || {};
  geometry.morphAttributes.position.forEach((target, index) => {
    morphMap[target.name] = index;
  });
  return { mesh, skeleton, morphMap };
}

function createHitZone(name, radius, position) {
  const geometry = new THREE.SphereGeometry(radius, 12, 8);
  const material = new THREE.MeshBasicMaterial({ visible: false });
  const hit = new THREE.Mesh(geometry, material);
  hit.userData.zone = name;
  hit.position.set(position.x, position.y, position.z);
  hit.visible = true;
  return hit;
}

function normalizePoseState(model) {
  const mesh = model.isObject3D ? model : model.mesh;
  const bones = mesh.skeleton?.bones || [];
  const named = {};
  bones.forEach((bone) => {
    if (!bone?.name) return;
    const key = bone.name.toLowerCase().replace(/[\s_-]/g, "");
    if (key === "spine") named.spine = bone;
    if (key === "body") named.body = bone;
    if (key === "head") named.head = bone;
    if (key === "jaw") named.jaw = bone;
    if (key === "frontleft" || key === "flipperfrontleft" || key.includes("frontl") || key === "front") named.frontL = bone;
    if (key === "frontright" || key === "flipperfrontright" || key.includes("frontr") || key === "front2") named.frontR = bone;
    if (key === "hindleft" || key === "flipperhindleft" || key.includes("hindl") || key === "rearleft") named.hindL = bone;
    if (key === "hindright" || key === "flipperhindright" || key.includes("hindr") || key === "rearright") named.hindR = bone;
    if (key === "neck") named.neck = bone;
    if (key === "tail") named.tail = bone;
  });
  return { mesh, bones: named };
}

function ensureThreeReadyLegacy() {
  if (threeState.ready || threeState.loading || !shouldUseRealtime3D() || !window.THREE || !getThreeCanvas()) return;
  const container = document.getElementById("seal-art-wrap");
  const canvas = getThreeCanvas();
  const roamer = $("seal-roamer");
  const pool = $("pool");
  if (!container || !roamer || !pool) return;
  const width = Math.max(120, container.clientWidth);
  const height = Math.max(120, container.clientHeight);
  const origin = `${location.href.substring(0, location.href.lastIndexOf("/") + 1)}`;
  const fallbackBody = createSkinnedSealBody();
  threeState.loading = true;
  let animationFrameStarted = false;

  try {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      canvas,
    });
    renderer.setPixelRatio(Math.min(1.9, window.devicePixelRatio || 1));
    renderer.setSize(width, height, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x77d4e3, 2.2, 12);

    const ambient = new THREE.HemisphereLight(0xc0f0ff, 0x184254, 0.72);
    const key = new THREE.DirectionalLight(0xffefcd, 0.95);
    const fill = new THREE.PointLight(0x7ec9ff, 0.55, 16, 1);
    const rim = new THREE.DirectionalLight(0xffc8b0, 0.38, 10);
    key.position.set(2.4, 3.2, 2.1);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 0.4;
    key.shadow.camera.far = 12;
    fill.position.set(-1.1, 1.2, 0.8);
    rim.position.set(-2.2, 0.6, -1.2);
    scene.add(ambient, key, fill, rim);

    const waterSurface = new THREE.Mesh(
      new THREE.CircleGeometry(4.6, 48),
      new THREE.MeshPhysicalMaterial({
        color: 0x2fb9cf,
        metalness: 0.08,
        roughness: 0.2,
        reflectivity: 0.68,
        transmission: 0.14,
        clearcoat: 0.75,
        clearcoatRoughness: 0.2,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
      }),
    );
    waterSurface.rotation.x = -Math.PI / 2;
    waterSurface.position.y = -0.9;
    scene.add(waterSurface);

    const root = new THREE.Group();
    const eyes = [
      new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 8), new THREE.MeshStandardMaterial({ color: 0x1a2a37, roughness: 0.3 })),
      new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 8), new THREE.MeshStandardMaterial({ color: 0x1a2a37, roughness: 0.3 })),
    ];
    eyes[0].position.set(-0.24, 0.34, 1.72);
    eyes[1].position.set(0.24, 0.34, 1.72);
    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.024, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xf0f0f0, emissiveIntensity: 0.19 }),
    );
    iris.position.set(0.0, 0.0, 0.05);
    eyes.forEach((eye) => eye.add(iris.clone()));

    const nose = new THREE.Mesh(
      new THREE.SphereGeometry(0.072, 14, 10),
      new THREE.MeshStandardMaterial({
        color: 0xf2b89b,
        roughness: 0.15,
        metalness: 0.25,
        emissive: 0x4d2714,
        emissiveIntensity: 0.2,
      }),
    );
    nose.position.set(0, 0.05, 1.75);

    const localHitZones = [
      createHitZone("head", 0.24, new THREE.Vector3(0, 0.55, 2.15)),
      createHitZone("cheek", 0.22, new THREE.Vector3(-0.16, 0.35, 1.56)),
      createHitZone("belly", 0.32, new THREE.Vector3(0, 0.05, 0.95)),
      createHitZone("fin", 0.18, new THREE.Vector3(-0.7, -0.1, 0.5)),
    ];

    localHitZones.forEach((zone) => {
      zone.visible = false;
      root.add(zone);
    });
    root.position.set(0, -0.5, -0.2);
    root.scale.set(0.24, 0.24, 0.24);
    root.add(...eyes, nose);
    scene.add(root);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 22);
    camera.position.set(0, 0.95, 4.2);
    camera.lookAt(0, 0.0, -0.2);

    const hydratePoseBones = (mesh, skeleton) => {
      const poseState = normalizePoseState({ mesh, skeleton });
      const spine =
        poseState.bones.spine || poseState.bones.body || mesh?.skeleton?.bones?.[0] || skeleton?.bones?.[0] || null;
      const body = poseState.bones.body || poseState.bones.spine || spine;
      return {
        spine,
        body,
        head: poseState.bones.head || body,
        jaw: poseState.bones.jaw || poseState.bones.head || body,
        frontL: poseState.bones.frontL || poseState.bones.frontR || body,
        frontR: poseState.bones.frontR || poseState.bones.frontL || body,
        hindL: poseState.bones.hindL || body,
        hindR: poseState.bones.hindR || body,
      };
    };

    const finalizeModel = ({ mesh, skeleton, morphMap, sourceRoot }) => {
      if (!mesh || !sourceRoot) {
        throw new Error("模型載入失敗");
      }
      const previousRoot = threeState.root?.userData?.sealModel?.instance;
      if (previousRoot && previousRoot !== sourceRoot && previousRoot.parent) {
        previousRoot.parent.remove(previousRoot);
      }

      if (sourceRoot.parent !== root) {
        root.add(sourceRoot);
      }
      sourceRoot.traverse((node) => {
        if (node.isSkinnedMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      sourceRoot.scale.set(1, 1, 1);
      sourceRoot.position.set(0, 0, 0);

      const bones = hydratePoseBones(mesh, skeleton);
      if (!bones.spine || !bones.body) {
        throw new Error("模型骨架資料不足");
      }

      if (mesh.material?.isMeshPhysicalMaterial) {
        mesh.material.clearcoatRoughness = THREE.MathUtils.clamp(mesh.material.clearcoatRoughness, 0.12, 0.35);
        mesh.material.envMapIntensity = 0.26;
      }

      threeState = {
        ...threeState,
        ready: true,
        loading: false,
        canvas,
        scene,
        renderer,
        camera,
        root,
        body: mesh,
        nose,
        eyes,
        raycaster: new THREE.Raycaster(),
        pointer: new THREE.Vector2(),
        morphMap,
        hitZones: localHitZones,
        hitMap: localHitZones.reduce((result, zone) => {
          result[zone.userData.zone] = zone;
          return result;
        }, {}),
        action: "",
        actionEndsAt: 0,
        actionZone: "",
        expression: "",
        expressionEndsAt: 0,
        pose: THREE_POSE_STATES.CRAWL,
        poseWeight: 1,
        breathPhase: THREE.MathUtils.frac(Math.random()),
        walkDirection: 1,
        walkProgress: 0,
        walkPos: 0,
        walkSpeed: 0,
        walkCycle: 0,
        lookYaw: 0,
        lookTargetYaw: 0,
        lookReturnStamp: 0,
        lastInteractionStamp: performance.now(),
        idleMotionOffset: Math.random() * Math.PI * 2,
        waterTick: 0,
        sleepTick: 0,
        blinkTick: 0,
        feedTick: 0,
        lastPose: THREE_POSE_STATES.CRAWL,
        animationFrame: 0,
        lastFrameMs: performance.now(),
        morphReady: true,
      };
      threeState.root.userData.sealModel = {
        instance: sourceRoot,
        mesh,
        skeleton,
        bones,
      };
      threeState.enabled = true;
      window.__threeLoadFailed = false;
      threeState.loading = false;
      updateThreeBodyMorph();
      container.classList.add("using-realtime");
      pool.classList.add("using-3d");
      if (!animationFrameStarted) {
        animationFrameStarted = true;
        threeState.running = true;
        const animate = (timestamp) => {
          if (!threeState.running) return;
          threeState.animationFrame = requestAnimationFrame(animate);
          if (!threeState.ready || !threeState.scene || !threeState.camera || !threeState.renderer) return;
          updateThreeState(timestamp);
          threeState.renderer.render(threeState.scene, threeState.camera);
        };
        threeState.animationFrame = requestAnimationFrame(animate);
      }
      showNotice("已啟用即時3D模型");
    };

    const fitBodyGroup = (result) => {
      const useRoot = result.modelRoot || result.mesh;
      const sourceRoot = useRoot ? new THREE.Group() : null;
      if (!useRoot) return null;
      if (result.modelRoot) {
        sourceRoot.add(result.modelRoot);
      } else {
        sourceRoot.add(result.mesh);
      }
      sourceRoot.position.set(0, 0, 0);
      sourceRoot.scale.set(1, 1, 1);
      return sourceRoot;
    };

    const loadFromGlb = async () => {
      if (!window.THREE.GLTFLoader) throw new Error("GLTFLoader 不可用");
      const response = await fetch(SEAL_GLB_URL, { cache: "reload" });
      if (!response.ok) {
        throw new Error(`無法載入 GLB (${response.status})`);
      }
      const buffer = await response.arrayBuffer();
      const loader = new window.THREE.GLTFLoader();
      const gltf = await new Promise((resolve, reject) => {
        loader.parse(buffer, origin, resolve, reject);
      });
      const modelRoot = gltf.scene || gltf.scenes?.[0];
      if (!modelRoot) throw new Error("GLB 沒有可用場景");

      let selectedMesh = null;
      let selectedScore = -1;
      modelRoot.traverse((node) => {
        if (!node.isSkinnedMesh) return;
        const morphScore = node.morphTargetDictionary ? 100 : 0;
        const boneScore = node.skeleton?.bones?.length || 0;
        const score = boneScore + morphScore;
        if (score > selectedScore) {
          selectedMesh = node;
          selectedScore = score;
        }
      });
      if (!selectedMesh) {
        throw new Error("GLB 沒找到可用變形骨骼");
      }

      const modelMorphs = {};
      if (selectedMesh.morphTargetDictionary) {
        Object.entries(selectedMesh.morphTargetDictionary).forEach(([name, index]) => {
          const normalized = name.toLowerCase().replace(/[\s_]/g, "-");
          modelMorphs[normalized] = index;
          modelMorphs[name] = index;
        });
      }
      const finalMorphs = Object.keys(modelMorphs).length ? modelMorphs : fallbackBody.morphMap;
      return {
        mesh: selectedMesh,
        skeleton: selectedMesh.skeleton || fallbackBody.skeleton,
        morphMap: finalMorphs,
        modelRoot,
      };
    };

    const startModel = async () => {
      let modelData = null;
      try {
        modelData = await loadFromGlb();
      } catch (error) {
        console.info("即時3D模型：嘗試載入 GLB 失敗，改用內建模型", error?.message || "unknown");
        modelData = {
          mesh: fallbackBody.mesh,
          skeleton: fallbackBody.skeleton,
          morphMap: fallbackBody.morphMap,
          modelRoot: null,
        };
      }
      const sourceRoot = fitBodyGroup(modelData);
      finalizeModel({
        mesh: modelData.mesh,
        skeleton: modelData.skeleton,
        morphMap: modelData.morphMap,
        sourceRoot,
      });
    };

    startModel().catch((error) => {
      threeState.loading = false;
      window.__threeLoadFailed = true;
      console.warn("即時3D模型啟動失敗，改用2D", error);
      showNotice("即時3D載入失敗，回到2D小海豹", "warning");
    });
  } catch (error) {
    threeState.loading = false;
    window.__threeLoadFailed = true;
    console.warn("即時3D初始化失敗，改用2D精靈", error);
    showNotice("瀏覽器無法啟動即時3D，已切換到2D模式", "warning");
  }
}

function createSealCoatTexture(seed = 1) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const coat = context.createLinearGradient(0, 0, 0, canvas.height);
  coat.addColorStop(0, "#9f8d7d");
  coat.addColorStop(0.34, "#bfa78f");
  coat.addColorStop(0.68, "#d7bea2");
  coat.addColorStop(1, "#e7d1b6");
  context.fillStyle = coat;
  context.fillRect(0, 0, canvas.width, canvas.height);

  let value = seed >>> 0;
  const random = () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };

  for (let index = 0; index < 620; index += 1) {
    const upper = index < 505;
    const x = random() * canvas.width;
    const y = upper
      ? Math.pow(random(), 1.45) * canvas.height * 0.66
      : canvas.height * (0.5 + random() * 0.42);
    const radius = upper ? 1.8 + random() * 5.2 : 1.4 + random() * 3.3;
    const stretch = 0.72 + random() * 0.85;
    const alpha = upper ? 0.3 + random() * 0.3 : 0.16 + random() * 0.2;

    context.save();
    context.translate(x, y);
    context.rotate((random() - 0.5) * Math.PI);
    context.scale(stretch, 0.66 + random() * 0.52);
    context.fillStyle = `rgba(83, 70, 65, ${alpha})`;
    context.beginPath();
    const lobes = 6;
    for (let lobe = 0; lobe <= lobes; lobe += 1) {
      const angle = (lobe / lobes) * Math.PI * 2;
      const wobble = radius * (0.72 + random() * 0.34);
      const px = Math.cos(angle) * wobble;
      const py = Math.sin(angle) * wobble;
      if (lobe === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
    context.closePath();
    context.fill();
    context.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.wrapS = THREE.RepeatWrapping;
  texture.needsUpdate = true;
  return texture;
}

function createProceduralSealModel() {
  const sealGroup = new THREE.Group();
  sealGroup.name = "procedural-seal";

  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: createSealCoatTexture(421),
    roughness: 0.56,
    metalness: 0,
    clearcoat: 0.48,
    clearcoatRoughness: 0.28,
    sheen: 0.14,
    sheenColor: new THREE.Color(0xe0d3c5),
    emissive: 0x18333a,
    emissiveIntensity: 0.015,
  });
  const headMaterial = bodyMaterial.clone();
  headMaterial.map = createSealCoatTexture(982);
  const flipperMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc9ad91,
    roughness: 0.58,
    metalness: 0,
    clearcoat: 0.35,
    clearcoatRoughness: 0.32,
  });
  const muzzleMaterial = new THREE.MeshStandardMaterial({
    color: 0xdfc7aa,
    roughness: 0.62,
  });
  const spotMaterial = new THREE.MeshStandardMaterial({
    color: 0x6e6762,
    roughness: 0.5,
  });
  const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x18242a,
    roughness: 0.28,
  });
  const noseMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x5b4543,
    roughness: 0.24,
    clearcoat: 0.82,
    clearcoatRoughness: 0.14,
  });
  const mouthMaterial = new THREE.MeshStandardMaterial({
    color: 0x522f37,
    roughness: 0.48,
  });
  const tongueMaterial = new THREE.MeshStandardMaterial({
    color: 0xd88994,
    roughness: 0.5,
  });
  const eyeGlintMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const materials = [
    bodyMaterial,
    headMaterial,
    flipperMaterial,
    muzzleMaterial,
    spotMaterial,
    darkMaterial,
    noseMaterial,
    mouthMaterial,
    tongueMaterial,
  ];

  const sphere = (segments = 32, rings = 22) => new THREE.SphereGeometry(1, segments, rings);
  const makeMesh = (geometry, material, name) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  };

  const spine = new THREE.Group();
  spine.name = "spine";
  sealGroup.add(spine);

  const bodyPivot = new THREE.Group();
  bodyPivot.name = "body";
  spine.add(bodyPivot);

  const body = makeMesh(sphere(48, 30), bodyMaterial, "seal-body");
  body.position.set(0, -0.12, -0.34);
  body.scale.set(1.14, 0.67, 1.62);
  body.userData.baseScale = body.scale.clone();
  bodyPivot.add(body);

  const neck = makeMesh(sphere(40, 26), headMaterial, "seal-neck");
  neck.position.set(0, -0.04, 0.63);
  neck.scale.set(0.86, 0.64, 0.88);
  neck.userData.baseScale = neck.scale.clone();
  bodyPivot.add(neck);

  const belly = makeMesh(sphere(28, 18), muzzleMaterial, "seal-belly");
  belly.position.set(0, -0.18, 1.1);
  belly.scale.set(0.55, 0.34, 0.055);
  belly.rotation.x = -0.08;
  belly.visible = false;
  bodyPivot.add(belly);

  const headPivot = new THREE.Group();
  headPivot.name = "head";
  headPivot.position.set(0, 0.06, 0.77);
  headPivot.rotation.y = 0.78;
  bodyPivot.add(headPivot);

  const head = makeMesh(sphere(44, 28), headMaterial, "seal-head");
  head.position.set(0, 0.12, 0.3);
  head.scale.set(0.72, 0.69, 0.65);
  head.userData.baseScale = head.scale.clone();
  headPivot.add(head);

  const faceMask = makeMesh(sphere(30, 18), muzzleMaterial, "face-mask");
  faceMask.position.set(0, 0.08, 0.87);
  faceMask.scale.set(0.48, 0.45, 0.052);
  faceMask.castShadow = false;
  headPivot.add(faceMask);

  const headSpots = [];
  headSpots.forEach(([x, y, z, sx, sy], index) => {
    const spot = makeMesh(sphere(14, 10), spotMaterial, `head-spot-${index}`);
    spot.position.set(x, y, z);
    spot.scale.set(sx, sy, 0.028);
    headPivot.add(spot);
  });

  const bodySpots = [];
  bodySpots.forEach(([x, y, z, sx, sy, sz], index) => {
    const spot = makeMesh(sphere(14, 10), spotMaterial, `body-spot-${index}`);
    spot.position.set(x, y, z);
    spot.scale.set(sx, sy, sz);
    spot.rotation.z = (index - 1.5) * 0.24;
    bodyPivot.add(spot);
  });

  const jawPivot = new THREE.Group();
  jawPivot.name = "jaw";
  jawPivot.position.set(0, -0.04, 0.7);
  headPivot.add(jawPivot);

  const muzzles = [-1, 1].map((side) => {
    const muzzle = makeMesh(sphere(28, 18), muzzleMaterial, side < 0 ? "muzzle-left" : "muzzle-right");
    muzzle.position.set(side * 0.18, -0.04, 0.28);
    muzzle.scale.set(0.205, 0.145, 0.105);
    muzzle.userData.baseScale = muzzle.scale.clone();
    jawPivot.add(muzzle);
    return muzzle;
  });

  [-1, 1].forEach((side) => {
    for (let index = 0; index < 4; index += 1) {
      const freckle = makeMesh(sphere(10, 8), spotMaterial, `muzzle-freckle-${side}-${index}`);
      freckle.position.set(
        side * (0.09 + (index % 2) * 0.075),
        -0.04 - Math.floor(index / 2) * 0.055,
        0.405,
      );
      freckle.scale.setScalar(0.013);
      freckle.castShadow = false;
      jawPivot.add(freckle);
    }
  });

  const mouth = makeMesh(sphere(24, 14), mouthMaterial, "mouth");
  mouth.position.set(0, -0.16, 0.405);
  mouth.scale.set(0.19, 0.045, 0.027);
  mouth.userData.baseScale = mouth.scale.clone();
  jawPivot.add(mouth);

  const tongue = makeMesh(sphere(18, 10), tongueMaterial, "tongue");
  tongue.position.set(0, -0.18, 0.43);
  tongue.scale.set(0.1, 0.025, 0.018);
  tongue.visible = false;
  jawPivot.add(tongue);

  const nose = makeMesh(new THREE.ConeGeometry(0.13, 0.11, 3), noseMaterial, "nose");
  nose.position.set(0, 0.025, 0.445);
  nose.rotation.x = Math.PI / 2;
  nose.rotation.z = Math.PI;
  nose.scale.set(0.78, 0.72, 0.68);
  jawPivot.add(nose);

  const eyes = [-1, 1].map((side) => {
    const eyeGroup = new THREE.Group();
    eyeGroup.position.set(side * 0.225, 0.31, 0.935);
    headPivot.add(eyeGroup);
    const eye = makeMesh(sphere(22, 14), darkMaterial, side < 0 ? "eye-left" : "eye-right");
    eye.scale.set(0.078, 0.05, 0.042);
    eye.userData.baseScale = eye.scale.clone();
    eyeGroup.add(eye);
    const glint = new THREE.Mesh(sphere(10, 8), eyeGlintMaterial);
    glint.position.set(side * -0.018, 0.026, 0.052);
    glint.scale.setScalar(0.021);
    eyeGroup.add(glint);
    return eye;
  });

  const whiskerMaterial = new THREE.LineBasicMaterial({
    color: 0xf3eee8,
    transparent: true,
    opacity: 0.92,
  });
  const whiskerPoints = [];
  [-1, 1].forEach((side) => {
    for (let index = 0; index < 3; index += 1) {
      const startY = -0.02 - index * 0.065;
      whiskerPoints.push(
        new THREE.Vector3(side * 0.17, startY, 0.98),
        new THREE.Vector3(side * (0.56 + index * 0.07), startY + (1 - index) * 0.06, 1.05 - index * 0.025),
      );
    }
  });
  const whiskers = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints(whiskerPoints),
    whiskerMaterial,
  );
  whiskers.name = "whiskers";
  headPivot.add(whiskers);

  const makeFlipper = (name, material, sx, sy, sz) => {
    const pivot = new THREE.Group();
    pivot.name = name;
    const flipper = makeMesh(sphere(30, 18), material, `${name}-mesh`);
    flipper.scale.set(sx, sy, sz);
    flipper.position.z = -sz * 0.28;
    pivot.add(flipper);
    return { pivot, flipper };
  };

  const frontLeftData = makeFlipper("front-left", flipperMaterial, 0.44, 0.105, 0.68);
  const frontRightData = makeFlipper("front-right", flipperMaterial, 0.44, 0.105, 0.68);
  frontLeftData.pivot.position.set(-0.85, -0.17, 0.48);
  frontRightData.pivot.position.set(0.85, -0.17, 0.48);
  frontLeftData.flipper.rotation.y = -0.72;
  frontRightData.flipper.rotation.y = 0.72;
  frontLeftData.flipper.rotation.z = -0.13;
  frontRightData.flipper.rotation.z = 0.13;
  frontLeftData.flipper.scale.set(0.28, 0.43, 0.15);
  frontRightData.flipper.scale.set(0.28, 0.5, 0.15);
  frontLeftData.flipper.position.set(0, -0.24, 0);
  frontRightData.flipper.position.set(0, -0.28, 0);
  bodyPivot.add(frontLeftData.pivot, frontRightData.pivot);

  const hindLeftData = makeFlipper("hind-left", flipperMaterial, 0.36, 0.09, 0.62);
  const hindRightData = makeFlipper("hind-right", flipperMaterial, 0.36, 0.09, 0.62);
  hindLeftData.pivot.position.set(-0.32, -0.16, -1.62);
  hindRightData.pivot.position.set(0.32, -0.16, -1.62);
  hindLeftData.flipper.rotation.y = -0.48;
  hindRightData.flipper.rotation.y = 0.48;
  hindLeftData.flipper.rotation.z = -0.08;
  hindRightData.flipper.rotation.z = 0.08;
  bodyPivot.add(hindLeftData.pivot, hindRightData.pivot);

  sealGroup.traverse((node) => {
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
  });

  const bones = {
    spine,
    body: bodyPivot,
    head: headPivot,
    jaw: jawPivot,
    frontL: frontLeftData.pivot,
    frontR: frontRightData.pivot,
    hindL: hindLeftData.pivot,
    hindR: hindRightData.pivot,
  };
  const parts = {
    body,
    neck,
    belly,
    head,
    faceMask,
    eyes,
    muzzles,
    mouth,
    tongue,
    nose,
    whiskers,
    bones,
  };

  return {
    modelRoot: sealGroup,
    body,
    bones,
    parts,
    materials,
  };
}

function ensureThreeReady() {
  if (
    threeState.ready ||
    threeState.loading ||
    !shouldUseRealtime3D() ||
    !getThreeCanvas()
  ) {
    return;
  }

  const container = $("seal-art-wrap");
  const canvas = getThreeCanvas();
  const pool = $("pool");
  if (!container || !canvas || !pool) return;

  const width = Math.max(120, container.clientWidth);
  const height = Math.max(120, container.clientHeight);
  threeState.loading = true;

  try {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
    renderer.setSize(width, height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 30);
    camera.position.set(0, 1.42, 5.85);
    camera.lookAt(0, -0.08, -0.22);

    const hemisphere = new THREE.HemisphereLight(0xdff7ff, 0x1d5360, 1.25);
    const key = new THREE.DirectionalLight(0xfff1d8, 2.05);
    key.position.set(3.2, 4.6, 4.2);
    key.castShadow = true;
    key.shadow.mapSize.set(512, 512);
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 14;
    key.shadow.bias = -0.0006;
    const rim = new THREE.DirectionalLight(0x8adcf0, 1.4);
    rim.position.set(-3.8, 2.4, -2.8);
    const fill = new THREE.PointLight(0xffcbbd, 0.72, 12, 2);
    fill.position.set(-2.2, 0.8, 3.2);
    const frontFill = new THREE.DirectionalLight(0xfff4e4, 1.2);
    frontFill.position.set(0, 1.7, 5.2);
    scene.add(hemisphere, key, rim, fill, frontFill);

    const water = new THREE.Mesh(
      new THREE.CircleGeometry(4.5, 64),
      new THREE.MeshStandardMaterial({
        color: 0x30b6c7,
        roughness: 0.22,
        metalness: 0.08,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
      }),
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.78;
    water.receiveShadow = true;
    scene.add(water);

    const contactShadow = new THREE.Mesh(
      new THREE.CircleGeometry(1.5, 48),
      new THREE.MeshBasicMaterial({
        color: 0x075c6a,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
      }),
    );
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.set(0, -0.765, -0.05);
    contactShadow.scale.set(1.08, 0.48, 1);
    scene.add(contactShadow);

    const root = new THREE.Group();
    root.position.set(0, 0.07, 0.05);
    root.scale.setScalar(MODEL_BASE_SCALE);
    root.rotation.y = -1.48;
    scene.add(root);

    const model = createProceduralSealModel();
    root.add(model.modelRoot);

    const hitZones = [
      createHitZone("head", 0.62, new THREE.Vector3(0, 0.34, 1.18)),
      createHitZone("cheek", 0.4, new THREE.Vector3(-0.3, 0.1, 1.42)),
      createHitZone("belly", 0.82, new THREE.Vector3(0, -0.08, 0.05)),
      createHitZone("fin", 0.42, new THREE.Vector3(-0.92, -0.18, 0.1)),
    ];
    hitZones.forEach((zone) => root.add(zone));

    const resizeObserver =
      typeof ResizeObserver === "function"
        ? new ResizeObserver(() => syncCanvasSize())
        : null;

    threeState = {
      ...threeState,
      enabled: true,
      ready: true,
      running: false,
      loading: false,
      canvas,
      scene,
      camera,
      renderer,
      root,
      body: model.body,
      eyes: model.parts.eyes,
      raycaster: new THREE.Raycaster(),
      pointer: new THREE.Vector2(),
      morphMap: {},
      action: "",
      actionEndsAt: 0,
      actionZone: "",
      expression: "",
      expressionEndsAt: 0,
      pose: THREE_POSE_STATES.CRAWL,
      breathPhase: Math.random(),
      wetness: 0.18,
      walkDirection: -1,
      walkProgress: 0,
      walkPos: 0,
      walkSpeed: 0,
      walkCycle: 0,
      lookYaw: -1.48,
      lookTargetYaw: -1.48,
      lookReturnStamp: 0,
      lastInteractionStamp: performance.now(),
      idleMotionOffset: Math.random() * Math.PI * 2,
      waterTick: 0,
      sleepTick: 0,
      blinkTick: performance.now() + 1800 + Math.random() * 2400,
      feedTick: 0,
      hitZones,
      hitMap: hitZones.reduce((result, zone) => {
        result[zone.userData.zone] = zone;
        return result;
      }, {}),
      parts: model.parts,
      materials: model.materials,
      resizeObserver,
      animationFrame: 0,
      lastFrameMs: performance.now(),
      lastPose: THREE_POSE_STATES.CRAWL,
      morphReady: true,
    };
    root.userData.sealModel = {
      instance: model.modelRoot,
      mesh: model.body,
      skeleton: null,
      bones: model.bones,
    };

    resizeObserver?.observe(container);
    canvas.hidden = false;
    container.classList.add("using-realtime");
    pool.classList.add("using-3d");
    updateThreeBodyMorph(true);
    updateProceduralExpression(0.016);
    renderer.render(scene, camera);
    startThree();
    window.__threeLoadFailed = false;
    showNotice("即時 3D 小海豹準備好了", "success");
  } catch (error) {
    threeState.loading = false;
    threeState.enabled = false;
    canvas.hidden = true;
    window.__threeLoadFailed = true;
    console.warn("即時 3D 初始化失敗，已切換成圖片模式", error);
    showNotice("這台裝置改用流暢圖片模式", "warning");
  }
}

function updateThreeBodyMorph(force = false) {
  const parts = threeState.parts;
  if (!parts?.body || !parts?.head || !parts?.neck) return;

  const fullness = THREE.MathUtils.clamp((pet.satiety - 35) / 65, -0.42, 1);
  const bodyBase = parts.body.userData.baseScale;
  const headBase = parts.head.userData.baseScale;
  const neckBase = parts.neck.userData.baseScale;
  const blend = force ? 1 : 0.09;
  const bodyWidth = 1 + fullness * 0.22;
  const bodyHeight = 1 + fullness * 0.16;
  const bodyLength = 1 + fullness * 0.06;
  const headRoundness = 1 + fullness * 0.09;

  parts.body.scale.x = THREE.MathUtils.lerp(parts.body.scale.x, bodyBase.x * bodyWidth, blend);
  parts.body.scale.y = THREE.MathUtils.lerp(parts.body.scale.y, bodyBase.y * bodyHeight, blend);
  parts.body.scale.z = THREE.MathUtils.lerp(parts.body.scale.z, bodyBase.z * bodyLength, blend);
  parts.head.scale.x = THREE.MathUtils.lerp(parts.head.scale.x, headBase.x * headRoundness, blend);
  parts.head.scale.y = THREE.MathUtils.lerp(parts.head.scale.y, headBase.y * (1 + fullness * 0.07), blend);
  parts.head.scale.z = THREE.MathUtils.lerp(parts.head.scale.z, headBase.z * (1 + fullness * 0.045), blend);
  parts.neck.scale.x = THREE.MathUtils.lerp(parts.neck.scale.x, neckBase.x * (1 + fullness * 0.1), blend);
  parts.neck.scale.y = THREE.MathUtils.lerp(parts.neck.scale.y, neckBase.y * (1 + fullness * 0.08), blend);
  parts.neck.scale.z = THREE.MathUtils.lerp(parts.neck.scale.z, neckBase.z * (1 + fullness * 0.05), blend);
  parts.belly.scale.x = THREE.MathUtils.lerp(parts.belly.scale.x, 0.55 * bodyWidth, blend);
  parts.belly.scale.y = THREE.MathUtils.lerp(parts.belly.scale.y, 0.34 * bodyHeight, blend);
}

function setThreeExpression(name, duration = 900) {
  if (!threeState.parts || !EXPRESSION_MORPHS.includes(name)) return;
  threeState.expression = name;
  threeState.expressionEndsAt = duration > 0 ? performance.now() + duration : Number.POSITIVE_INFINITY;
}

function clearThreeExpression() {
  threeState.expression = "";
  threeState.expressionEndsAt = 0;
}

function updateProceduralExpression(delta) {
  const parts = threeState.parts;
  if (!parts) return;

  const expression = threeState.expression;
  const blinkAmount =
    expression === "blink" || expression === "sleep" || expression === "dead"
      ? 0.08
      : expression === "squint" || expression === "happy"
        ? 0.42
        : 1;
  const mouthOpen =
    expression === "open-mouth"
      ? 4.2
      : expression === "chew"
        ? 2.25
        : expression === "happy"
          ? 1.35
          : 1;
  const cheekPuff = expression === "puff-cheek" ? 1.18 : expression === "poke" ? 1.09 : 1;
  const damping = 1 - Math.exp(-Math.max(0.001, delta) * 18);

  parts.eyes.forEach((eye) => {
    const base = eye.userData.baseScale;
    eye.scale.x = THREE.MathUtils.lerp(eye.scale.x, base.x, damping);
    eye.scale.y = THREE.MathUtils.lerp(eye.scale.y, base.y * blinkAmount, damping);
    eye.scale.z = THREE.MathUtils.lerp(eye.scale.z, base.z, damping);
  });

  parts.muzzles.forEach((muzzle, index) => {
    const base = muzzle.userData.baseScale;
    const pokeBias = expression === "poke" && index === 0 ? 0.9 : 1;
    muzzle.scale.x = THREE.MathUtils.lerp(muzzle.scale.x, base.x * cheekPuff * pokeBias, damping);
    muzzle.scale.y = THREE.MathUtils.lerp(muzzle.scale.y, base.y * cheekPuff, damping);
    muzzle.scale.z = THREE.MathUtils.lerp(muzzle.scale.z, base.z * cheekPuff, damping);
  });

  const mouthBase = parts.mouth.userData.baseScale;
  parts.mouth.scale.x = THREE.MathUtils.lerp(
    parts.mouth.scale.x,
    mouthBase.x * (expression === "happy" ? 1.16 : 1),
    damping,
  );
  parts.mouth.scale.y = THREE.MathUtils.lerp(parts.mouth.scale.y, mouthBase.y * mouthOpen, damping);
  parts.tongue.visible = expression === "open-mouth";
}

function updateExpiredThreeAction(now) {
  if (!threeState.ready || !threeState.action) return;
  if (threeState.actionEndsAt && now >= threeState.actionEndsAt) {
    const expiredAction = threeState.action;
    threeState.action = "";
    threeState.actionEndsAt = 0;
    threeState.actionZone = "";
    threeState.feedTick = 0;
    if (expiredAction === THREE_POSE_STATES.SLEEP && threeState.expression === "sleep") {
      clearThreeExpression();
    }
  }
}

function setThreeLookTarget(yaw, holdMs = 0) {
  if (!threeState.ready) return;
  const clamped = THREE.MathUtils.clamp(yaw, -1.72, 1.72);
  threeState.lookTargetYaw = clamped;
  if (holdMs > 0) {
    threeState.lookReturnStamp = performance.now() + holdMs;
  } else {
    threeState.lookReturnStamp = 0;
  }
}

function setThreeAction(action, ms = 1100, zone = "", expression = "") {
  if (!threeState.ready) return;
  threeState.action = action;
  threeState.actionEndsAt = action ? performance.now() + ms : 0;
  threeState.actionZone = zone;
  threeState.lastInteractionStamp = performance.now();
  if (action) threeState.pose = action;
  if (action !== THREE_POSE_STATES.EAT) threeState.feedTick = 0;
  if (expression) setThreeExpression(expression, ms);
}

function stopThree() {
  if (!threeState.ready || !threeState.running) return;
  threeState.running = false;
  if (threeState.animationFrame) {
    cancelAnimationFrame(threeState.animationFrame);
    threeState.animationFrame = 0;
  }
}

function startThree() {
  if (!threeState.ready || threeState.running) return;
  threeState.running = true;
  threeState.lastFrameMs = performance.now();
  threeState.animationFrame = requestAnimationFrame(function renderLoop(now) {
    if (!threeState.running) return;
    threeState.animationFrame = requestAnimationFrame(renderLoop);
    updateThreeState(now);
    if (threeState.scene && threeState.camera && threeState.renderer) {
      threeState.renderer.render(threeState.scene, threeState.camera);
    }
  });
}

function updateThreeLookAt() {
  if (!threeState.root || !threeState.body) return;
  threeState.lookYaw = THREE.MathUtils.lerp(
    threeState.lookYaw,
    threeState.lookTargetYaw,
    0.08,
  );
  threeState.root.rotation.y = threeState.lookYaw;
}

function resolveRealtimeHitZone(event) {
  if (!threeState.raycaster || !threeState.pointer || !threeState.hitZones.length) return "";
  const rect = threeState.canvas?.getBoundingClientRect?.();
  if (!rect) return "";
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  threeState.pointer.set(x, y);
  threeState.raycaster.setFromCamera(threeState.pointer, threeState.camera);
  const hits = threeState.raycaster.intersectObjects(threeState.hitZones, false);
  if (!hits.length) return "";
  return hits[0].object.userData.zone || "";
}

function resolveFallbackHitZone(event) {
  const wrap = $("seal-roamer");
  if (!wrap) return "belly";
  const rect = wrap.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  if (x < 0 || x > 1 || y < 0 || y > 1) return "belly";
  if (y < 0.32 && x > 0.35 && x < 0.65) return "head";
  if (y < 0.58 && x > 0.22 && x < 0.78) return "cheek";
  if (x < 0.27 || x > 0.73) return "fin";
  if (y >= 0.48 && y < 0.72 && x > 0.38 && x < 0.62) return "belly";
  return "belly";
}

function lookAtScreenPoint(event) {
  if (!threeState.ready) return;
  const rect = $("seal-art-wrap").getBoundingClientRect();
  const anchorX = rect.left + rect.width / 2;
  const bias = THREE.MathUtils.clamp((anchorX - event.clientX) / rect.width, -0.85, 0.85);
  const sideFacing = threeState.walkDirection < 0 ? -1.48 : 1.48;
  setThreeLookTarget(sideFacing + bias * 0.14, 1400);
}

function syncCanvasSize() {
  if (!threeState.ready || !threeState.renderer || !threeState.camera) return;
  const rect = $("seal-art-wrap").getBoundingClientRect();
  const width = Math.max(100, rect.width);
  const height = Math.max(100, rect.height);
  threeState.renderer.setSize(width, height, false);
  threeState.camera.aspect = width / height;
  threeState.camera.updateProjectionMatrix();
}

function updateThreeState(now = performance.now()) {
  if (!threeState.ready || !threeState.running) return;
  const delta = Math.min(0.06, (now - (threeState.lastFrameMs || now)) / 1000);
  threeState.lastFrameMs = now;
  const bones = threeState.root?.userData?.sealModel?.bones;
  if (!bones || !threeState.body || !threeState.body.material) return;

  updateExpiredThreeAction(now);
  updateThreeBodyMorph();
  if (threeState.lookReturnStamp && now >= threeState.lookReturnStamp) {
    threeState.lookReturnStamp = 0;
  }

  const hasAction = Boolean(threeState.action && now < threeState.actionEndsAt);
  const isSleepingWindow = !pet.dead && mode === "home" && now - threeState.lastInteractionStamp > 28000;
  if (!hasAction && !threeState.lookReturnStamp && mode === "home" && Math.abs(threeState.lookTargetYaw) > 0.2) {
    threeState.lookTargetYaw = THREE.MathUtils.lerp(
      threeState.lookTargetYaw,
      threeState.walkDirection > 0 ? 1.48 : -1.48,
      0.08,
    );
  }
  if (isSleepingWindow && !hasAction && now > threeState.sleepTick) {
    setThreeAction(THREE_POSE_STATES.SLEEP, 2400, "", "sleep");
    threeState.sleepTick = now + 11000 + Math.random() * 7000;
  }

  const currentPose = hasAction
    ? threeState.action
    : pet.dead
      ? THREE_POSE_STATES.DEAD
      : mode === "pet"
        ? THREE_POSE_STATES.PET
        : mode === "home"
          ? THREE_POSE_STATES.CRAWL
          : THREE_POSE_STATES.BREATH;
  threeState.pose = currentPose;

  const breath = Math.sin(threeState.breathPhase * Math.PI * 2);
  threeState.breathPhase += delta * (0.5 + Math.max(0.08, pet.affection) / 300);
  const portraitHeadYaw = threeState.walkDirection < 0 ? 0.78 : -0.78;
  bones.head.rotation.y = THREE.MathUtils.lerp(bones.head.rotation.y, portraitHeadYaw, 0.12);
  const rootScale = MODEL_BASE_SCALE;
  threeState.root.scale.x = THREE.MathUtils.lerp(threeState.root.scale.x, rootScale, 0.08);
  threeState.root.scale.y = THREE.MathUtils.lerp(threeState.root.scale.y, rootScale, 0.08);
  threeState.root.scale.z = THREE.MathUtils.lerp(threeState.root.scale.z, rootScale * (1 + breath * 0.006), 0.08);

  if (currentPose === THREE_POSE_STATES.DEAD) {
    bones.spine.rotation.set(0.39, 0.4, 0);
    bones.body.rotation.set(0.23, 0.18, 0);
    bones.head.rotation.set(0.45, 0.1, 0);
    bones.jaw.rotation.set(-0.01, 0.02, 0);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, -0.09, 0.09);
    setThreeExpression("dead", 0);
  } else if (currentPose === THREE_POSE_STATES.EAT) {
    if (!threeState.feedTick) threeState.feedTick = now;
    const eating = now - threeState.feedTick;
    if (eating < 220) {
      setThreeExpression("open-mouth", 200);
    } else if (eating < 640) {
      setThreeExpression("chew", 200);
      threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.44, 0.03);
    } else if (eating < 1020) {
      setThreeExpression("puff-cheek", 180);
    } else if (eating < 1260) {
      setThreeExpression("happy", 160);
    } else {
      threeState.feedTick = 0;
    }
    bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, -0.42, 0.16);
    bones.jaw.rotation.x = THREE.MathUtils.lerp(bones.jaw.rotation.x, 0.82, 0.2);
    bones.frontL.rotation.z = THREE.MathUtils.lerp(bones.frontL.rotation.z, Math.sin(now * 0.014) * 0.28, 0.24);
    bones.frontR.rotation.z = THREE.MathUtils.lerp(bones.frontR.rotation.z, -Math.sin(now * 0.014) * 0.28, 0.24);
    bones.body.rotation.z = THREE.MathUtils.lerp(bones.body.rotation.z, -Math.sin(now * 0.01) * 0.012, 0.08);
    bones.spine.rotation.z = THREE.MathUtils.lerp(bones.spine.rotation.z, Math.sin(now * 0.009) * 0.01, 0.08);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, 0.07, 0.08);
  } else if (currentPose === THREE_POSE_STATES.PET) {
    const zoneTilt = threeState.actionZone === "belly" ? 0.18 : threeState.actionZone === "head" ? 0.09 : 0.24;
    bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, 0.32 - zoneTilt, 0.22);
    bones.jaw.rotation.x = THREE.MathUtils.lerp(bones.jaw.rotation.x, -0.02, 0.24);
    bones.spine.rotation.x = THREE.MathUtils.lerp(bones.spine.rotation.x, 0.08 * Math.sin(now * 0.04), 0.16);
    bones.body.rotation.y = THREE.MathUtils.lerp(bones.body.rotation.y, zoneTilt * 0.2, 0.14);
    bones.frontL.rotation.z = THREE.MathUtils.lerp(bones.frontL.rotation.z, 0.22, 0.16);
    bones.frontR.rotation.z = THREE.MathUtils.lerp(bones.frontR.rotation.z, -0.2, 0.16);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, 0.05, 0.16);
    threeState.root.position.x = THREE.MathUtils.lerp(threeState.root.position.x, 0, 0.08);
  } else if (currentPose === THREE_POSE_STATES.WATER) {
    bones.frontL.rotation.z = THREE.MathUtils.lerp(bones.frontL.rotation.z, 0.35 + Math.sin(now * 0.03) * 0.16, 0.2);
    bones.frontR.rotation.z = THREE.MathUtils.lerp(bones.frontR.rotation.z, -0.35 - Math.sin(now * 0.03 + 0.6) * 0.16, 0.2);
    bones.body.rotation.y = THREE.MathUtils.lerp(bones.body.rotation.y, Math.sin(now * 0.018) * 0.14, 0.15);
    bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, -0.06, 0.18);
    threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.34, 0.01);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, 0.07, 0.08);
  } else if (currentPose === THREE_POSE_STATES.TURN) {
    bones.spine.rotation.y = THREE.MathUtils.lerp(bones.spine.rotation.y, 0.3 * threeState.walkDirection, 0.1);
    bones.head.rotation.y = THREE.MathUtils.lerp(bones.head.rotation.y, -0.2 * threeState.walkDirection, 0.12);
    bones.body.rotation.z = THREE.MathUtils.lerp(bones.body.rotation.z, -0.06 * threeState.walkDirection, 0.12);
    bones.spine.rotation.x = THREE.MathUtils.lerp(bones.spine.rotation.x, 0.04 * threeState.walkDirection, 0.12);
    bones.frontL.rotation.z = THREE.MathUtils.lerp(bones.frontL.rotation.z, 0.18, 0.16);
    bones.frontR.rotation.z = THREE.MathUtils.lerp(bones.frontR.rotation.z, -0.16, 0.16);
    bones.hindL.rotation.z = THREE.MathUtils.lerp(bones.hindL.rotation.z, -0.04, 0.16);
    bones.hindR.rotation.z = THREE.MathUtils.lerp(bones.hindR.rotation.z, -0.02, 0.16);
    threeState.root.position.x = THREE.MathUtils.lerp(threeState.root.position.x, threeState.walkDirection > 0 ? -0.08 : 0.08, 0.18);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, 0.07, 0.1);
  } else if (currentPose === THREE_POSE_STATES.SLEEP) {
    bones.spine.rotation.x = THREE.MathUtils.lerp(bones.spine.rotation.x, 0.36, 0.12);
    bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, 0.34, 0.12);
    bones.jaw.rotation.x = THREE.MathUtils.lerp(bones.jaw.rotation.x, -0.12, 0.15);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, -0.01, 0.06);
    threeState.lookTargetYaw = THREE.MathUtils.lerp(threeState.lookTargetYaw, 0, 0.04);
    if (now > threeState.sleepTick + 3000) {
      setThreeExpression("sleep", 0);
      threeState.sleepTick = now;
    }
  } else {
    // BREATH / IDLE
    bones.body.rotation.x = THREE.MathUtils.lerp(bones.body.rotation.x, -0.05 + breath * 0.013, 0.18);
    bones.spine.rotation.x = THREE.MathUtils.lerp(bones.spine.rotation.x, 0.01 + Math.max(0, breath * 0.008), 0.1);
    bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, -0.03 + Math.cos(threeState.idleMotionOffset + threeState.breathPhase * 0.8) * 0.016, 0.1);
    bones.body.rotation.z = THREE.MathUtils.lerp(bones.body.rotation.z, breath * 0.008, 0.14);
    bones.jaw.rotation.x = THREE.MathUtils.lerp(bones.jaw.rotation.x, breath * 0.008, 0.18);
    threeState.root.position.y = THREE.MathUtils.lerp(threeState.root.position.y, 0.07 + breath * 0.012, 0.08);
    if (mode === "home") {
      threeState.walkSpeed = THREE.MathUtils.lerp(
        threeState.walkSpeed,
        Math.max(0.2, 0.5 + pet.affection / 240 + (pet.satiety / 240)),
        0.08,
      );
      threeState.walkProgress += delta * threeState.walkSpeed;
      if (!threeState.walkDirection) threeState.walkDirection = 1;
      threeState.walkCycle = Math.sin(threeState.walkProgress * 2.4);
      threeState.walkPos += threeState.walkDirection * delta * (0.45 + pet.affection / 190);
      if (Math.abs(threeState.walkPos) > 1.13) {
        threeState.walkDirection *= -1;
        threeState.walkPos = THREE.MathUtils.clamp(threeState.walkPos, -1.13, 1.13);
        threeState.lookTargetYaw = threeState.walkDirection < 0 ? -1.48 : 1.48;
        setThreeAction(THREE_POSE_STATES.TURN, 680, "", "hungry");
      }
      bones.body.rotation.z = THREE.MathUtils.lerp(bones.body.rotation.z, Math.sin(now * 0.004 + threeState.walkCycle) * 0.016, 0.16);
      bones.spine.rotation.z = THREE.MathUtils.lerp(bones.spine.rotation.z, Math.sin(now * 0.004 + threeState.walkCycle) * 0.01, 0.16);
      bones.body.rotation.x = THREE.MathUtils.lerp(bones.body.rotation.x, Math.sin(threeState.walkProgress * 2.4) * 0.12, 0.2);
      bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, -0.08 + Math.sin(threeState.walkProgress * 5 + 1.6) * 0.05, 0.12);
      bones.head.rotation.y = THREE.MathUtils.lerp(bones.head.rotation.y, portraitHeadYaw, 0.2);
      bones.frontL.rotation.z = THREE.MathUtils.lerp(bones.frontL.rotation.z, 0.12 + threeState.walkCycle * 0.16, 0.2);
      bones.frontR.rotation.z = THREE.MathUtils.lerp(bones.frontR.rotation.z, -0.1 - threeState.walkCycle * 0.16, 0.2);
      bones.hindL.rotation.z = THREE.MathUtils.lerp(bones.hindL.rotation.z, -0.08 + threeState.walkCycle * 0.13, 0.2);
      bones.hindR.rotation.z = THREE.MathUtils.lerp(bones.hindR.rotation.z, -0.08 + threeState.walkCycle * 0.13, 0.2);
      bones.jaw.rotation.x = THREE.MathUtils.lerp(bones.jaw.rotation.x, Math.sin(threeState.walkProgress * 3) * 0.012, 0.2);
      threeState.root.position.x = THREE.MathUtils.lerp(threeState.root.position.x, threeState.walkPos * 0.42, 0.1);
      threeState.lookTargetYaw = threeState.walkDirection > 0 ? 1.48 : -1.48;
    } else {
      bones.body.rotation.x = THREE.MathUtils.lerp(bones.body.rotation.x, -0.03, 0.12);
      bones.head.rotation.x = THREE.MathUtils.lerp(bones.head.rotation.x, -0.05, 0.12);
      bones.spine.rotation.x = THREE.MathUtils.lerp(bones.spine.rotation.x, 0, 0.1);
      threeState.root.position.x = THREE.MathUtils.lerp(threeState.root.position.x, 0, 0.08);
      if (Math.random() < 0.0012) {
        setThreeAction(THREE_POSE_STATES.PET, 420, "belly", "squint");
      }
    }
  }

  if (!hasAction && !threeState.expression && now > threeState.expressionEndsAt) {
    if (pet.satiety < 20) {
      setThreeExpression("hungry", 900);
    } else if (pet.satiety > 75 && pet.affection > 75) {
      setThreeExpression("happy", 1500);
    } else if (now > threeState.blinkTick) {
      setThreeExpression("blink", 120);
      threeState.blinkTick = now + 2200 + Math.random() * 2500;
    }
  } else if (threeState.expressionEndsAt && now > threeState.expressionEndsAt && !hasAction) {
    clearThreeExpression();
  }

  threeState.root.userData.sealModel.bones.frontL.rotation.y = THREE.MathUtils.lerp(
    threeState.root.userData.sealModel.bones.frontL.rotation.y,
    threeState.walkDirection < 0 ? -0.08 : 0.08,
    0.2,
  );
  threeState.root.userData.sealModel.bones.frontR.rotation.y = THREE.MathUtils.lerp(
    threeState.root.userData.sealModel.bones.frontR.rotation.y,
    threeState.walkDirection < 0 ? 0.08 : -0.08,
    0.2,
  );

  if (threeState.body.material.isMeshPhysicalMaterial) {
    threeState.body.material.clearcoat = THREE.MathUtils.lerp(threeState.body.material.clearcoat || 0.7, 0.58 + threeState.wetness, 0.05);
    threeState.body.material.clearcoatRoughness = THREE.MathUtils.lerp(
      threeState.body.material.clearcoatRoughness || 0.2,
      pet.affection > 70 && pet.satiety > 60 ? 0.13 : 0.22,
      0.04,
    );
  }
  threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.16, 0.0022);
  updateThreeLookAt();
  updateProceduralExpression(delta);
  threeState.body.material.emissiveIntensity = THREE.MathUtils.lerp(
    threeState.body.material.emissiveIntensity || 0,
    pet.affection > 80 ? 0.06 : 0.015,
    0.12,
  );
}

function setMeterState(id, value) {
  const element = $(id);
  element.classList.toggle("is-low", value < 30);
  element.classList.toggle("is-critical", value < 15);
}

function renderStats() {
  $("coins").textContent = Math.floor(pet.coins);
  $("satiety-text").textContent = `${Math.round(pet.satiety)}%`;
  $("affection-text").textContent = `${Math.round(pet.affection)}%`;
  $("health-text").textContent = `${Math.round(pet.health)}%`;
  $("water-text").textContent = `${Math.round(pet.waterQuality)}%`;
  $("satiety-bar").style.width = `${pet.satiety}%`;
  $("affection-bar").style.width = `${pet.affection}%`;
  $("health-bar").style.width = `${pet.health}%`;
  $("water-bar").style.width = `${pet.waterQuality}%`;
  $("satiety-meter").setAttribute("aria-valuenow", String(Math.round(pet.satiety)));
  $("affection-meter").setAttribute("aria-valuenow", String(Math.round(pet.affection)));
  $("health-meter").setAttribute("aria-valuenow", String(Math.round(pet.health)));
  $("water-meter").setAttribute("aria-valuenow", String(Math.round(pet.waterQuality)));
  setMeterState("satiety-status", pet.satiety);
  setMeterState("affection-status", pet.affection);
  setMeterState("health-status", pet.health);
  setMeterState("water-status", pet.waterQuality);
}

function renderDecorations() {
  const nextKey = pet.active.join("|");
  if (nextKey === decorKey) return;
  decorKey = nextKey;
  $("decorations").innerHTML = DECOR.filter((item) => pet.active.includes(item.id))
    .map(
      (item, index) =>
        `<span class="pool-decor ${item.className}" style="--decor-delay:-${index * 0.63}s" aria-hidden="true">${item.icon}</span>`,
    )
    .join("");
}

function renderSeal() {
  const nextStage = stage();
  const roamer = $("seal-roamer");
  if (currentStage && currentStage !== nextStage) {
    roamer.classList.remove("stage-changing");
    void roamer.offsetWidth;
    roamer.classList.add("stage-changing");
    setTimeout(() => roamer.classList.remove("stage-changing"), 520);
  }
  roamer.classList.forEach((className) => {
    if (className.startsWith("stage-") && className !== "stage-changing") roamer.classList.remove(className);
  });
  roamer.classList.add(`stage-${nextStage}`);
  $("seal-sprite").style.backgroundImage = `url("${spriteAsset(nextStage, "idle")}")`;
  $("seal-action-sprite").style.backgroundImage = `url("${spriteAsset(nextStage, "pet")}")`;
  $("seal-jaw-sprite").style.backgroundImage = `url("${spriteAsset(nextStage, "chew")}")`;
  const habitatState = pet.waterQuality >= 70 ? "水質清澈" : pet.waterQuality >= 40 ? "水質待維護" : "水質警報";
  $("stage-pill").textContent = `${STAGE_LABELS[nextStage]} · ${habitatState}`;
  $("seal").setAttribute(
    "aria-label",
    mode === "pet" ? "摸摸小海豹，可以輕點或來回撫摸" : "和小海豹打招呼",
  );
  currentStage = nextStage;
  preloadStage(nextStage);
}

function renderDrawer(force = false) {
  const key = `${mode}:${pet.owned.join(",")}:${pet.active.join(",")}:${Math.floor(pet.coins)}:${Math.floor(Date.now() / 60000)}:${Math.round(pet.energy)}`;
  if (!force && key === drawerKey) return;
  drawerKey = key;
  const drawer = $("drawer");
  drawer.classList.toggle("closed", mode === "home");
  if (mode === "home") {
    drawer.innerHTML = "";
    return;
  }
  if (mode === "pet") {
    drawer.innerHTML =
      '<div class="interaction-card"><span class="big-hand" aria-hidden="true">🫳</span><div><small>信任建立</small><h2>輕柔互動，觀察牠是否願意靠近</h2><p>照護模擬中可輕點或撫摸；現實中的野生海豹請保持距離，不要觸摸或餵食。</p></div></div>';
  }
  if (mode === "feed") {
    drawer.innerHTML =
      '<div class="drawer-title"><div><small>多樣化海洋飲食</small><h2>輪替魚類與無脊椎動物</h2></div><span>海豹從獵物取得水分，每份增加 10% 飽足度</span></div><div class="food-grid">' +
      FOODS.map(
        (food, index) =>
          `<button data-food="${index}" aria-label="餵小海豹吃${food.name}"><b aria-hidden="true">${food.icon}</b><span>${food.name}</span><small>${food.note} · 飽足 +10%</small></button>`,
      ).join("") +
      "</div>";
  }
  if (mode === "care") {
    const now = Date.now();
    drawer.innerHTML =
      '<div class="drawer-title"><div><small>每日照護</small><h2>維持健康、休息與乾淨棲地</h2></div><span>體力 ' +
      `${Math.round(pet.energy)}% · 真實海豹需要固定上岸休息</span></div><div class="care-grid">` +
      CARE_ACTIONS.map((action) => {
        const remaining = careCooldown(action, now);
        const cooldownText = remaining ? `${Math.ceil(remaining / 60000)} 分鐘後可再做` : action.note;
        return `<button data-care="${action.id}" ${remaining ? "disabled" : ""} aria-label="${action.name}，${cooldownText}"><b aria-hidden="true">${action.icon}</b><span>${action.name}</span><small>${cooldownText}</small></button>`;
      }).join("") +
      '</div><p class="care-fact">海豹會上岸休息、調節體溫與換毛；不需要一直保持濕潤。這是照護模擬，野生海豹依法應保持距離。</p>';
  }
  if (mode === "shop") {
    drawer.innerHTML =
      '<div class="drawer-title"><div><small>泳池小屋</small><h2>佈置舒服的家</h2></div><span>離線每滿 1 小時獲得 1 幣</span></div><div class="shop-grid">' +
      DECOR.map((item, index) => {
        const owned = pet.owned.includes(item.id);
        const active = pet.active.includes(item.id);
        return `<button data-decor="${index}" class="${active ? "is-active" : owned ? "is-owned" : ""}" aria-label="${item.name}，${owned ? (active ? "目前使用中" : "已擁有") : `${item.price} 枚海豹幣`}"><b aria-hidden="true">${item.icon}</b><span>${item.name}</span><small>${owned ? (active ? "使用中・點擊收起" : "已擁有・點擊擺上") : `🪙 ${item.price}`}</small></button>`;
      }).join("") +
      "</div>";
  }
  drawer.querySelectorAll("[data-food]").forEach((button) => {
    button.onclick = () => feed(FOODS[Number(button.dataset.food)], button);
  });
  drawer.querySelectorAll("[data-decor]").forEach((button) => {
    button.onclick = () => buy(DECOR[Number(button.dataset.decor)]);
  });
  drawer.querySelectorAll("[data-care]").forEach((button) => {
    button.onclick = () => performCare(button.dataset.care);
  });
}

function syncThreeModeVisuals() {
  const artWrap = $("seal-art-wrap");
  const pool = $("pool");
  const canvas = getThreeCanvas();
  const isRealtime = threeState.ready && threeState.enabled;
  artWrap.classList.toggle("using-realtime", isRealtime);
  pool?.classList.toggle("using-3d", isRealtime);
  if (canvas) canvas.hidden = !isRealtime;
}

function render(persist = true, forceDrawer = false) {
  if (
    !FORCE_SPRITE_FALLBACK &&
    shouldUseRealtime3D() &&
    !threeState.ready &&
    window.__threeLoadFailed !== true
  ) {
    ensureThreeReady();
  }
  renderStats();
  renderSeal();
  renderDecorations();
  $("speech").textContent = mood();
  $("pool").className = `pool-scene mode-${mode}${document.hidden ? " is-paused" : ""}`;
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-expanded", String(active));
  });
  $("dead-overlay").hidden = !pet.dead;
  renderDrawer(forceDrawer);
  syncThreeModeVisuals();
  updateSoundButton();
  if (persist) safeSave();
}

function showNotice(message, tone = "normal") {
  const notice = $("notice");
  notice.textContent = message;
  notice.dataset.tone = tone;
  notice.classList.remove("notice-pop");
  void notice.offsetWidth;
  notice.classList.add("notice-pop");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => notice.classList.remove("notice-pop"), 1900);
}

function setBusy(busy) {
  interactionLock = busy;
  $("seal").setAttribute("aria-busy", String(busy));
  document.querySelectorAll("[data-food]").forEach((button) => {
    button.disabled = busy;
  });
}

function ensureAudio(startAmbient = false) {
  if (!pet.soundOn) return null;
  const Context = window.AudioContext || window.webkitAudioContext;
  if (!Context) return null;
  if (!audio) {
    audio = new Context();
    masterGain = audio.createGain();
    const compressor = audio.createDynamicsCompressor();
    compressor.threshold.value = -22;
    compressor.knee.value = 18;
    compressor.ratio.value = 6;
    compressor.attack.value = 0.006;
    compressor.release.value = 0.2;
    masterGain.gain.value = 0.64;
    masterGain.connect(compressor).connect(audio.destination);
  }
  if (audio.state === "suspended") audio.resume().catch(() => {});
  soundUnlocked = true;
  if (startAmbient) startWaterAmbience();
  return audio;
}

function startWaterAmbience() {
  if (!audio || ambientSource || !pet.soundOn) return;
  const length = audio.sampleRate * 2;
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = last * 0.985 + white * 0.015;
    data[i] = last * 0.7;
  }
  ambientSource = audio.createBufferSource();
  ambientSource.buffer = buffer;
  ambientSource.loop = true;
  const filter = audio.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 850;
  ambientGain = audio.createGain();
  ambientGain.gain.value = 0.018;
  const lfo = audio.createOscillator();
  const lfoGain = audio.createGain();
  lfo.frequency.value = 0.11;
  lfoGain.gain.value = 0.006;
  lfo.connect(lfoGain).connect(ambientGain.gain);
  ambientSource.connect(filter).connect(ambientGain).connect(masterGain);
  ambientSource.start();
  lfo.start();
}

function tone(frequency, start, duration, volume, type = "sine", endFrequency = frequency) {
  if (!audio || !masterGain) return;
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, endFrequency), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(masterGain);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function noiseBurst(start, duration, frequency, volume, softness = 1) {
  if (!audio || !masterGain) return;
  const length = Math.max(1, Math.floor(audio.sampleRate * duration));
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    const envelope = Math.pow(1 - i / length, softness);
    data[i] = (Math.random() * 2 - 1) * envelope;
  }
  const source = audio.createBufferSource();
  const filter = audio.createBiquadFilter();
  const gain = audio.createGain();
  source.buffer = buffer;
  filter.type = "bandpass";
  filter.frequency.value = frequency;
  filter.Q.value = 0.72;
  gain.gain.value = volume;
  source.connect(filter).connect(gain).connect(masterGain);
  source.start(start);
}

function sound(kind, kindDetail = "fish") {
  const context = ensureAudio(true);
  if (!context || !pet.soundOn) return;
  const now = context.currentTime + 0.01;
  if (kind === "select") {
    tone(360, now, 0.08, 0.035, "sine", 430);
  }
  if (kind === "pet") {
    if (kindDetail === "head") {
      tone(560, now, 0.2, 0.04, "sine", 390);
      tone(390, now + 0.06, 0.11, 0.036, "triangle", 300);
    } else if (kindDetail === "cheek") {
      tone(420, now, 0.16, 0.045, "triangle", 320);
      tone(610, now + 0.04, 0.13, 0.032, "sine", 540);
      tone(300, now + 0.11, 0.09, 0.02, "triangle", 220);
    } else if (kindDetail === "fin") {
      tone(340, now, 0.14, 0.043, "sine", 450);
      noiseBurst(now + 0.02, 0.06, 420, 0.02, 2.2);
    } else {
      tone(470, now, 0.2, 0.055, "sine", 590);
      tone(650, now + 0.1, 0.25, 0.045, "sine", 770);
    }
  }
  if (kind === "coin") {
    [620, 820, 1080].forEach((frequency, index) =>
      tone(frequency, now + index * 0.07, 0.16, 0.048, "triangle", frequency * 1.08),
    );
  }
  if (kind === "decor") {
    tone(310, now, 0.11, 0.04, "triangle", 420);
    tone(510, now + 0.07, 0.16, 0.035, "sine", 620);
  }
  if (kind === "eat") {
    const profile =
      kindDetail === "shrimp"
        ? { frequency: 1750, spacing: 0.12, softness: 0.7 }
        : kindDetail === "squid"
          ? { frequency: 720, spacing: 0.16, softness: 1.8 }
          : { frequency: 1120, spacing: 0.145, softness: 1.1 };
    [0, profile.spacing, profile.spacing * 2].forEach((offset, index) => {
      noiseBurst(now + offset, 0.105, profile.frequency - index * 90, 0.07, profile.softness);
      tone(180 - index * 18, now + offset, 0.11, 0.025, "triangle", 125 - index * 8);
    });
    tone(145, now + profile.spacing * 2 + 0.13, 0.22, 0.035, "sine", 82);
  }
  if (kind === "water") {
    tone(210, now, 0.13, 0.02, "triangle", 360);
    noiseBurst(now, 0.13, 720, 0.045, 1.8);
    noiseBurst(now + 0.04, 0.16, 520, 0.03, 2.5);
  }
}

function updateSoundButton() {
  const button = $("sound-toggle");
  button.querySelector("span").textContent = pet.soundOn ? "🔊" : "🔇";
  button.setAttribute("aria-label", pet.soundOn ? "關閉音效" : "開啟音效");
  button.setAttribute("aria-pressed", String(!pet.soundOn));
}

function toggleSound() {
  pet.soundOn = !pet.soundOn;
  if (pet.soundOn) {
    ensureAudio(true);
    if (masterGain && audio) {
      masterGain.gain.cancelScheduledValues(audio.currentTime);
      masterGain.gain.setTargetAtTime(0.64, audio.currentTime, 0.04);
    }
    sound("select");
    showNotice("自然音效已開啟");
  } else {
    if (masterGain && audio) {
      masterGain.gain.cancelScheduledValues(audio.currentTime);
      masterGain.gain.setTargetAtTime(0.0001, audio.currentTime, 0.035);
    }
    showNotice("音效已關閉");
  }
  render(false);
  safeSave();
}

function createParticles(kind, icon) {
  const pool = $("pool");
  const sealRect = $("seal").getBoundingClientRect();
  const poolRect = pool.getBoundingClientRect();
  const count = kind === "eat" ? 5 : 7;
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    particle.className = `effect-particle particle-${kind}`;
    particle.textContent = kind === "eat" ? (index % 2 ? "✦" : "•") : index % 3 ? "♥" : "✦";
    particle.style.left = `${sealRect.left - poolRect.left + sealRect.width * (0.35 + Math.random() * 0.3)}px`;
    particle.style.top = `${sealRect.top - poolRect.top + sealRect.height * (0.35 + Math.random() * 0.25)}px`;
    particle.style.setProperty("--particle-x", `${(Math.random() - 0.5) * 95}px`);
    particle.style.setProperty("--particle-y", `${-45 - Math.random() * 70}px`);
    particle.style.setProperty("--particle-delay", `${index * 0.045}s`);
    particle.setAttribute("aria-hidden", "true");
    pool.appendChild(particle);
    setTimeout(() => particle.remove(), 1250);
  }
  $("reaction-icon").textContent = icon;
}

function react(kind, icon, zone = "", visualAsset = "", motion = "") {
  const seal = $("seal");
  const roamer = $("seal-roamer");
  const actionAsset = visualAsset || (kind === "eat" ? "eat" : "pet");
  $("seal-action-sprite").style.backgroundImage = `url("${spriteAsset(currentStage || stage(), actionAsset)}")`;
  if (kind === "eat") {
    $("seal-jaw-sprite").style.backgroundImage = `url("${spriteAsset(currentStage || stage(), "chew")}")`;
  }
  actionActive = kind;
  seal.dataset.motion = motion || zone || kind;
  seal.classList.remove("eat", "pet");
  void seal.offsetWidth;
  seal.classList.add(kind);
  roamer.classList.add("reacting");
  roamer.classList.toggle("resting-on-rock", motion === "haul");
  if (motion === "haul") setBusy(true);
  $("reaction-icon").dataset.kind = kind;
  $("reaction-icon").dataset.zone = zone || "";
  $("reaction-icon").hidden = false;
  createParticles(kind, icon);
  clearTimeout(reactionTimer);
  const duration = motion === "haul" ? 7200 : kind === "eat" ? 1480 : 1180;
  reactionTimer = setTimeout(() => {
    $("reaction-icon").hidden = true;
    $("reaction-icon").dataset.zone = "";
    seal.classList.remove(kind);
    delete seal.dataset.motion;
    roamer.classList.remove("reacting");
    roamer.classList.remove("resting-on-rock");
    if (motion === "haul") setBusy(false);
    actionActive = "";
  }, duration);
}

function animateFood(icon, sourceButton) {
  const token = document.createElement("span");
  const sourceRect = sourceButton.getBoundingClientRect();
  const sealRect = $("seal").getBoundingClientRect();
  const transform = getComputedStyle($("seal-roamer")).transform;
  const facingRight = transform.startsWith("matrix(-");
  const startX = sourceRect.left + sourceRect.width / 2;
  const startY = sourceRect.top + sourceRect.height / 2;
  const targetX = sealRect.left + sealRect.width * (facingRight ? 0.69 : 0.31);
  const targetY = sealRect.top + sealRect.height * 0.42;
  token.className = "flying-food";
  token.textContent = icon;
  token.style.setProperty("--food-x", `${targetX - startX}px`);
  token.style.setProperty("--food-y", `${targetY - startY}px`);
  token.style.setProperty("--food-x-mid", `${(targetX - startX) * 0.86}px`);
  token.style.setProperty("--food-y-mid", `${(targetY - startY) * 0.86}px`);
  token.style.left = `${startX}px`;
  token.style.top = `${startY}px`;
  token.setAttribute("aria-hidden", "true");
  document.body.appendChild(token);
  setTimeout(() => token.remove(), 720);
}

function feed(food, sourceButton) {
  if (pet.dead || interactionLock) return;
  const satietyGain = 10;
  setBusy(true);
  animateFood(food.icon, sourceButton);
  if (threeState.ready) {
    const sourceRect = sourceButton.getBoundingClientRect();
    const eventPoint = {
      clientX: sourceRect.left + sourceRect.width / 2,
      clientY: sourceRect.top + sourceRect.height / 2,
    };
    lookAtScreenPoint(eventPoint);
    setThreeAction(THREE_POSE_STATES.EAT, 1400, "", "");
    threeState.feedTick = performance.now();
  }
  sound("select");
  navigator.vibrate?.(8);
  showNotice(`${food.name}送到嘴邊了～`);
  const delay = matchMedia("(prefers-reduced-motion: reduce)").matches ? 80 : 480;
  setTimeout(() => {
    pet.satiety = clamp(pet.satiety + satietyGain);
    pet.affection = clamp(pet.affection + 1 + (food.affection || 0));
    pet.health = clamp(pet.health + (food.health || 0));
    pet.energy = clamp(pet.energy + (food.energy || 0));
    pet.lastFedAt = Date.now();
    pet.dead = false;
    showNotice(`${food.name}吃光光了！＋${satietyGain}%`, "success");
    render(true, true);
    setBusy(true);
    if (threeState.ready) {
      threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.27, 0.2);
    }
    react("eat", food.icon, food.sound, "eat", `feed-${food.sound}`);
    sound("eat", food.sound);
    navigator.vibrate?.([10, 35, 9]);
    setTimeout(() => setBusy(false), 1500);
  }, delay);
}

function careCooldown(action, now = Date.now()) {
  const lastDone = Number(pet.careLog?.[action.id]) || 0;
  return Math.max(0, action.cooldown - (now - lastDone));
}

function performCare(actionId) {
  if (pet.dead || interactionLock) return;
  const action = CARE_ACTIONS.find((item) => item.id === actionId);
  if (!action || careCooldown(action)) return;
  pet.careLog = { ...pet.careLog, [action.id]: Date.now() };
  let message = "";
  let reaction = "♥";
  if (action.id === "haul") {
    pet.energy = clamp(pet.energy + 24);
    pet.affection = clamp(pet.affection + 3);
    message = "牠在乾燥岩台上安心休息，體力恢復了";
    reaction = "💤";
  }
  if (action.id === "clean") {
    pet.waterQuality = clamp(pet.waterQuality + 35);
    pet.health = clamp(pet.health + 3);
    message = "循環與過濾完成，泳池水質恢復清澈";
    reaction = "💧";
  }
  if (action.id === "enrich") {
    pet.affection = clamp(pet.affection + 8);
    pet.energy = clamp(pet.energy - 4);
    pet.coins += 2;
    message = "牠用鬍鬚探索藏食冰塊，獲得 2 枚海豹幣";
    reaction = "✦";
  }
  if (action.id === "check") {
    pet.health = clamp(pet.health + 12);
    pet.affection = clamp(pet.affection + 2);
    message = "呼吸、眼睛、皮膚與活動力都記錄完成";
    reaction = "🩺";
  }
  showNotice(message, "success");
  const careVisuals = {
    haul: { asset: "idle", motion: "haul" },
    clean: { asset: "walk", motion: "clean" },
    enrich: { asset: "walk", motion: "enrich" },
    check: { asset: "pet", motion: "check" },
  };
  sound(action.id === "clean" ? "water" : "pet", action.id === "clean" ? "fin" : "belly");
  navigator.vibrate?.(10);
  drawerKey = "";
  render(true, true);
  const careVisual = careVisuals[action.id];
  react("pet", reaction, action.id, careVisual.asset, careVisual.motion);
}

function addPetTrail(x, y) {
  const trail = document.createElement("span");
  trail.className = "pet-trail";
  trail.textContent = Math.random() > 0.25 ? "♥" : "✦";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  trail.setAttribute("aria-hidden", "true");
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 700);
}

function petSeal(zone = "belly") {
  const now = Date.now();
  if (pet.dead || mode !== "pet" || interactionLock || now - lastPetAt < 700) return;
  const safeZone = threeZoneRewards[zone] ? zone : "belly";
  const reward = threeZoneRewards[safeZone];
  lastPetAt = now;
  pet.affection = clamp(pet.affection + reward.affection);
  if (threeState.ready) {
    const actionPose = reward.mode || THREE_POSE_STATES.PET;
    setThreeAction(actionPose, safeZone === "fin" ? 1160 : 920, safeZone, reward.expression);
    threeState.lastInteractionStamp = performance.now();
    if (safeZone === "fin") {
      threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.5, 0.12);
    }
  }
  threeState.lastInteractionStamp = performance.now();
  showNotice(reward.line, "success");
  render();
  const zoneVisual = {
    head: "•",
    cheek: "✦",
    belly: "♥",
    fin: "💧",
    poke: "⚡",
  };
  const petVisuals = {
    head: { asset: "pet", motion: "head" },
    cheek: { asset: "idle", motion: "cheek" },
    belly: { asset: "pet", motion: "belly" },
    fin: { asset: "walk", motion: "fin" },
    poke: { asset: "idle", motion: "poke" },
  };
  const petVisual = petVisuals[safeZone];
  react("pet", zoneVisual[safeZone] || "♥", safeZone, petVisual.asset, petVisual.motion);
  sound(safeZone === "fin" ? "water" : "pet", safeZone);
  navigator.vibrate?.(10);
}

function greetSeal() {
  if (pet.dead || interactionLock || actionActive) return;
  const line = IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)];
  showNotice(line);
  react("pet", "♪", "greet", "walk", "greet");
  sound("pet");
}

function buy(item) {
  if (interactionLock) return;
  if (pet.owned.includes(item.id)) {
    pet.active = pet.active.includes(item.id)
      ? pet.active.filter((id) => id !== item.id)
      : [...pet.active, item.id];
    showNotice(pet.active.includes(item.id) ? `把${item.name}擺上泳池了！` : `收起${item.name}`);
    sound("decor");
    render(true, true);
    return;
  }
  if (pet.coins < item.price) {
    showNotice("海豹幣不夠，離線休息滿一小時就會獲得 1 枚～", "warning");
    sound("select");
    return;
  }
  pet.coins -= item.price;
  pet.owned.push(item.id);
  pet.active.push(item.id);
  showNotice(`買到${item.name}了！`, "success");
  sound("coin");
  render(true, true);
}

function switchMode(nextMode) {
  mode = mode === nextMode ? "home" : nextMode;
  threeState.lastInteractionStamp = performance.now();
  drawerKey = "";
  sound("select");
  render(true, true);
}

let pointerTracking = false;
let pointerTravel = 0;
let pointerLastX = 0;
let pointerLastY = 0;
let trailDistance = 0;
let gesturePetTriggered = false;
let pointerZone = "";
let suppressClick = false;

$("seal").addEventListener("pointerdown", (event) => {
  if (mode !== "pet" || pet.dead || interactionLock) return;
  ensureAudio(true);
  pointerTracking = true;
  pointerTravel = 0;
  trailDistance = 0;
  gesturePetTriggered = false;
  suppressClick = false;
  pointerLastX = event.clientX;
  pointerLastY = event.clientY;
  pointerZone = "belly";
  if (threeState.ready) {
    pointerZone = resolveRealtimeHitZone(event) || "belly";
    lookAtScreenPoint(event);
  } else {
    pointerZone = resolveFallbackHitZone(event);
  }
  $("seal-roamer").classList.add("held");
  $("seal").setPointerCapture?.(event.pointerId);
});

$("seal").addEventListener("pointermove", (event) => {
  if (!pointerTracking) return;
  const distance = Math.hypot(event.clientX - pointerLastX, event.clientY - pointerLastY);
  pointerTravel += distance;
  trailDistance += distance;
  pointerLastX = event.clientX;
  pointerLastY = event.clientY;
  if (threeState.ready) {
    pointerZone = resolveRealtimeHitZone(event) || pointerZone;
    lookAtScreenPoint(event);
  } else {
    pointerZone = resolveFallbackHitZone(event);
  }
  if (trailDistance > 22) {
    trailDistance = 0;
    addPetTrail(event.clientX, event.clientY);
  }
  if (pointerTravel > 58 && !gesturePetTriggered) {
    gesturePetTriggered = true;
    suppressClick = true;
    petSeal(pointerZone);
  }
});

function endPetPointer() {
  pointerTracking = false;
  $("seal-roamer").classList.remove("held");
  if (!gesturePetTriggered && mode === "pet" && !interactionLock && !pet.dead && !suppressClick) {
    petSeal(pointerZone);
  }
}

$("seal").addEventListener("pointerup", endPetPointer);
$("seal").addEventListener("pointercancel", endPetPointer);
$("seal").onclick = () => {
  if (suppressClick) {
    suppressClick = false;
    return;
  }
  if (mode === "pet") petSeal(pointerZone || "belly");
  else if (mode === "home") greetSeal();
};

document.querySelectorAll(".bottom-nav button").forEach((button) => {
  button.onclick = () => switchMode(button.dataset.mode);
});

$("sound-toggle").onclick = toggleSound;
$("adopt").onclick = () => {
  if (PREVIEW_DEAD) {
    location.href = `${location.pathname}?build=13`;
    return;
  }
  pet = fresh();
  mode = "home";
  currentStage = 0;
  drawerKey = "";
  decorKey = "";
  threeState.action = "";
  threeState.actionEndsAt = 0;
  threeState.expression = "";
  threeState.expressionEndsAt = 0;
  threeState.feedTick = 0;
  if (threeState.ready) {
    threeState.lastInteractionStamp = performance.now();
    clearThreeExpression();
    setThreeLookTarget(-1.48);
  }
  showNotice("新的小海豹來到泳池了，記得常常陪牠！", "success");
  render(true, true);
};

window.addEventListener(
  "pointerdown",
  () => {
    if (!soundUnlocked && pet.soundOn) ensureAudio(false);
  },
  { once: true, passive: true },
);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    applyElapsedStats();
    hiddenAt = Date.now();
    $("pool").classList.add("is-paused");
    if (threeState.running) {
      stopThree();
    }
    safeSave();
    return;
  }
  const now = Date.now();
  applyElapsedStats(now);
  const earned = collectOfflineCoins(hiddenAt ? now - hiddenAt : 0);
  hiddenAt = 0;
  $("pool").classList.remove("is-paused");
  if (threeState.ready && !threeState.running) {
    startThree();
  }
  if (earned) showNotice(`休息期間獲得 ${earned} 枚海豹幣！`, "success");
  render();
});

window.addEventListener("pageshow", () => {
  applyElapsedStats();
  if (threeState.ready && !threeState.running) {
    startThree();
  }
  render();
});

window.addEventListener("storage", (event) => {
  if (event.key !== SAVE_KEY || !event.newValue) return;
  try {
    const incoming = normalizePet(JSON.parse(event.newValue));
    if (incoming.updatedAt <= pet.updatedAt) return;
    pet = incoming;
    currentStage = 0;
    drawerKey = "";
    decorKey = "";
    render(false, true);
    showNotice("已同步另一個分頁的照顧進度");
  } catch {
    // Ignore malformed data from another tab.
  }
});

window.addEventListener("resize", () => {
  syncCanvasSize();
});

window.addEventListener("beforeunload", () => {
  applyElapsedStats();
  safeSave();
});

setInterval(() => {
  if (document.hidden) return;
  applyElapsedStats();
  renderStats();
  if (!actionActive) $("speech").textContent = mood();
  $("dead-overlay").hidden = !pet.dead;
  if (mode === "care") {
    drawerKey = "";
    renderDrawer(true);
  }
  safeSave();
}, 6e4);

setInterval(() => {
  if (document.hidden || actionActive || mode !== "home" || pet.dead) return;
  $("speech").textContent = IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)];
}, 17000);

if (pet.dead) {
  $("notice").textContent = "你太久沒回來了……";
} else if (starterGift) {
  $("notice").textContent = "新手禮物：1000 枚海豹幣已送達！";
} else if (offlineCoins) {
  $("notice").textContent = `離線期間獲得 ${offlineCoins} 枚海豹幣！`;
} else {
  $("notice").textContent = "小海豹正在等你～";
}

async function bootApp() {
  const loader = $("app-loader");
  const startedAt = performance.now();
  interactionLock = true;
  const allLoaded = await preloadEssentialAssets();
  const minimumDisplayTime = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 450;
  const remaining = minimumDisplayTime - (performance.now() - startedAt);
  if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
  if (!allLoaded && $("loading-text")) $("loading-text").textContent = "部分素材稍後會自動補載";
  interactionLock = false;
  render();
  document.body.classList.add("app-ready");
  requestAnimationFrame(() => loader?.classList.add("is-complete"));
  setTimeout(() => {
    if (loader) loader.hidden = true;
  }, 320);
}

bootApp();

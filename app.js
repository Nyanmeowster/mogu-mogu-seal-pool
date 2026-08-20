import sealStage1Idle from "./assets/seal-stage-1-aligned-v1.webp";
import sealStage1Eat from "./assets/seal-stage-1-eat-aligned-v1.webp";
import sealStage1Chew from "./assets/seal-stage-1-eat-closed-v2-aligned-v1.webp";
import sealStage1Pet from "./assets/seal-stage-1-pet-aligned-v1.webp";
import sealStage1Walk from "./assets/seal-stage-1-walk-aligned-v1.webp";
import sealStage1Ring from "./assets/seal-stage-1-doflamingo-ring-aligned-v1.webp";
import sealStage1Swim from "./assets/seal-stage-1-swim-v1-aligned-v1.webp";
import sealStage1Haul from "./assets/seal-stage-1-haul-v1-aligned-v1.webp";
import sealStage1Sleep from "./assets/seal-stage-1-sleep-v1-aligned-v1.webp";
import sealStage1Sniff from "./assets/seal-stage-1-sniff-v1-aligned-v1.webp";
import sealStage1Approach from "./assets/seal-stage-1-approach-v1-aligned-v1.webp";
import sealStage1Space from "./assets/seal-stage-1-space-v1-aligned-v1.webp";
import sealStage2Idle from "./assets/seal-stage-2-aligned-v1.webp";
import sealStage2Eat from "./assets/seal-stage-2-eat-aligned-v1.webp";
import sealStage2Chew from "./assets/seal-stage-2-eat-closed-v2-aligned-v1.webp";
import sealStage2Pet from "./assets/seal-stage-2-pet-aligned-v1.webp";
import sealStage2Walk from "./assets/seal-stage-2-walk-aligned-v1.webp";
import sealStage2Ring from "./assets/seal-stage-2-doflamingo-ring-aligned-v1.webp";
import sealStage2Swim from "./assets/seal-stage-2-swim-v1-aligned-v1.webp";
import sealStage2Haul from "./assets/seal-stage-2-haul-v1-aligned-v1.webp";
import sealStage2Sleep from "./assets/seal-stage-2-sleep-v1-aligned-v1.webp";
import sealStage2Sniff from "./assets/seal-stage-2-sniff-v1-aligned-v1.webp";
import sealStage2Approach from "./assets/seal-stage-2-approach-v1-aligned-v1.webp";
import sealStage2Space from "./assets/seal-stage-2-space-v1-aligned-v1.webp";
import sealStage3Idle from "./assets/seal-stage-3-aligned-v1.webp";
import sealStage3Eat from "./assets/seal-stage-3-eat-aligned-v1.webp";
import sealStage3Chew from "./assets/seal-stage-3-eat-closed-v2-aligned-v1.webp";
import sealStage3Pet from "./assets/seal-stage-3-pet-aligned-v1.webp";
import sealStage3Walk from "./assets/seal-stage-3-walk-aligned-v1.webp";
import sealStage3Ring from "./assets/seal-stage-3-doflamingo-ring-aligned-v1.webp";
import sealStage3Swim from "./assets/seal-stage-3-swim-v1-aligned-v1.webp";
import sealStage3Haul from "./assets/seal-stage-3-haul-v1-aligned-v1.webp";
import sealStage3Sleep from "./assets/seal-stage-3-sleep-v1-aligned-v1.webp";
import sealStage3Sniff from "./assets/seal-stage-3-sniff-v1-aligned-v1.webp";
import sealStage3Approach from "./assets/seal-stage-3-approach-v1-aligned-v1.webp";
import sealStage3Space from "./assets/seal-stage-3-space-v1-aligned-v1.webp";
import sealStage4Idle from "./assets/seal-stage-4-aligned-v1.webp";
import sealStage4Eat from "./assets/seal-stage-4-eat-aligned-v1.webp";
import sealStage4Chew from "./assets/seal-stage-4-eat-closed-v2-aligned-v1.webp";
import sealStage4Pet from "./assets/seal-stage-4-pet-aligned-v1.webp";
import sealStage4Walk from "./assets/seal-stage-4-walk-aligned-v1.webp";
import sealStage4Ring from "./assets/seal-stage-4-doflamingo-ring-aligned-v1.webp";
import sealStage4Swim from "./assets/seal-stage-4-swim-v1-aligned-v1.webp";
import sealStage4Haul from "./assets/seal-stage-4-haul-v1-aligned-v1.webp";
import sealStage4Sleep from "./assets/seal-stage-4-sleep-v1-aligned-v1.webp";
import sealStage4Sniff from "./assets/seal-stage-4-sniff-v1-aligned-v1.webp";
import sealStage4Approach from "./assets/seal-stage-4-approach-v1-aligned-v1.webp";
import sealStage4Space from "./assets/seal-stage-4-space-v1-aligned-v1.webp";
import sealStage5Idle from "./assets/seal-stage-5-aligned-v1.webp";
import sealStage5Eat from "./assets/seal-stage-5-eat-aligned-v1.webp";
import sealStage5Chew from "./assets/seal-stage-5-eat-closed-v2-aligned-v1.webp";
import sealStage5Pet from "./assets/seal-stage-5-pet-aligned-v1.webp";
import sealStage5Walk from "./assets/seal-stage-5-walk-aligned-v1.webp";
import sealStage5Ring from "./assets/seal-stage-5-doflamingo-ring-aligned-v1.webp";
import sealStage5Swim from "./assets/seal-stage-5-swim-v1-aligned-v1.webp";
import sealStage5Haul from "./assets/seal-stage-5-haul-v1-aligned-v1.webp";
import sealStage5Sleep from "./assets/seal-stage-5-sleep-v1-aligned-v1.webp";
import sealStage5Sniff from "./assets/seal-stage-5-sniff-v1-aligned-v1.webp";
import sealStage5Approach from "./assets/seal-stage-5-approach-v1-aligned-v1.webp";
import sealStage5Space from "./assets/seal-stage-5-space-v1-aligned-v1.webp";
import poolBackground from "./assets/pool-background-cover-v1.jpg";
import doflamingoRing from "./assets/doflamingo-swim-ring-v1.webp";

const HOUR = 36e5;
const FIVE_DAYS = 432e6;
const SAVE_KEY = "mogu-pet-v1";
const SAVE_BACKUP_KEY = "mogu-pet-v1-backup";
const SAVE_SCHEMA_VERSION = 6;
const ASSET_VERSION = "38";
const COIN_INTERVAL = 6 * HOUR;
const PREVIEW_DEAD = new URLSearchParams(location.search).get("preview") === "dead";
const QUERY_PARAMS = new URLSearchParams(location.search);
const FORCE_REALTIME_3D = false;
const FORCE_SPRITE_FALLBACK = true;
const COARSE_POINTER_QUERY = matchMedia("(pointer: coarse)");
const REDUCED_MOTION_QUERY = matchMedia("(prefers-reduced-motion: reduce)");
let coarsePointer = COARSE_POINTER_QUERY.matches;
let reducedMotion = REDUCED_MOTION_QUERY.matches;
function handleMediaPreferenceChange() {
  coarsePointer = COARSE_POINTER_QUERY.matches;
  reducedMotion = REDUCED_MOTION_QUERY.matches;
}
[COARSE_POINTER_QUERY, REDUCED_MOTION_QUERY].forEach((query) => {
  if (typeof query.addEventListener === "function") query.addEventListener("change", handleMediaPreferenceChange);
  else query.addListener?.(handleMediaPreferenceChange);
});
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
  { id: "ring", icon: "🦩", name: "Doflamingo 羽毛泳圈", price: 4, className: "decor-ring" },
  { id: "ball", icon: "🏖️", name: "海灘球", price: 7, className: "decor-ball" },
  { id: "plant", icon: "🌴", name: "迷你椰子樹", price: 12, className: "decor-plant" },
  { id: "light", icon: "✨", name: "星星池燈", price: 18, className: "decor-light" },
  { id: "shell", icon: "🐚", name: "珍珠貝殼", price: 22, className: "decor-shell" },
  { id: "duck", icon: "🦆", name: "小鴨浮伴", price: 30, className: "decor-duck" },
];

const FOODS = [
  { id: "fish", icon: "🐟", name: "鯡魚", sound: "fish", health: 2, note: "油脂與蛋白質", restock: 3 },
  { id: "squid", icon: "🦑", name: "魷魚", sound: "squid", energy: 3, note: "增加食物變化", restock: 3 },
  { id: "shrimp", icon: "🦐", name: "甜蝦", sound: "shrimp", affection: 2, note: "小份環境豐富化", restock: 3 },
];

const CARE_ACTIONS = [
  { id: "haul", icon: "🪨", name: "上岸休息", note: "恢復體力、調節體溫", cooldown: 15 * 60e3 },
  { id: "clean", icon: "💧", name: "維護水質", note: "清除污染、補充循環", cooldown: 30 * 60e3 },
  { id: "enrich", icon: "🧊", name: "探索活動", note: "藏食冰塊與嗅聞遊戲", cooldown: 10 * 60e3 },
  { id: "check", icon: "🩺", name: "健康檢查", note: "觀察呼吸、眼睛與體態", cooldown: 60 * 60e3 },
];

const STAGE_LABELS = ["", "纖細小海豹", "健康體型", "圓潤體型", "胖嘟嘟", "幸福圓滾滾"];
const IDLE_LINES = ["噗嚕～水溫剛剛好", "今天也想和你待在一起", "小海豹正在巡視泳池", "要不要陪我玩一下？"];
const ATTENTION_LINES = ["注意到你，正慢慢靠近", "聽見你的動靜，抬頭看了過來", "認出是你，沿著池邊游近"];
const COMPANION_LINES = {
  call: ["聽見你的聲音，牠抬起頭慢慢靠近", "牠認出你在叫牠，沿著池邊游過來", "牠眨眨眼，帶著好奇心靠近你"],
  splash: ["牠跟著水花開心游了一圈", "牠拍起一小片水花，又回頭等你", "牠潛進水裡繞了一圈，開心地浮上來"],
  quiet: ["牠在你身邊放鬆地休息", "牠靠著池邊，呼吸慢慢平穩下來", "你安靜陪著牠，牠放心地閉上眼睛"],
  wave: ["牠眨眨眼，像是在回應你的招呼", "牠抬起前鰭，輕輕動了一下", "牠歪著頭看你，鬍鬚微微顫動"],
};
const PET_LINES = {
  head: ["牠抬起頭迎著你的手", "牠瞇起眼睛，鬍鬚放鬆下來", "牠輕輕晃頭，像是還想再摸一下"],
  cheek: ["牠把臉頰靠過來了一點", "牠眨眨眼，對這個觸感很好奇", "牠的鬍鬚輕輕碰了碰你的手"],
  belly: ["牠放鬆地攤平肚子", "牠舒服得小幅扭了扭身體", "牠安穩趴著，呼吸變得又慢又深"],
  fin: ["牠動了動前鰭，濺起一點水花", "牠用前鰭輕拍水面回應你", "牠轉動身體，邀請你一起玩水"],
  poke: ["牠稍微縮了一下，提醒你輕一點", "牠轉頭看你，想確認剛才發生什麼", "牠把身體挪開一點，請你放慢動作"],
};
const FEED_LINES = ["吃光光了，滿足地舔了舔嘴邊", "仔細咀嚼完，牠期待地看向你", "吞下最後一口，牠開心地拍了拍水面"];
const PERSONALITIES = [
  { id: "gentle", name: "溫柔黏人", icon: "🤍", line: "牠喜歡安靜靠近熟悉的照護員" },
  { id: "curious", name: "好奇探險家", icon: "✨", line: "牠總會先去研究泳池裡的新東西" },
  { id: "foodie", name: "貪吃小獵手", icon: "🐟", line: "牠對不同氣味的食物特別有興趣" },
  { id: "sleepy", name: "悠閒睡神", icon: "💤", line: "牠最重視岩台上的安穩午睡" },
];
const DAILY_GOALS = [
  { id: "feed", label: "提供 2 種不同食物", target: 2, icon: "🐟" },
  { id: "care", label: "完成 2 次專業照護", target: 2, icon: "🩺" },
  { id: "play", label: "陪伴或遊戲 2 次", target: 2, icon: "♥" },
];
const HEALTH_EVENTS = {
  appetite: { icon: "🐟", title: "食慾降低", detail: "牠反覆嗅聞食物卻沒有立刻靠近。", treatment: "enrich", requiresCheck: true, hint: "先完成健康檢查，確認活動力與呼吸。", afterCheckHint: "已完成記錄；接著用低壓力探索活動觀察食慾。" },
  eyes: { icon: "👁️", title: "眼睛需要觀察", detail: "眼角看起來比平常濕潤。", treatment: "clean", requiresCheck: true, hint: "先記錄眼睛狀況並完成健康檢查。", afterCheckHint: "已完成記錄；接著檢查並維護水質。" },
  skin: { icon: "🦭", title: "皮膚狀態變化", detail: "上岸後有一小塊皮膚看起來乾燥。", treatment: "clean", requiresCheck: false, hint: "先確認水質與循環系統。", afterCheckHint: "請維護水質並持續觀察皮膚。" },
  tired: { icon: "💤", title: "活動力下降", detail: "牠今天游動的時間明顯變少。", treatment: "haul", requiresCheck: false, hint: "讓牠安靜上岸休息並持續觀察。", afterCheckHint: "請讓牠上岸休息並持續觀察。" },
};
const ACHIEVEMENTS = [
  { id: "hello", icon: "🏡", title: "第一天的相遇", detail: "完成海豹身分設定", reward: 3 },
  { id: "variety", icon: "🍽️", title: "營養輪替", detail: "近期餵過三種不同食物", reward: 5 },
  { id: "clean-water", icon: "💎", title: "清澈泳池", detail: "水質維持在 90% 以上", reward: 5 },
  { id: "trusted", icon: "🤍", title: "熟悉的照護員", detail: "信任度達到 60%", reward: 8 },
  { id: "ring-friend", icon: "🦩", title: "泳圈好朋友", detail: "和羽毛泳圈互動三次", reward: 6 },
  { id: "care-pro", icon: "🩺", title: "細心照護", detail: "累積完成十次照護", reward: 10 },
  { id: "week", icon: "📅", title: "七日陪伴", detail: "累積七個不同日期的紀錄", reward: 15 },
  { id: "best-friend", icon: "🏅", title: "親密夥伴", detail: "信任與健康同時達到 90%", reward: 20 },
];
const DAILY_MOMENTS = [
  { id: "near", personalities: ["gentle"], prompt: "今天牠一直在池邊看著你。", choices: [
    { id: "greet", label: "走近打招呼", icon: "👋", asset: "approach", motion: "auto-approach", affection: 4, energy: 0, reply: "牠認出你的腳步聲，開心地靠近了" },
    { id: "wait", label: "坐著等牠", icon: "🤍", asset: "sleep", motion: "auto-sleep", affection: 5, energy: 3, reply: "你沒有催促，牠自己慢慢靠到你身邊" },
  ] },
  { id: "water", minEnergy: 65, prompt: "今天牠精神很好，輕輕拍著水面。", choices: [
    { id: "play", label: "一起玩水", icon: "💦", asset: "swim", motion: "auto-swim", affection: 5, energy: -3, reply: "牠追著水花游了一圈，回頭等你再玩" },
    { id: "watch", label: "安靜看牠游", icon: "🌊", asset: "swim", motion: "auto-swim", affection: 3, energy: 1, reply: "牠自在地游著，偶爾回頭確認你還在" },
  ] },
  { id: "tired", maxEnergy: 45, prompt: "今天牠游得比較慢，似乎想休息。", choices: [
    { id: "rock", label: "陪牠上岸", icon: "🪨", asset: "haul", motion: "haul", affection: 4, energy: 7, reply: "牠在石頭上找到舒服的位置，放心睡著了" },
    { id: "quiet", label: "留一點空間", icon: "🌙", asset: "space", motion: "auto-space", affection: 5, energy: 5, reply: "你尊重牠的狀態，牠放鬆地閉上眼睛" },
  ] },
  { id: "hungry", maxSatiety: 42, prompt: "今天牠在食物區附近嗅聞，像是在告訴你什麼。", choices: [
    { id: "prepare", label: "一起去備餐", icon: "🐟", asset: "approach", motion: "auto-approach", affection: 4, energy: -1, reply: "牠跟著你靠近備餐區，耐心等著下一餐" },
    { id: "observe", label: "先觀察食慾", icon: "👀", asset: "sniff", motion: "auto-explore", affection: 3, energy: 1, reply: "牠仔細聞了聞，你也記下了今天的食慾" },
  ] },
  { id: "curious", personalities: ["curious"], prompt: "牠發現池邊有個沒看過的小角落。", choices: [
    { id: "explore", label: "陪牠去看看", icon: "✨", asset: "sniff", motion: "auto-explore", affection: 5, energy: -2, reply: "牠一路聞聞看看，還回頭確認你有跟上" },
    { id: "choose", label: "讓牠自己決定", icon: "🫧", asset: "space", motion: "auto-space", affection: 4, energy: 1, reply: "你留出選擇空間，牠放心地探索了一會兒" },
  ] },
  { id: "foodie", personalities: ["foodie"], prompt: "牠聞到熟悉的魚香，鬍鬚立刻動了起來。", choices: [
    { id: "scent", label: "做嗅聞遊戲", icon: "🐟", asset: "sniff", motion: "auto-explore", affection: 5, energy: -2, reply: "牠循著氣味找到目標，滿足地看向你" },
    { id: "routine", label: "維持用餐節奏", icon: "🕰️", asset: "approach", motion: "auto-approach", affection: 4, energy: 1, reply: "牠聽懂你要稍等，安穩地待在備餐區旁" },
  ] },
  { id: "sleepy", personalities: ["sleepy"], prompt: "牠在岩台旁慢慢眨眼，正在找舒服的位置。", choices: [
    { id: "settle", label: "整理休息位置", icon: "🪨", asset: "haul", motion: "haul", affection: 5, energy: 7, reply: "牠爬上整理好的岩台，很快就安心睡著了" },
    { id: "guard", label: "安靜守在旁邊", icon: "💤", asset: "sleep", motion: "auto-sleep", affection: 5, energy: 5, reply: "你放輕動作，牠在熟悉的陪伴中閉上眼睛" },
  ] },
  { id: "ring-day", requiresOwned: "ring", prompt: "牠繞著羽毛泳圈游了兩圈，像是在邀請你。", choices: [
    { id: "ring-play", label: "把泳圈推近", icon: "🦩", asset: "ring", motion: "ring-play", affection: 5, energy: -3, reply: "牠抱住羽毛泳圈轉了一圈，開心地拍起水花" },
    { id: "ring-watch", label: "讓牠慢慢靠近", icon: "🤍", asset: "approach", motion: "auto-approach", affection: 4, energy: 1, reply: "牠確認泳圈很安全，才放心把前鰭靠上去" },
  ] },
  { id: "ball-day", requiresOwned: "ball", prompt: "海灘球漂到牠面前，牠用鼻尖輕輕頂了一下。", choices: [
    { id: "ball-play", label: "把球滾回去", icon: "🏖️", asset: "swim", motion: "auto-swim", affection: 5, energy: -3, reply: "牠追上小球，又得意地把球推回你面前" },
    { id: "ball-wait", label: "等牠主動玩", icon: "🫧", asset: "approach", motion: "auto-approach", affection: 4, energy: 0, reply: "牠想了一會兒，最後自己把球頂向池中央" },
  ] },
  { id: "duck-day", requiresOwned: "duck", prompt: "小鴨浮伴漂過來，牠好奇地跟在後面。", choices: [
    { id: "duck-meet", label: "陪牠認識小鴨", icon: "🦆", asset: "sniff", motion: "auto-explore", affection: 5, energy: -1, reply: "牠聞聞小鴨，再用鼻尖很輕地碰了一下" },
    { id: "duck-space", label: "留給牠探索", icon: "🌊", asset: "space", motion: "auto-space", affection: 4, energy: 1, reply: "牠保持舒服的距離，慢慢跟著小鴨巡游" },
  ] },
  { id: "decor-day", ownedAny: ["plant", "light", "shell"], prompt: "牠注意到泳池裡的佈置，停下來仔細觀察。", choices: [
    { id: "decor-look", label: "陪牠一起看看", icon: "🔎", asset: "sniff", motion: "auto-explore", affection: 4, energy: -1, reply: "牠放心靠近新佈置，認真研究了好一會兒" },
    { id: "decor-rest", label: "讓牠自在適應", icon: "🤍", asset: "sleep", motion: "auto-sleep", affection: 4, energy: 3, reply: "你沒有催促，牠在熟悉的泳池裡慢慢放鬆" },
  ] },
];
const SIZE_STOPS = [20, 40, 70, 90];
const SPRITE_ASSETS = [
  null,
  { idle: sealStage1Idle, eat: sealStage1Eat, chew: sealStage1Chew, pet: sealStage1Pet, walk: sealStage1Walk, ring: sealStage1Ring, swim: sealStage1Swim, haul: sealStage1Haul, sleep: sealStage1Sleep, sniff: sealStage1Sniff, approach: sealStage1Approach, space: sealStage1Space },
  { idle: sealStage2Idle, eat: sealStage2Eat, chew: sealStage2Chew, pet: sealStage2Pet, walk: sealStage2Walk, ring: sealStage2Ring, swim: sealStage2Swim, haul: sealStage2Haul, sleep: sealStage2Sleep, sniff: sealStage2Sniff, approach: sealStage2Approach, space: sealStage2Space },
  { idle: sealStage3Idle, eat: sealStage3Eat, chew: sealStage3Chew, pet: sealStage3Pet, walk: sealStage3Walk, ring: sealStage3Ring, swim: sealStage3Swim, haul: sealStage3Haul, sleep: sealStage3Sleep, sniff: sealStage3Sniff, approach: sealStage3Approach, space: sealStage3Space },
  { idle: sealStage4Idle, eat: sealStage4Eat, chew: sealStage4Chew, pet: sealStage4Pet, walk: sealStage4Walk, ring: sealStage4Ring, swim: sealStage4Swim, haul: sealStage4Haul, sleep: sealStage4Sleep, sniff: sealStage4Sniff, approach: sealStage4Approach, space: sealStage4Space },
  { idle: sealStage5Idle, eat: sealStage5Eat, chew: sealStage5Chew, pet: sealStage5Pet, walk: sealStage5Walk, ring: sealStage5Ring, swim: sealStage5Swim, haul: sealStage5Haul, sleep: sealStage5Sleep, sniff: sealStage5Sniff, approach: sealStage5Approach, space: sealStage5Space },
];
const $ = (id) => document.getElementById(id);
const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));
const spriteAsset = (stageNumber, action = "idle") => `${SPRITE_ASSETS[stageNumber][action]}?v=${ASSET_VERSION}`;
document.documentElement.style.setProperty("--pool-background", `url("${poolBackground}?v=${ASSET_VERSION}")`);

function localDayKey(stamp = Date.now()) {
  const date = new Date(stamp);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function normalizeDaily(value) {
  const date = localDayKey();
  if (!value || value.date !== date) return { date, feed: 0, care: 0, play: 0, foods: [], rewarded: false };
  return {
    date,
    feed: Math.max(0, Number(value.feed) || 0),
    care: Math.max(0, Number(value.care) || 0),
    play: Math.max(0, Number(value.play) || 0),
    foods: Array.isArray(value.foods) ? [...new Set(value.foods)].slice(-3) : [],
    rewarded: Boolean(value.rewarded),
  };
}

const fresh = () => {
  const now = Date.now();
  return {
    satiety: 35,
    affection: 20,
    energy: 72,
    waterQuality: 86,
    health: 90,
    bodyCondition: 48,
    coins: 11,
    lastFedAt: now,
    lastSeenAt: now,
    lastStatAt: now,
    lastCoinAt: now,
    offlineRemainderMs: 0,
    updatedAt: now,
    owned: [],
    active: [],
    dead: false,
    carePauseReason: "",
    starterCoinsGranted: 1,
    soundOn: true,
    vibrationOn: true,
    careLog: {},
    personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)].id,
    recentFoods: [],
    activityLog: [],
    memories: [],
    daily: { date: localDayKey(now), feed: 0, care: 0, play: 0, foods: [] },
    lastRestAt: now,
    lastCleanAt: now,
    interactionFatigue: 0,
    interactionCounts: {},
    lastInteraction: null,
    dailyMoment: { date: "", id: "", choice: "" },
    onboardingStep: 0,
    schemaVersion: SAVE_SCHEMA_VERSION,
    lastResponseIndexes: {},
    name: "Mogu",
    birthday: "",
    profileComplete: false,
    inventory: { fish: 4, squid: 3, shrimp: 3 },
    currentHealthEvent: "",
    diagnosedHealthEvent: "",
    lastHealthEventDay: "",
    lifetime: { feeds: 0, care: 0, play: 0, ring: 0, days: [localDayKey(now)] },
    achievements: [],
  };
};

function positiveTimestampOr(value, fallback, maximum = Date.now()) {
  const timestamp = Number(value);
  const upperBound = Number.isFinite(Number(maximum)) && Number(maximum) > 0 ? Number(maximum) : Date.now();
  const fallbackTimestamp = Number.isFinite(Number(fallback)) && Number(fallback) > 0
    ? Math.min(Number(fallback), upperBound)
    : upperBound;
  return Number.isFinite(timestamp) && timestamp > 0 ? Math.min(timestamp, upperBound) : fallbackTimestamp;
}

function normalizeCareLog(value, now = Date.now()) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const validCareIds = new Set(CARE_ACTIONS.map((action) => action.id));
  return Object.fromEntries(Object.entries(value).flatMap(([id, stamp]) => {
    const timestamp = Number(stamp);
    if (!validCareIds.has(id) || !Number.isFinite(timestamp) || timestamp <= 0) return [];
    return [[id, Math.min(timestamp, now)]];
  }));
}

function normalizeTimelineEntries(value, limit, now = Date.now()) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((entry) => entry && typeof entry === "object" && !Array.isArray(entry))
    .slice(-limit)
    .map((entry) => ({ ...entry, at: positiveTimestampOr(entry.at, now, now) }));
}

function normalizePet(raw) {
  const now = Date.now();
  const base = fresh();
  const validDecorIds = new Set(DECOR.map((item) => item.id));
  const numberOr = (value, fallback) => (Number.isFinite(Number(value)) ? Number(value) : fallback);
  const listOrEmpty = (value) =>
    Array.isArray(value) ? [...new Set(value.filter((id) => validDecorIds.has(id)))] : [];
  const careCheckpoint = positiveTimestampOr(
    raw?.lastSeenAt,
    positiveTimestampOr(raw?.lastStatAt, base.lastStatAt, now),
    now,
  );
  const carePauseReason = raw?.carePauseReason === "substitute" || raw?.carePauseReason === "clinic"
    ? raw.carePauseReason
    : raw?.dead ? "clinic" : "";
  const normalized = {
    ...base,
    ...raw,
    satiety: clamp(numberOr(raw?.satiety, base.satiety)),
    affection: clamp(numberOr(raw?.affection, base.affection)),
    energy: clamp(numberOr(raw?.energy, base.energy)),
    waterQuality: clamp(numberOr(raw?.waterQuality, base.waterQuality)),
    health: clamp(numberOr(raw?.health, base.health)),
    bodyCondition: clamp(numberOr(raw?.bodyCondition, numberOr(raw?.satiety, base.bodyCondition))),
    coins: Math.max(0, numberOr(raw?.coins, base.coins)),
    lastFedAt: positiveTimestampOr(raw?.lastFedAt, base.lastFedAt, now),
    lastSeenAt: positiveTimestampOr(raw?.lastSeenAt, base.lastSeenAt, now),
    lastStatAt: positiveTimestampOr(raw?.lastStatAt, raw?.lastSeenAt || base.lastStatAt, now),
    lastCoinAt: positiveTimestampOr(raw?.lastCoinAt, raw?.lastSeenAt || base.lastCoinAt, now),
    offlineRemainderMs: Math.max(0, numberOr(raw?.offlineRemainderMs, 0)) % COIN_INTERVAL,
    updatedAt: Math.min(now, Math.max(0, numberOr(raw?.updatedAt, 0))),
    owned: listOrEmpty(raw?.owned),
    active: listOrEmpty(raw?.active),
    dead: Boolean(raw?.dead),
    carePauseReason: raw?.dead ? carePauseReason : "",
    soundOn: raw?.soundOn !== false,
    vibrationOn: raw?.vibrationOn !== false,
    careLog: normalizeCareLog(raw?.careLog, now),
    personality: PERSONALITIES.some((item) => item.id === raw?.personality) ? raw.personality : base.personality,
    recentFoods: Array.isArray(raw?.recentFoods) ? raw.recentFoods.slice(-6) : [],
    activityLog: normalizeTimelineEntries(raw?.activityLog, 40, now),
    memories: normalizeTimelineEntries(raw?.memories, 18, now),
    daily: normalizeDaily(raw?.daily),
    lastRestAt: positiveTimestampOr(raw?.lastRestAt, careCheckpoint, now),
    lastCleanAt: positiveTimestampOr(raw?.lastCleanAt, careCheckpoint, now),
    interactionFatigue: clamp(numberOr(raw?.interactionFatigue, 0)),
    interactionCounts: raw?.interactionCounts && typeof raw.interactionCounts === "object" ? { ...raw.interactionCounts } : {},
    lastInteraction: raw?.lastInteraction && typeof raw.lastInteraction === "object"
      ? { ...raw.lastInteraction, at: positiveTimestampOr(raw.lastInteraction.at, now, now) }
      : null,
    dailyMoment: raw?.dailyMoment && typeof raw.dailyMoment === "object" ? { ...raw.dailyMoment } : { date: "", id: "", choice: "" },
    onboardingStep: Object.hasOwn(raw || {}, "onboardingStep") ? Math.min(4, Math.max(0, Math.floor(numberOr(raw.onboardingStep, 0)))) : raw?.profileComplete ? 4 : 0,
    schemaVersion: SAVE_SCHEMA_VERSION,
    lastResponseIndexes: raw?.lastResponseIndexes && typeof raw.lastResponseIndexes === "object" ? { ...raw.lastResponseIndexes } : {},
    name: typeof raw?.name === "string" && raw.name.trim() ? raw.name.trim().replace(/[<>&"]/g, "").slice(0, 12) || base.name : base.name,
    birthday: typeof raw?.birthday === "string" ? raw.birthday.slice(0, 10) : "",
    profileComplete: Boolean(raw?.profileComplete),
    inventory: {
      fish: Math.max(0, Math.floor(numberOr(raw?.inventory?.fish, base.inventory.fish))),
      squid: Math.max(0, Math.floor(numberOr(raw?.inventory?.squid, base.inventory.squid))),
      shrimp: Math.max(0, Math.floor(numberOr(raw?.inventory?.shrimp, base.inventory.shrimp))),
    },
    currentHealthEvent: HEALTH_EVENTS[raw?.currentHealthEvent] ? raw.currentHealthEvent : "",
    diagnosedHealthEvent: HEALTH_EVENTS[raw?.diagnosedHealthEvent] ? raw.diagnosedHealthEvent : "",
    lastHealthEventDay: typeof raw?.lastHealthEventDay === "string" ? raw.lastHealthEventDay : "",
    lifetime: {
      feeds: Math.max(0, numberOr(raw?.lifetime?.feeds, 0)),
      care: Math.max(0, numberOr(raw?.lifetime?.care, 0)),
      play: Math.max(0, numberOr(raw?.lifetime?.play, 0)),
      ring: Math.max(0, numberOr(raw?.lifetime?.ring, 0)),
      days: Array.isArray(raw?.lifetime?.days) ? [...new Set(raw.lifetime.days.filter((day) => typeof day === "string"))].slice(-60) : [localDayKey()],
    },
    achievements: Array.isArray(raw?.achievements) ? [...new Set(raw.achievements.filter((id) => ACHIEVEMENTS.some((item) => item.id === id)))] : [],
    starterCoinsGranted: raw?.starterCoinsGranted === 1 ? 1 : 0,
  };
  normalized.active = normalized.active.filter((id) => normalized.owned.includes(id));
  if (normalized.diagnosedHealthEvent !== normalized.currentHealthEvent) normalized.diagnosedHealthEvent = "";
  delete normalized.feedStreak;
  delete normalized.lastFeedComboAt;
  delete normalized.bestFeedStreak;
  return normalized;
}

let storageAvailable = true;
let storageWarningShown = false;
let recoveredSave = false;
let saveWriteProtected = false;
let futureSaveWarningShown = false;
let tabReadOnly = false;
let tabLockQueued = false;
let tabOwnershipMode = "none";
let tabLeaseHeartbeat = 0;
let tabLeaseTakeoverTimer = 0;
let tabLeaseTakeoverBusy = false;
const TAB_LOCK_NAME = `${SAVE_KEY}-primary-writer`;
const TAB_LEASE_KEY = `${SAVE_KEY}-primary-writer-lease`;
const TAB_LEASE_DURATION = 15e3;
const TAB_LEASE_REFRESH = 5e3;
const TAB_ID = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function decodeSavedPet(value) {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function isRecognizableSave(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return false;
  const hasFiniteNumber = (key) => raw[key] !== null && raw[key] !== "" && Number.isFinite(Number(raw[key]));
  return hasFiniteNumber("satiety")
    && Number(raw.satiety) >= 0
    && Number(raw.satiety) <= 100
    && hasFiniteNumber("lastSeenAt")
    && Number(raw.lastSeenAt) > 0;
}

function isCompleteSave(raw) {
  if (!isRecognizableSave(raw)) return false;
  const finite = (key) => raw[key] !== null && raw[key] !== "" && Number.isFinite(Number(raw[key]));
  const version = Number(raw.schemaVersion ?? 1);
  const validOfflineCheckpoint = version < 4
    || finite("lastCoinAt")
      && Number(raw.lastCoinAt) > 0
      && finite("offlineRemainderMs")
      && Number(raw.offlineRemainderMs) >= 0
      && Number(raw.offlineRemainderMs) < (version >= 5 ? COIN_INTERVAL : HOUR);
  const validBodyCondition = version < 5
    || finite("bodyCondition")
      && Number(raw.bodyCondition) >= 0
      && Number(raw.bodyCondition) <= 100;
  return finite("affection")
    && finite("coins")
    && finite("lastFedAt")
    && Number(raw.lastFedAt) > 0
    && Array.isArray(raw.owned)
    && Array.isArray(raw.active)
    && validOfflineCheckpoint
    && validBodyCondition;
}

function hasFutureSchema(raw) {
  const version = Number(raw?.schemaVersion ?? 1);
  return Boolean(raw && typeof raw === "object" && !Array.isArray(raw))
    && Number.isInteger(version)
    && version > SAVE_SCHEMA_VERSION;
}

function protectFutureSave() {
  saveWriteProtected = true;
  if (typeof syncInteractionState === "function") syncInteractionState();
  if (!futureSaveWarningShown && document.body?.classList.contains("app-ready")) {
    futureSaveWarningShown = true;
    showNotice("偵測到較新版本的存檔，已停止覆寫以保護資料", "warning");
  }
}

function migrateSave(raw) {
  if (!isCompleteSave(raw)) return null;
  let version = Number(raw.schemaVersion ?? 1);
  if (!Number.isInteger(version) || version < 1 || version > SAVE_SCHEMA_VERSION) return null;
  const migrated = { ...raw };
  if (version === 1) {
    delete migrated.feedStreak;
    delete migrated.lastFeedComboAt;
    delete migrated.bestFeedStreak;
    migrated.schemaVersion = 2;
    version = 2;
  }
  if (version === 2) {
    migrated.lastResponseIndexes = migrated.lastResponseIndexes && typeof migrated.lastResponseIndexes === "object"
      ? { ...migrated.lastResponseIndexes }
      : {};
    migrated.schemaVersion = 3;
    version = 3;
  }
  if (version === 3) {
    migrated.lastCoinAt = Number.isFinite(Number(migrated.lastCoinAt))
      ? Number(migrated.lastCoinAt)
      : Number(migrated.lastSeenAt) || Date.now();
    migrated.schemaVersion = 4;
    version = 4;
  }
  if (version === 4) {
    migrated.bodyCondition = clamp(Number.isFinite(Number(migrated.bodyCondition))
      ? Number(migrated.bodyCondition)
      : Number.isFinite(Number(migrated.satiety)) ? Number(migrated.satiety) : 48);
    migrated.diagnosedHealthEvent = "";
    migrated.schemaVersion = 5;
    version = 5;
  }
  if (version === 5) {
    migrated.carePauseReason = migrated.carePauseReason === "substitute" || migrated.carePauseReason === "clinic"
      ? migrated.carePauseReason
      : migrated.dead ? "clinic" : "";
    migrated.schemaVersion = 6;
  }
  return migrated;
}

function parseSavedPet(value) {
  return migrateSave(decodeSavedPet(value));
}

function safeRead() {
  let currentValue;
  let backupValue;
  try {
    currentValue = localStorage.getItem(SAVE_KEY);
    backupValue = localStorage.getItem(SAVE_BACKUP_KEY);
  } catch {
    storageAvailable = false;
    return null;
  }
  const rawCurrent = decodeSavedPet(currentValue);
  if (hasFutureSchema(rawCurrent)) {
    saveWriteProtected = true;
    if (isCompleteSave(rawCurrent)) return rawCurrent;
    const backup = parseSavedPet(backupValue);
    if (backup) recoveredSave = true;
    return backup;
  }
  const current = migrateSave(rawCurrent);
  if (current) return current;
  const backup = parseSavedPet(backupValue);
  if (backup) recoveredSave = true;
  return backup;
}

function warnStorageUnavailable() {
  if (storageWarningShown || !document.body?.classList.contains("app-ready")) return;
  storageWarningShown = true;
  showNotice("這個瀏覽器無法保存進度；關閉頁面後本次照護會消失", "warning");
}

function decodeTabLease(value) {
  try {
    const lease = JSON.parse(value || "null");
    if (!lease || typeof lease.owner !== "string" || !Number.isFinite(Number(lease.expiresAt))) return null;
    return { owner: lease.owner, expiresAt: Number(lease.expiresAt) };
  } catch {
    return null;
  }
}

function readTabLease() {
  try {
    return decodeTabLease(localStorage.getItem(TAB_LEASE_KEY));
  } catch {
    storageAvailable = false;
    return null;
  }
}

function acquireTabLease(now = Date.now()) {
  if (!storageAvailable) return false;
  const current = readTabLease();
  if (!storageAvailable) return false;
  if (current && current.owner !== TAB_ID && current.expiresAt > now) return false;
  const candidate = { owner: TAB_ID, expiresAt: now + TAB_LEASE_DURATION };
  try {
    localStorage.setItem(TAB_LEASE_KEY, JSON.stringify(candidate));
  } catch {
    storageAvailable = false;
    return false;
  }
  const confirmed = readTabLease();
  return Boolean(confirmed && confirmed.owner === TAB_ID && confirmed.expiresAt === candidate.expiresAt);
}

function renewTabLease(now = Date.now()) {
  if (tabOwnershipMode !== "lease" || !storageAvailable) return false;
  const current = readTabLease();
  if (!current || current.owner !== TAB_ID) return false;
  try {
    localStorage.setItem(TAB_LEASE_KEY, JSON.stringify({ owner: TAB_ID, expiresAt: now + TAB_LEASE_DURATION }));
  } catch {
    storageAvailable = false;
    return false;
  }
  const confirmed = readTabLease();
  return Boolean(confirmed && confirmed.owner === TAB_ID && confirmed.expiresAt > now);
}

function releaseTabLease() {
  if (tabOwnershipMode !== "lease" || !storageAvailable) return;
  try {
    if (readTabLease()?.owner === TAB_ID) localStorage.removeItem(TAB_LEASE_KEY);
  } catch {
    storageAvailable = false;
  }
  tabOwnershipMode = "none";
  clearInterval(tabLeaseHeartbeat);
  tabLeaseHeartbeat = 0;
}

async function activatePrimaryTab(ownershipMode) {
  try {
    const latest = parseSavedPet(localStorage.getItem(SAVE_KEY));
    if (latest) {
      const incoming = normalizePet(latest);
      await preloadStage(stageForBodyCondition(incoming.bodyCondition));
      pet = incoming;
      currentStage = 0;
      drawerKey = "";
      decorKey = "";
    }
  } catch {
    // Keep the already normalized in-memory state if storage cannot be read.
  }
  tabOwnershipMode = ownershipMode;
  tabReadOnly = false;
  interactionLock = false;
  let earned = 0;
  if (!saveWriteProtected) {
    const now = Date.now();
    applyElapsedStats(now);
    earned = collectOfflineCoins(now);
  }
  render(!saveWriteProtected, true);
  if (saveWriteProtected) {
    showNotice("已取得分頁控制，但較新版本存檔仍保持唯讀", "warning");
  } else if (earned) {
    showNotice(`現在可以繼續照顧，休息期間獲得 ${earned} 枚海豹幣`, "success");
  } else {
    showNotice("另一個分頁已關閉，現在可以在這裡繼續照顧", "success");
  }
}

async function attemptLeaseTakeover() {
  if (tabLeaseTakeoverBusy || !tabReadOnly || navigator.locks?.request || !storageAvailable) return;
  tabLeaseTakeoverBusy = true;
  try {
    if (!acquireTabLease()) return;
    clearInterval(tabLeaseTakeoverTimer);
    tabLeaseTakeoverTimer = 0;
    tabOwnershipMode = "lease";
    startTabLeaseHeartbeat();
    await activatePrimaryTab("lease");
  } finally {
    tabLeaseTakeoverBusy = false;
  }
}

function queueLeaseTakeover() {
  if (tabLeaseTakeoverTimer || navigator.locks?.request || !storageAvailable) return;
  tabLeaseTakeoverTimer = setInterval(attemptLeaseTakeover, 2500);
}

function startTabLeaseHeartbeat() {
  clearInterval(tabLeaseHeartbeat);
  tabLeaseHeartbeat = setInterval(() => {
    if (renewTabLease()) return;
    clearInterval(tabLeaseHeartbeat);
    tabLeaseHeartbeat = 0;
    if (!storageAvailable) {
      tabOwnershipMode = "memory";
      tabReadOnly = false;
      warnStorageUnavailable();
    } else {
      tabOwnershipMode = "none";
      tabReadOnly = true;
      queueLeaseTakeover();
      if (document.body?.classList.contains("app-ready")) {
        showNotice("另一個分頁已取得照護權；這裡改為唯讀", "warning");
      }
    }
    syncInteractionState();
  }, TAB_LEASE_REFRESH);
}

function queuePrimaryTabTakeover() {
  if (tabLockQueued || !navigator.locks?.request) return;
  tabLockQueued = true;
  navigator.locks.request(TAB_LOCK_NAME, { mode: "exclusive" }, async (lock) => {
    if (!lock) return;
    await activatePrimaryTab("web-lock");
    await new Promise(() => {});
  }).catch(() => {
    tabReadOnly = true;
    syncInteractionState();
  });
}

function establishTabOwnership() {
  if (!storageAvailable) {
    tabOwnershipMode = "memory";
    return Promise.resolve(true);
  }
  if (!navigator.locks?.request) {
    const acquired = acquireTabLease();
    if (!storageAvailable) {
      tabOwnershipMode = "memory";
      return Promise.resolve(true);
    }
    if (acquired) {
      tabOwnershipMode = "lease";
      tabReadOnly = false;
      startTabLeaseHeartbeat();
      return Promise.resolve(true);
    }
    tabReadOnly = true;
    queueLeaseTakeover();
    return Promise.resolve(false);
  }
  return new Promise((resolve) => {
    let request;
    try {
      request = navigator.locks.request(TAB_LOCK_NAME, { mode: "exclusive", ifAvailable: true }, async (lock) => {
        if (!lock) {
          tabReadOnly = true;
          try {
            const latest = parseSavedPet(localStorage.getItem(SAVE_KEY));
            if (latest) pet = normalizePet(latest);
          } catch {
            // The storage warning path will explain that progress cannot persist.
          }
          resolve(false);
          queuePrimaryTabTakeover();
          return;
        }
        tabOwnershipMode = "web-lock";
        tabReadOnly = false;
        resolve(true);
        await new Promise(() => {});
      });
    } catch {
      tabReadOnly = true;
      resolve(false);
      return;
    }
    Promise.resolve(request).catch(() => {
      tabReadOnly = true;
      resolve(false);
    });
  });
}

let pet = normalizePet(safeRead());
let mode = "home";
let autonomousMood = "idle";
let autonomousUntil = 0;
let currentStage = 0;
let actionActive = "";
let reactionTimer;
let spriteSwapTimer;
let interactionLock = false;
let lastPetAt = 0;
let drawerKey = "";
let decorKey = "";
let companionHistoryOpen = false;
let noticeTimer;
let sequenceTimer;
let settleTimer;
let attentionTimer;
let decorationFocusRestore = null;
let rapidTouches = [];
let visualStageLock = 0;
let visualStageGeneration = 0;
let interactionGeneration = 0;
let directPetLockToken = 0;
let ringInteractionAvailableAt = 0;
const poolToyInteractionAvailableAt = { ball: 0, plant: 0, light: 0, shell: 0, duck: 0 };
let activeModal = null;
let modalRestoreFocus = null;
let modalFocusFrame = 0;
let profileEditCancelable = false;
let lastInputWasKeyboard = false;
let audio;
let masterGain;
let ambientGain;
let ambientSource;
let ambientLfo;
let audioVisibilityGeneration = 0;
let soundUnlocked = false;
const preloaded = new Set();
const spriteCache = new Map();

function personalityProfile() {
  return PERSONALITIES.find((item) => item.id === pet.personality) || PERSONALITIES[0];
}

function dailyMomentCandidates() {
  const candidates = DAILY_MOMENTS.filter((moment) => {
    const personalityMatch = moment.personalities?.includes(pet.personality);
    const energyMatch = (Number.isFinite(moment.minEnergy) && pet.energy >= moment.minEnergy)
      || (Number.isFinite(moment.maxEnergy) && pet.energy <= moment.maxEnergy);
    const satietyMatch = Number.isFinite(moment.maxSatiety) && pet.satiety <= moment.maxSatiety;
    const ownedMatch = (moment.requiresOwned && pet.owned.includes(moment.requiresOwned))
      || moment.ownedAny?.some((id) => pet.owned.includes(id));
    return personalityMatch || energyMatch || satietyMatch || ownedMatch;
  });
  return candidates.length ? candidates : DAILY_MOMENTS.slice(0, 3);
}

function chooseDailyMoment(today) {
  const candidates = dailyMomentCandidates();
  const stateKey = `${today}:${pet.personality}:${Math.round(pet.energy / 20)}:${Math.round(pet.satiety / 20)}:${pet.owned.slice().sort().join(",")}`;
  const score = [...stateKey].reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 1), 0);
  return candidates[score % candidates.length];
}

function ensureCurrentDay() {
  const today = localDayKey();
  if (pet.daily?.date !== today) pet.daily = normalizeDaily(null);
  if (!pet.lifetime.days.includes(today)) pet.lifetime.days = [...pet.lifetime.days, today].slice(-60);
  if (pet.dailyMoment?.date !== today) {
    pet.dailyMoment = { date: today, id: chooseDailyMoment(today).id, choice: "" };
  }
  maybeCreateHealthEvent(today);
}

function rememberInteraction(id, label) {
  pet.interactionCounts[id] = Math.max(0, Number(pet.interactionCounts[id]) || 0) + 1;
  pet.lastInteraction = { id, label, at: Date.now() };
}

function pickVariant(key, options) {
  if (!Array.isArray(options) || options.length === 0) return "";
  const previous = Number(pet.lastResponseIndexes?.[key]);
  const candidates = options.map((_, index) => index).filter((index) => options.length === 1 || index !== previous);
  const index = candidates[Math.floor(Math.random() * candidates.length)];
  pet.lastResponseIndexes = { ...pet.lastResponseIndexes, [key]: index };
  return options[index];
}

function favoriteInteraction() {
  const entries = Object.entries(pet.interactionCounts || {}).sort((a, b) => b[1] - a[1]);
  if (!entries.length) return "";
  const labels = { call: "呼喚牠", splash: "一起玩水", quiet: "安靜陪伴", wave: "打招呼", ball: "追海灘球", plant: "在椰子樹旁休息", light: "追池燈倒影", shell: "探索珍珠貝殼", duck: "看看小鴨", pet: "輕輕摸摸", feed: "餵牠吃東西", moment: "回應牠的心情" };
  return labels[entries[0][0]] || "陪在牠身邊";
}

function maybeCreateHealthEvent(today = localDayKey()) {
  if (pet.currentHealthEvent || pet.lastHealthEventDay === today || pet.dead) return;
  const risks = [];
  if (pet.satiety < 35 || new Set(pet.recentFoods.slice(-4)).size < 2) risks.push("appetite");
  if (pet.health < 70) risks.push("eyes");
  if (pet.waterQuality < 58) risks.push("skin");
  if (pet.energy < 42) risks.push("tired");
  const dateScore = [...today].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  if (risks.length && dateScore % 3 === 0) {
    pet.currentHealthEvent = risks[dateScore % risks.length];
    pet.diagnosedHealthEvent = "";
    pet.lastHealthEventDay = today;
    const event = HEALTH_EVENTS[pet.currentHealthEvent];
    addActivity("health", `觀察到：${event.title}`, event.icon);
  }
}

function achievementUnlocked(id) {
  const variety = new Set(pet.recentFoods.slice(-4)).size;
  if (id === "hello") return pet.profileComplete;
  if (id === "variety") return variety >= 3;
  if (id === "clean-water") return pet.waterQuality >= 90;
  if (id === "trusted") return pet.affection >= 60;
  if (id === "ring-friend") return pet.lifetime.ring >= 3;
  if (id === "care-pro") return pet.lifetime.care >= 10;
  if (id === "week") return pet.lifetime.days.length >= 7;
  if (id === "best-friend") return pet.affection >= 90 && pet.health >= 90;
  return false;
}

function checkAchievements(silent = false) {
  const unlocked = ACHIEVEMENTS.filter((item) => !pet.achievements.includes(item.id) && achievementUnlocked(item.id));
  if (!unlocked.length) return;
  unlocked.forEach((item) => {
    pet.achievements.push(item.id);
    pet.coins += item.reward;
    addActivity("milestone", `解鎖成就「${item.title}」`, item.icon);
  });
  if (!silent) showNotice(`解鎖成就：${unlocked[0].title}！`, "success");
}

function addActivity(type, text, icon = "•") {
  const entry = { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, at: Date.now(), type, text, icon };
  pet.activityLog = [...pet.activityLog, entry].slice(-40);
  if (["milestone", "play", "health"].includes(type)) {
    const lastMemory = pet.memories.at(-1);
    if (!lastMemory || lastMemory.text !== text || Date.now() - lastMemory.at > 6 * HOUR) {
      pet.memories = [...pet.memories, { ...entry, stage: stage() }].slice(-18);
    }
  }
}

function updateDaily(kind, foodName = "") {
  ensureCurrentDay();
  if (kind === "feed") {
    pet.daily.feed += 1;
    pet.lifetime.feeds += 1;
    if (foodName) pet.daily.foods = [...new Set([...pet.daily.foods, foodName])].slice(-3);
  } else if (kind in pet.daily) {
    pet.daily[kind] += 1;
    pet.lifetime[kind] = (pet.lifetime[kind] || 0) + 1;
  }
  const complete = DAILY_GOALS.every((goal) => {
    const value = goal.id === "feed" ? pet.daily.foods.length : pet.daily[goal.id];
    return value >= goal.target;
  });
  if (complete && !pet.daily.rewarded) {
    pet.daily.rewarded = true;
    pet.coins += 6;
    addActivity("milestone", "完成今天的照護目標，獲得 6 枚海豹幣", "🏅");
    showNotice("今日照護目標完成！海豹幣＋6", "success");
  }
  checkAchievements(true);
}

function vibrate(pattern) {
  if (pet.vibrationOn) navigator.vibrate?.(pattern);
}
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
  let remainingHours = Math.min(elapsed / HOUR, 120);
  let simulatedAt = now - remainingHours * HOUR;
  const decayTowardFloor = (value, floor, rate, hours) => value <= floor
    ? value
    : floor + (value - floor) * Math.exp(-rate * hours);
  const dietVariety = new Set(pet.recentFoods.slice(-4)).size;
  const restCheckpoint = Number(pet.lastRestAt) > 0 ? Number(pet.lastRestAt) : pet.lastStatAt;
  const cleanCheckpoint = Number(pet.lastCleanAt) > 0 ? Number(pet.lastCleanAt) : pet.lastStatAt;
  while (remainingHours > 0) {
    const stepHours = Math.min(1, remainingHours);
    simulatedAt += stepHours * HOUR;
    pet.satiety = clamp(decayTowardFloor(pet.satiety, 16, 0.018, stepHours));
    pet.affection = clamp(pet.affection - 0.064 * stepHours);
    pet.waterQuality = clamp(decayTowardFloor(pet.waterQuality, 30, 0.0025, stepHours));
    pet.interactionFatigue = clamp(pet.interactionFatigue - 120 * stepHours);
    const stableHabitat = pet.satiety >= 25 && pet.waterQuality >= 40;
    const energyTarget = stableHabitat ? 84 : 25;
    const energyRate = stableHabitat ? 0.08 : 0.045;
    pet.energy = clamp(energyTarget + (pet.energy - energyTarget) * Math.exp(-energyRate * stepHours));
    const healthRisk =
      (pet.satiety < 20 ? 0.5 : 0) +
      (pet.waterQuality < 35 ? 0.6 : 0) +
      (pet.energy < 20 ? 0.35 : 0) +
      (simulatedAt - restCheckpoint > 18 * HOUR ? 0.03 : 0) +
      (simulatedAt - cleanCheckpoint > 24 * HOUR ? 0.04 : 0) +
      (dietVariety < 2 ? 0.08 : 0);
    pet.health = clamp(pet.health + (healthRisk ? -healthRisk : 0.04) * stepHours);
    if (pet.satiety < 20 || pet.health < 55) {
      pet.bodyCondition = clamp(pet.bodyCondition - 0.02 * stepHours);
    } else if (pet.satiety >= 35 && pet.health >= 75 && pet.waterQuality >= 60) {
      pet.bodyCondition = clamp(pet.bodyCondition + 0.012 * stepHours);
    }
    remainingHours -= stepHours;
  }
  pet.lastStatAt = now;
  if (pet.health <= 0) {
    pet.dead = true;
    pet.carePauseReason = "clinic";
  } else if (now - pet.lastFedAt >= FIVE_DAYS) {
    pet.dead = true;
    pet.carePauseReason = "substitute";
  }
}

function recoverFromCarePause(now = Date.now()) {
  const reason = pet.carePauseReason === "substitute" ? "substitute" : "clinic";
  pet.dead = false;
  pet.carePauseReason = "";
  pet.satiety = Math.max(pet.satiety, 45);
  pet.energy = Math.max(pet.energy, 65);
  pet.waterQuality = Math.max(pet.waterQuality, 75);
  pet.health = Math.max(pet.health, 70);
  pet.lastFedAt = now;
  pet.lastSeenAt = now;
  pet.lastStatAt = now;
  pet.lastCoinAt = now;
  pet.lastRestAt = now;
  pet.lastCleanAt = now;
  pet.currentHealthEvent = "";
  pet.diagnosedHealthEvent = "";
  addActivity(
    "health",
    reason === "substitute" ? "代班照護完成，平安回到熟悉的泳池" : "完成獸醫評估，回到泳池繼續休養",
    reason === "substitute" ? "🤝" : "🩺",
  );
  return reason;
}

function collectOfflineCoins(now = Date.now()) {
  const savedCheckpoint = Number(pet.lastCoinAt) > 0 ? Number(pet.lastCoinAt) : Number(pet.lastSeenAt) || now;
  const lastCoinAt = Math.min(now, Math.max(0, savedCheckpoint));
  const remainder = Math.max(0, Number(pet.offlineRemainderMs) || 0) % COIN_INTERVAL;
  const total = Math.max(0, now - lastCoinAt) + remainder;
  const earned = Math.floor(total / COIN_INTERVAL);
  pet.offlineRemainderMs = total % COIN_INTERVAL;
  pet.lastCoinAt = now;
  pet.coins += earned;
  return earned;
}

const nowAtLoad = Date.now();
const elapsedAway = Math.max(0, nowAtLoad - pet.lastSeenAt);
const starterGift = !saveWriteProtected && pet.starterCoinsGranted !== 1;
let offlineCoins = 0;
if (!saveWriteProtected) {
  applyElapsedStats(nowAtLoad);
  offlineCoins = collectOfflineCoins(nowAtLoad);
  if (starterGift) {
    pet.coins = Math.max(11, pet.coins);
    pet.starterCoinsGranted = 1;
  }
  pet.lastSeenAt = nowAtLoad;
  pet.lastStatAt = nowAtLoad;
  if (nowAtLoad - pet.lastFedAt >= FIVE_DAYS && !pet.dead) {
    pet.dead = true;
    pet.carePauseReason = "substitute";
  }
}
if (PREVIEW_DEAD) {
  pet.satiety = 0;
  pet.affection = 0;
  pet.energy = 0;
  pet.waterQuality = 0;
  pet.health = 0;
  pet.dead = true;
  pet.carePauseReason = "clinic";
}
if (!pet.activityLog.length && !PREVIEW_DEAD && !saveWriteProtected) {
  addActivity("milestone", "開始一起生活的第一天", "🏡");
}

function safeSave() {
  if (PREVIEW_DEAD) return;
  if (!storageAvailable) {
    warnStorageUnavailable();
    return;
  }
  if (saveWriteProtected || tabReadOnly) return;
  const saveTime = Date.now();
  if (tabOwnershipMode === "lease" && !renewTabLease(saveTime)) {
    if (storageAvailable) {
      tabOwnershipMode = "none";
      tabReadOnly = true;
      queueLeaseTakeover();
      syncInteractionState();
    }
    return;
  }
  pet.lastSeenAt = saveTime;
  if (!document.hidden) pet.lastCoinAt = saveTime;
  pet.updatedAt = Math.max(saveTime, Number(pet.updatedAt) + 1 || 0);
  pet.schemaVersion = SAVE_SCHEMA_VERSION;
  try {
    const nextValue = JSON.stringify(pet);
    const currentValue = localStorage.getItem(SAVE_KEY);
    if (hasFutureSchema(decodeSavedPet(currentValue))) {
      protectFutureSave();
      return;
    }
    if (parseSavedPet(currentValue)) localStorage.setItem(SAVE_BACKUP_KEY, currentValue);
    localStorage.setItem(SAVE_KEY, nextValue);
  } catch {
    storageAvailable = false;
    warnStorageUnavailable();
  }
}

function stageForBodyCondition(bodyCondition) {
  return bodyCondition < 20 ? 1 : bodyCondition < 40 ? 2 : bodyCondition < 70 ? 3 : bodyCondition < 90 ? 4 : 5;
}

function stageForSatiety(value) {
  return stageForBodyCondition(value);
}

function stage() {
  return stageForBodyCondition(pet.bodyCondition);
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
  if (pet.dead) return pet.carePauseReason === "substitute" ? "代班照護員正在安全照顧牠" : "正在接受專業獸醫照護";
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

function visibleEmotion() {
  if (pet.interactionFatigue >= 75) return "overwhelmed";
  if (pet.energy < 30) return "sleepy";
  if (pet.satiety < 30) return "expecting";
  if (pet.affection >= 75) return "happy";
  if (pet.affection < 30) return "shy";
  return "calm";
}

function interactionAffectionGain(baseGain) {
  const multiplier = Math.max(0.35, 1 - pet.interactionFatigue / 130);
  return Math.max(1, Math.round(baseGain * multiplier));
}

function interactionRestCue() {
  return pet.interactionFatigue >= 70 ? "；牠的回應變輕了，想慢慢休息" : "";
}

function dayPhase(stamp = Date.now()) {
  const hour = new Date(stamp).getHours();
  if (hour < 6) return { id: "night", icon: "🌙", label: "深夜休息" };
  if (hour < 11) return { id: "morning", icon: "🌤️", label: "早晨活動" };
  if (hour < 17) return { id: "day", icon: "☀️", label: "白日探索" };
  if (hour < 20) return { id: "evening", icon: "🌅", label: "傍晚放鬆" };
  return { id: "night", icon: "🌙", label: "夜間休息" };
}

function chooseAutonomousBehavior() {
  const phase = dayPhase();
  const profile = personalityProfile();
  if (pet.energy < 28 || phase.id === "night" || profile.id === "sleepy" && Math.random() < 0.5) {
    return { id: "rest", asset: "sleep", icon: "💤", line: `${pet.name} 自己爬上岩台休息了`, duration: 6200 };
  }
  if (pet.satiety < 25 || profile.id === "foodie" && Math.random() < 0.45) {
    return { id: "forage", asset: "sniff", icon: "🐟", line: "牠正在水邊嗅聞，尋找熟悉的食物氣味", duration: 4200 };
  }
  if (pet.active.length && (profile.id === "curious" || Math.random() < 0.45)) {
    return { id: "explore", asset: "sniff", icon: "✨", line: "牠主動靠近泳池玩具研究了一會兒", duration: 4400 };
  }
  if (pet.affection > 55 && (profile.id === "gentle" || Math.random() < 0.5)) {
    return { id: "approach", asset: "approach", icon: "🤍", line: "牠認出你了，主動游過來靠近", duration: 4000 };
  }
  return { id: "swim", asset: "swim", icon: "💧", line: `${pet.name} 正在泳池裡自主巡游`, duration: 4300 };
}

function runAutonomousBehavior() {
  if (document.hidden || actionActive || interactionLock || tabReadOnly || saveWriteProtected || mode !== "home" || pet.dead) return;
  const behavior = chooseAutonomousBehavior();
  autonomousMood = behavior.id;
  autonomousUntil = Date.now() + behavior.duration;
  $("speech").textContent = behavior.line;
  react("pet", behavior.icon, "autonomous", behavior.asset, `auto-${behavior.id}`);
  if (behavior.id === "swim") sound("water");
  setTimeout(() => {
    if (Date.now() >= autonomousUntil) autonomousMood = "idle";
  }, behavior.duration + 50);
}

function preloadImage(url) {
  if (spriteCache.has(url)) return spriteCache.get(url);
  const image = new Image();
  const request = new Promise((resolve) => {
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
  const retriableRequest = request.then((loaded) => {
    if (!loaded && spriteCache.get(url) === retriableRequest) spriteCache.delete(url);
    return loaded;
  });
  spriteCache.set(url, retriableRequest);
  return retriableRequest;
}

async function preloadStage(stageNumber, onAssetLoaded = null) {
  if (stageNumber < 1 || stageNumber > 5) return false;
  if (preloaded.has(stageNumber)) return true;
  const results = await preloadStageActions(stageNumber, Object.keys(SPRITE_ASSETS[stageNumber]), onAssetLoaded);
  if (results.every(Boolean)) preloaded.add(stageNumber);
  return results.every(Boolean);
}

async function preloadStageActions(stageNumber, actions, onAssetLoaded = null) {
  if (stageNumber < 1 || stageNumber > 5) return [];
  return Promise.all(
    actions.map(async (action) => {
      const url = SPRITE_ASSETS[stageNumber][action];
      const loaded = await preloadImage(`${url}?v=${ASSET_VERSION}`);
      onAssetLoaded?.();
      return loaded;
    }),
  );
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
  const current = stage();
  const baseUrls = [
    `${poolBackground}?v=${ASSET_VERSION}`,
    `${doflamingoRing}?v=${ASSET_VERSION}`,
  ];
  const total = baseUrls.length + Object.keys(SPRITE_ASSETS[current]).length;
  let completed = 0;
  let allLoaded = true;
  const markComplete = () => {
    completed += 1;
    updateLoadingProgress(completed, total);
  };
  updateLoadingProgress(0, total);
  const baseRequest = Promise.all(
    baseUrls.map(async (url) => {
      const loaded = await preloadImage(url);
      markComplete();
      return loaded;
    }),
  );
  const [baseResults, currentLoaded] = await Promise.all([
    baseRequest,
    preloadStage(current, markComplete),
  ]);
  allLoaded = baseResults.every(Boolean) && currentLoaded;
  if (document.fonts?.ready) await document.fonts.ready;
  updateLoadingProgress(total, total);
  return allLoaded;
}

function waitForIdle(timeout = 1400) {
  return new Promise((resolve) => {
    if ("requestIdleCallback" in window) window.requestIdleCallback(() => resolve(), { timeout });
    else setTimeout(resolve, 240);
  });
}

function backgroundPreloadAllowed() {
  return !document.hidden && !interactionLock && !actionActive && !ringDrag;
}

async function waitForBackgroundPreloadWindow() {
  while (true) {
    while (!backgroundPreloadAllowed()) {
      await new Promise((resolve) => setTimeout(resolve, 650));
    }
    await waitForIdle(900);
    if (backgroundPreloadAllowed()) return;
  }
}

async function preloadRemainingAssets() {
  if (navigator.connection?.saveData || navigator.deviceMemory && navigator.deviceMemory <= 2) return [];
  const current = stage();
  const remaining = [1, 2, 3, 4, 5]
    .filter((stageNumber) => !preloaded.has(stageNumber))
    .sort((a, b) => Math.abs(a - current) - Math.abs(b - current));
  const results = [];
  for (const stageNumber of remaining) {
    let allLoaded = true;
    for (const url of Object.values(SPRITE_ASSETS[stageNumber])) {
      await waitForBackgroundPreloadWindow();
      if (navigator.connection?.saveData) return results;
      const loaded = await preloadImage(`${url}?v=${ASSET_VERSION}`);
      allLoaded = loaded && allLoaded;
    }
    if (allLoaded) preloaded.add(stageNumber);
    results.push(allLoaded);
  }
  return results;
}

function scheduleBackgroundPreload() {
  const load = () => preloadRemainingAssets().catch(() => {});
  if ("requestIdleCallback" in window) window.requestIdleCallback(load, { timeout: 2600 });
  else setTimeout(load, 900);
}

function shouldUseRealtime3D() {
  if (FORCE_SPRITE_FALLBACK) return false;
  if (FORCE_REALTIME_3D) return true;
  if (preloadDisabled()) return false;
  if (prefersReducedMotion()) return false;
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

function renderLifeStrip() {
  const phase = dayPhase();
  const profile = personalityProfile();
  $("seal-name-title").textContent = pet.name;
  $("phase-icon").textContent = phase.icon;
  $("phase-label").textContent = phase.label;
  $("personality-icon").textContent = profile.icon;
  $("personality-label").textContent = profile.name;
  $("pool").dataset.phase = phase.id;
  $("pool").dataset.emotion = visibleEmotion();
}

function observationSummary() {
  const diet = new Set(pet.recentFoods.slice(-4)).size;
  const parts = [
    pet.health >= 75 ? "呼吸與眼睛穩定" : pet.health >= 40 ? "建議持續觀察活動力" : "健康狀況需要優先處理",
    pet.waterQuality >= 70 ? "水質清澈" : pet.waterQuality >= 40 ? "水質接近維護線" : "水質不佳",
    diet >= 3 ? "飲食種類豐富" : diet >= 2 ? "飲食變化尚可" : "最近食物較單一",
    pet.energy >= 55 ? "休息量充足" : "需要更多上岸休息",
  ];
  return parts.join(" · ");
}

function memoryTimeLabel(stamp) {
  const timestamp = Number(stamp);
  if (!Number.isFinite(timestamp) || timestamp <= 0) return "共同生活紀錄";
  try {
    return formatLogTime(timestamp);
  } catch {
    return "共同生活紀錄";
  }
}

function renderCompanionHistoryCard() {
  const memories = pet.memories.slice(-3).reverse();
  const memoryCount = pet.memories.length;
  const achievementCount = pet.achievements.length;
  const memoryList = memories.length
    ? `<ul>${memories.map((memory) => `<li><span aria-hidden="true">${escapeAttribute(memory.icon || "🤍")}</span><div><strong>${escapeAttribute(memory.text || "一起度過了平靜的一天")}</strong><small>${escapeAttribute(memoryTimeLabel(memory.at))}</small></div></li>`).join("")}</ul>`
    : '<p class="history-empty">第一段共同回憶，會從你們的陪伴與照護開始。</p>';
  return `<details class="companion-history-card" data-companion-history ${companionHistoryOpen ? "open" : ""}><summary><span><small>共同回憶</small><strong>${memoryCount} 則回憶 · ${achievementCount}／${ACHIEVEMENTS.length} 個成就</strong></span><b aria-hidden="true">⌄</b></summary><div class="companion-history-content">${memoryList}</div></details>`;
}

function renderObservationCard() {
  return `<section class="observation-card" aria-label="本次專業觀察"><span aria-hidden="true">🔎</span><div><small>本次專業觀察</small><p>${escapeAttribute(observationSummary())}</p><b>依日常紀錄整理，若有異常仍應由獸醫評估。</b></div></section>`;
}

function formatLogTime(stamp) {
  return new Intl.DateTimeFormat("zh-TW", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(stamp);
}

function escapeAttribute(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function normalizeName(value) {
  return String(value || "").trim().replace(/[<>&"]/g, "").slice(0, 12) || "Mogu";
}

const MODAL_FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function modalFocusables(modal) {
  return [...modal.querySelectorAll(MODAL_FOCUSABLE_SELECTOR)].filter((element) => !element.hidden);
}

function setModalBackgroundInert(inert) {
  const app = document.querySelector(".pet-app");
  const loader = $("app-loader");
  if (app) app.inert = inert;
  if (loader) loader.inert = inert;
  document.body.classList.toggle("modal-open", inert);
}

function focusElement(element) {
  if (!element?.focus) return;
  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
  }
}

function openModal(modal, initialFocus) {
  if (!modal) return;
  if (!activeModal) modalRestoreFocus = document.activeElement;
  else if (activeModal !== modal) activeModal.hidden = true;
  activeModal = modal;
  modal.hidden = false;
  setModalBackgroundInert(true);
  cancelAnimationFrame(modalFocusFrame);
  modalFocusFrame = requestAnimationFrame(() => {
    if (activeModal !== modal) return;
    const target = initialFocus && !initialFocus.disabled
      ? initialFocus
      : modalFocusables(modal)[0] || modal;
    focusElement(target);
  });
}

function closeModal(modal, restoreFocus = true) {
  if (!modal) return;
  modal.hidden = true;
  if (activeModal !== modal) return;
  cancelAnimationFrame(modalFocusFrame);
  activeModal = null;
  setModalBackgroundInert(false);
  const previousFocus = modalRestoreFocus;
  modalRestoreFocus = null;
  if (!restoreFocus) return;
  requestAnimationFrame(() => {
    if (activeModal) return;
    const semanticFallback = modal === $("profile-overlay")
      ? document.querySelector("[data-edit-profile]")
      : null;
    const fallback = semanticFallback
      || document.querySelector('.bottom-nav button[aria-pressed="true"]')
      || $("seal");
    const previousIsAvailable = previousFocus?.isConnected
      && !previousFocus.disabled
      && !previousFocus.closest?.("[hidden], [inert]");
    focusElement(previousIsAvailable ? previousFocus : fallback);
  });
}

function openProfileDialog(cancelable = false) {
  profileEditCancelable = cancelable;
  $("profile-name").value = pet.name;
  $("profile-birthday").value = pet.birthday;
  $("profile-cancel").hidden = !cancelable;
  $("profile-title").textContent = cancelable ? "修改海豹資料" : "牠要叫什麼名字？";
  $("profile-submit").textContent = cancelable ? "儲存資料" : "開始一起生活";
  openModal($("profile-overlay"), $("profile-name"));
}

function closeProfileDialog() {
  if (activeModal !== $("profile-overlay")) return;
  profileEditCancelable = false;
  closeModal($("profile-overlay"));
}

function syncDeadDialog() {
  const modal = $("dead-overlay");
  if (pet.dead) {
    const substituteCare = pet.carePauseReason === "substitute";
    $("care-pause-icon").textContent = substituteCare ? "🤝" : "🚑";
    $("care-pause-label").textContent = substituteCare ? "代班照護員已接手" : "專業獸醫已接手";
    $("dead-title").textContent = substituteCare ? `${pet.name} 正在安全休息` : `${pet.name} 正在接受健康評估`;
    $("care-pause-copy").textContent = substituteCare
      ? "你離開較久時，代班照護員已維持餵食、水質與休息。名字、共同回憶、成就與收藏都完整保留。"
      : "獸醫已先穩定健康狀態。名字、共同回憶、成就與收藏都完整保留，可以繼續原本的生活。";
    $("adopt").textContent = substituteCare ? "謝謝代班，接牠回泳池" : "完成評估，接牠回泳池";
    if (activeModal !== modal) openModal(modal, $("adopt"));
  } else if (activeModal === modal) {
    closeModal(modal);
  } else {
    modal.hidden = true;
  }
}

function handleModalKeydown(event) {
  if (!activeModal) return;
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    if (activeModal === $("profile-overlay") && profileEditCancelable) closeProfileDialog();
    return;
  }
  if (event.key !== "Tab") return;
  const focusables = modalFocusables(activeModal);
  if (!focusables.length) {
    event.preventDefault();
    focusElement(activeModal);
    return;
  }
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const focusedInside = activeModal.contains(document.activeElement);
  if (event.shiftKey && (!focusedInside || document.activeElement === first)) {
    event.preventDefault();
    focusElement(last);
  } else if (!event.shiftKey && (!focusedInside || document.activeElement === last)) {
    event.preventDefault();
    focusElement(first);
  }
}

function saveIdentity(name, birthday = "") {
  const wasComplete = pet.profileComplete;
  pet.name = normalizeName(name);
  const validBirthday = /^\d{4}-\d{2}-\d{2}$/.test(birthday) && birthday <= localDayKey();
  pet.birthday = validBirthday ? birthday : "";
  pet.profileComplete = true;
  if (!wasComplete) addActivity("milestone", `${pet.name} 正式加入泳池`, "🏡");
  checkAchievements();
  drawerKey = "";
  render(true, true);
}

function saveProfileFromJournal() {
  saveIdentity($("journal-name")?.value, $("journal-birthday")?.value);
  showNotice("海豹身分已更新", "success");
}

function exportSave() {
  safeSave();
  const payload = { app: "MOGU MOGU", schemaVersion: SAVE_SCHEMA_VERSION, exportedAt: new Date().toISOString(), pet };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mogu-mogu-${localDayKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showNotice("完整照護備份已下載", "success");
}

async function importSave(event) {
  const file = event.target.files?.[0];
  if (!file || file.size > 2_000_000) {
    showNotice("備份檔案無法讀取", "warning");
    return;
  }
  try {
    const payload = JSON.parse(await file.text());
    if (payload?.app !== "MOGU MOGU" || !payload.pet || typeof payload.pet !== "object") throw new Error("invalid");
    const migrated = migrateSave(payload.pet);
    if (!migrated || Number(payload.schemaVersion ?? payload.version ?? 1) > SAVE_SCHEMA_VERSION) throw new Error("unsupported");
    const incoming = normalizePet(migrated);
    await preloadStage(stageForBodyCondition(incoming.bodyCondition));
    pet = incoming;
    saveWriteProtected = false;
    currentStage = 0;
    drawerKey = "";
    decorKey = "";
    addActivity("milestone", "從備份恢復完整照護紀錄", "📥");
    render(true, true);
    showNotice("備份已安全恢復", "success");
  } catch {
    showNotice("這不是有效的 MOGU MOGU 備份", "warning");
  } finally {
    event.target.value = "";
  }
}

function poolToyCoolingDown(toyId, now = Date.now()) {
  const availableAt = toyId === "ring" ? ringInteractionAvailableAt : poolToyInteractionAvailableAt[toyId] || 0;
  return now < availableAt;
}

function decorationStateKey(now = Date.now()) {
  return `${pet.active.join("|")}:${DECOR.map((item) => Number(poolToyCoolingDown(item.id, now))).join("")}`;
}

function renderDecorations() {
  const now = Date.now();
  const nextKey = decorationStateKey(now);
  if (nextKey === decorKey) return;
  const focusedDecoration = document.activeElement?.closest?.("#decorations [data-pool-toy], #decorations [data-pool-feature]");
  if (decorationFocusRestore && document.activeElement !== document.body && !focusedDecoration) decorationFocusRestore = null;
  const focusCandidate = focusedDecoration || decorationFocusRestore;
  const focusedKind = focusCandidate?.dataset.poolToy ? "poolToy" : focusCandidate?.dataset.poolFeature ? "poolFeature" : "";
  const focusedId = focusedKind ? focusCandidate.dataset[focusedKind] : "";
  decorKey = nextKey;
  $("decorations").innerHTML = DECOR.filter((item) => pet.active.includes(item.id))
    .map((item, index) => {
      const coolingDown = poolToyCoolingDown(item.id, now);
      if (item.id === "ring") {
        return `<button class="pool-decor ${item.className}${coolingDown ? " is-cooling-down" : ""}" data-pool-toy="ring" style="--decor-delay:-${index * 0.63}s" type="button" ${coolingDown ? "disabled" : ""} aria-label="${coolingDown ? "海豹正在休息，稍後再玩泳圈" : "拖曳泳圈給海豹，或按 Enter 一起玩"}"><img src="${doflamingoRing}?v=${ASSET_VERSION}" alt=""></button>`;
      }
      if (item.id === "ball" || item.id === "duck") {
        const action = item.id === "ball" ? "追海灘球" : "聞聞小鴨";
        return `<button class="pool-decor ${item.className}${coolingDown ? " is-cooling-down" : ""}" data-pool-toy="${item.id}" style="--decor-delay:-${index * 0.63}s" type="button" ${coolingDown ? "disabled" : ""} aria-label="${coolingDown ? `${item.name}正在冷卻，稍後再玩` : `點一下或拖到海豹身上，讓牠${action}`}"><span aria-hidden="true">${item.icon}</span></button>`;
      }
      const reaction = POOL_FEATURE_REACTIONS[item.id];
      return `<button class="pool-decor pool-feature ${item.className}${coolingDown ? " is-cooling-down" : ""}" data-pool-feature="${item.id}" style="--decor-delay:-${index * 0.63}s" type="button" ${coolingDown ? "disabled" : ""} aria-label="${coolingDown ? `${item.name}正在冷卻，稍後再互動` : `點一下${item.name}，${reaction.instruction}`}"><span aria-hidden="true">${item.icon}</span></button>`;
    })
    .join("");
  if (focusedId) {
    const attribute = focusedKind === "poolToy" ? "data-pool-toy" : "data-pool-feature";
    const replacement = $("decorations").querySelector(`[${attribute}="${focusedId}"]:not(:disabled)`);
    if (replacement) {
      decorationFocusRestore = null;
      requestAnimationFrame(() => focusElement(replacement));
    }
  }
}

function scheduleDecorationRefresh(delay = 0) {
  const refreshWhenIdle = () => {
    if (ringDrag || poolToyDrag || interactionLock || actionActive) {
      setTimeout(refreshWhenIdle, 150);
      return;
    }
    decorKey = "";
    renderDecorations();
    syncInteractionState();
  };
  setTimeout(refreshWhenIdle, delay);
}

function renderSeal() {
  const nextStage = visualStageLock || stage();
  const roamer = $("seal-roamer");
  if (currentStage && currentStage !== nextStage) {
    addActivity("milestone", `體態進入「${STAGE_LABELS[nextStage]}」階段`, "📷");
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
  if (!actionActive) {
    $("seal-action-sprite").style.backgroundImage = `url("${spriteAsset(nextStage, "pet")}")`;
    $("seal-action-sprite").dataset.asset = `${nextStage}:pet`;
  }
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

function dailyGoalValue(goal) {
  if (goal.id === "feed") return pet.daily.foods.length;
  return Math.max(0, Number(pet.daily[goal.id]) || 0);
}

function renderCareProgressCard() {
  const goals = DAILY_GOALS.map((goal) => ({ ...goal, value: dailyGoalValue(goal) }));
  const completed = goals.filter((goal) => goal.value >= goal.target).length;
  const latest = pet.activityLog.at(-1);
  const latestIcon = latest ? escapeAttribute(latest.icon || "•") : "🌊";
  const latestText = latest ? escapeAttribute(latest.text || "完成了一次照護紀錄") : "今天還沒有紀錄，先陪牠打個招呼吧。";
  return `<section class="care-progress-card" aria-label="今日進度與最近紀錄"><header><div><small>今日進度</small><h3>${completed}／${goals.length} 完成</h3></div><span class="${completed === goals.length ? "is-complete" : ""}">${completed === goals.length ? "全部完成 ✓" : "慢慢照顧就好"}</span></header><ul>${goals.map((goal) => {
    const done = goal.value >= goal.target;
    return `<li class="${done ? "is-done" : ""}"><span aria-hidden="true">${goal.icon}</span><div><strong>${goal.label}</strong><small>${Math.min(goal.value, goal.target)}／${goal.target} ${done ? "完成" : "進行中"}</small></div><b aria-hidden="true">${done ? "✓" : "○"}</b></li>`;
  }).join("")}</ul><div class="latest-care-activity"><small>最近紀錄</small><p><span aria-hidden="true">${latestIcon}</span>${latestText}</p></div></section>`;
}

function drawerFocusToken(element, drawer) {
  if (!lastInputWasKeyboard || !element || !drawer.contains(element)) return null;
  if (element.matches?.("[data-edit-profile]")) return { key: "editProfile", value: "true" };
  if (element.matches?.("[data-companion-history] > summary")) return { key: "companionHistory", value: "true" };
  const key = ["food", "companion", "moment", "decor", "care", "setting"].find((name) =>
    Object.hasOwn(element.dataset || {}, name),
  );
  return key ? { key, value: element.dataset[key] } : null;
}

function restoreDrawerFocus(drawer, token) {
  if (!token) return;
  requestAnimationFrame(() => {
    if (activeModal || mode === "home") return;
    const buttons = [...drawer.querySelectorAll("button")];
    const matching = token.key === "editProfile"
      ? drawer.querySelector("[data-edit-profile]")
      : token.key === "companionHistory"
        ? drawer.querySelector("[data-companion-history] > summary")
        : buttons.find((button) => button.dataset?.[token.key] === token.value);
    const target = matching && !matching.disabled
      ? matching
      : buttons.find((button) => !button.disabled);
    focusElement(target || drawer);
  });
}

function renderDrawer(force = false) {
  if (!tabReadOnly && !saveWriteProtected) ensureCurrentDay();
  const key = `${mode}:${pet.owned.join(",")}:${pet.active.join(",")}:${Math.floor(pet.coins)}:${Math.floor(Date.now() / 60000)}:${Math.round(pet.energy)}:${Math.round(pet.health)}:${Math.round(pet.waterQuality)}:${pet.activityLog.at(-1)?.id || ""}:${pet.memories.at(-1)?.id || ""}:${pet.achievements.length}:${JSON.stringify(pet.daily)}:${pet.soundOn}:${pet.vibrationOn}`;
  if (!force && key === drawerKey) return;
  drawerKey = key;
  const drawer = $("drawer");
  const focusToken = drawerFocusToken(document.activeElement, drawer);
  drawer.classList.toggle("closed", mode === "home");
  if (mode === "home") {
    drawer.innerHTML = "";
    drawer.removeAttribute("aria-label");
    return;
  }
  const drawerLabels = { pet: "陪伴互動", feed: "餵食選單", care: "日常照護", shop: "泳池小屋" };
  drawer.setAttribute("aria-label", drawerLabels[mode] || "互動選單");
  if (mode === "pet") {
    const moment = DAILY_MOMENTS.find((item) => item.id === pet.dailyMoment?.id);
    const momentCard = moment && !pet.dailyMoment.choice && pet.onboardingStep >= 4 ? `<section class="daily-moment"><small>今天的 ${escapeAttribute(pet.name)}</small><strong>${moment.prompt}</strong><div>${moment.choices.map((choice) => `<button data-moment="${choice.id}" type="button"><span aria-hidden="true">${choice.icon}</span>${choice.label}</button>`).join("")}</div></section>` : "";
    const remembered = favoriteInteraction();
    drawer.innerHTML = `${momentCard}<div class="drawer-title companion-title"><div><small>和 ${escapeAttribute(pet.name)} 相處</small><h2>牠會回應你的陪伴</h2>${remembered ? `<p class="remembered-line">牠記得你常常會「${remembered}」</p>` : ""}</div><button class="profile-edit" data-edit-profile type="button">改名字</button></div><p class="companion-hint">也可以直接點海豹，或在牠身上輕輕來回撫摸。</p><div class="companion-grid"><button data-companion="call"><b aria-hidden="true">👋</b><span>呼喚牠</span><small>看看牠會不會靠近</small></button><button data-companion="splash"><b aria-hidden="true">💦</b><span>一起玩水</span><small>陪牠游一小圈</small></button><button data-companion="quiet"><b aria-hidden="true">🌙</b><span>安靜陪伴</span><small>在旁邊休息一下</small></button><button data-companion="wave"><b aria-hidden="true">🤍</b><span>打招呼</span><small>讓牠熟悉你的聲音</small></button></div>${renderCompanionHistoryCard()}<button class="vibration-setting" data-setting="vibration" type="button">📳 互動震動：${pet.vibrationOn ? "開" : "關"}</button>`;
  }
  if (mode === "feed") {
    drawer.innerHTML =
      '<div class="drawer-title"><div><small>今天想吃什麼？</small><h2>選一份食物給海豹</h2></div><span>吃飽後牠會自己停下來</span></div><div class="food-grid">' +
      FOODS.map(
        (food, index) => `<button data-food="${index}" aria-label="餵小海豹吃${food.name}"><b aria-hidden="true">${food.icon}</b><span>${food.name}</span><small>${food.note}</small></button>`,
      ).join("") +
      '</div><p class="care-fact">輪替不同食物能讓營養更多元，也要留意食慾與體態。</p>';
  }
  if (mode === "care") {
    const now = Date.now();
    const progressCard = renderCareProgressCard();
    const observationCard = renderObservationCard();
    const healthEvent = pet.currentHealthEvent ? HEALTH_EVENTS[pet.currentHealthEvent] : null;
    const healthHint = pet.diagnosedHealthEvent === pet.currentHealthEvent
      ? healthEvent?.afterCheckHint
      : healthEvent?.hint;
    const healthCard = healthEvent
      ? `<section class="health-event" role="status"><span aria-hidden="true">${healthEvent.icon}</span><div><small>${pet.diagnosedHealthEvent === pet.currentHealthEvent ? "已完成檢查記錄" : "今天需要留意"}</small><h3>${healthEvent.title}</h3><p>${healthEvent.detail}</p><strong>${healthHint}</strong></div></section>`
      : "";
    drawer.innerHTML =
      progressCard + healthCard + observationCard + '<div class="drawer-title"><div><small>日常照護</small><h2>讓牠舒服又健康</h2></div><span>體力 ' +
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
      '<div class="drawer-title"><div><small>泳池小屋</small><h2>佈置舒服的家</h2></div><span>離線每滿 6 小時獲得 1 幣</span></div><div class="shop-grid">' +
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
  drawer.querySelectorAll("[data-companion]").forEach((button) => {
    button.onclick = () => performCompanion(button.dataset.companion);
  });
  drawer.querySelectorAll("[data-moment]").forEach((button) => {
    button.onclick = () => resolveDailyMoment(button.dataset.moment);
  });
  drawer.querySelectorAll("[data-decor]").forEach((button) => {
    button.onclick = () => buy(DECOR[Number(button.dataset.decor)]);
  });
  drawer.querySelectorAll("[data-care]").forEach((button) => {
    button.onclick = () => performCare(button.dataset.care);
  });
  drawer.querySelectorAll("[data-setting]").forEach((button) => {
    button.onclick = () => {
      if (button.dataset.setting === "sound") toggleSound();
      if (button.dataset.setting === "vibration") {
        pet.vibrationOn = !pet.vibrationOn;
        vibrate(12);
        showNotice(pet.vibrationOn ? "互動震動已開啟" : "互動震動已關閉");
        drawerKey = "";
        render(true, true);
      }
    };
  });
  drawer.querySelector("[data-companion-history]")?.addEventListener("toggle", (event) => {
    companionHistoryOpen = event.currentTarget.open;
  });
  drawer.querySelector("[data-edit-profile]")?.addEventListener("click", () => {
    openProfileDialog(true);
  });
  restoreDrawerFocus(drawer, focusToken);
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
  if (!tabReadOnly && !saveWriteProtected) {
    ensureCurrentDay();
    checkAchievements(true);
  }
  if (
    !FORCE_SPRITE_FALLBACK &&
    shouldUseRealtime3D() &&
    !threeState.ready &&
    window.__threeLoadFailed !== true
  ) {
    ensureThreeReady();
  }
  renderStats();
  renderLifeStrip();
  renderSeal();
  renderDecorations();
  $("speech").textContent = mood();
  $("pool").className = `pool-scene mode-${mode} auto-${autonomousMood}${document.hidden ? " is-paused" : ""}`;
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-expanded", String(active));
  });
  syncDeadDialog();
  renderDrawer(forceDrawer);
  renderOnboarding();
  syncInteractionState();
  syncThreeModeVisuals();
  updateSoundButton();
  if (persist) safeSave();
}

function renderOnboarding() {
  const tip = $("onboarding-tip");
  const guides = {
    1: { mode: "pet", copy: `1／3　先陪 ${pet.name} 玩一下，點海豹或選一種陪伴方式` },
    2: { mode: "feed", copy: "2／3　選一份食物，看看牠怎麼咀嚼" },
    3: { mode: "care", copy: "3／3　完成一次日常照護，讓牠保持舒服" },
  };
  const guide = guides[pet.onboardingStep];
  tip.hidden = !guide;
  if (guide) $("onboarding-copy").textContent = guide.copy;
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.classList.toggle("is-guide-target", Boolean(guide && button.dataset.mode === guide.mode));
  });
}

function startOnboarding() {
  if (pet.onboardingStep !== 0) return;
  pet.onboardingStep = 1;
  mode = "pet";
  drawerKey = "";
  render(true, true);
  $("speech").textContent = `${pet.name} 正看著你，試著和牠打招呼吧`;
  react("pet", "👋", "guide", "approach", "notice-player");
}

function advanceOnboarding(completedStep) {
  if (pet.onboardingStep !== completedStep) return;
  pet.onboardingStep = Math.min(4, completedStep + 1);
  if (pet.onboardingStep === 2) mode = "feed";
  if (pet.onboardingStep === 3) mode = "care";
  drawerKey = "";
  render(true, true);
  if (pet.onboardingStep === 4) showNotice(`完成了！你已經知道怎麼照顧 ${pet.name}`, "success");
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

function setBusy(busy, token = 0) {
  if (busy) {
    interactionGeneration += 1;
    interactionLock = true;
    syncInteractionState();
    return interactionGeneration;
  }
  if (token && token !== interactionGeneration) return false;
  interactionLock = false;
  syncInteractionState();
  return true;
}

function syncInteractionState() {
  const readOnly = tabReadOnly || saveWriteProtected;
  const controlsBlocked = interactionLock || readOnly;
  $("seal").setAttribute("aria-busy", String(interactionLock));
  $("seal").setAttribute("aria-disabled", String(controlsBlocked));
  $("seal").disabled = readOnly;
  $("drawer").setAttribute("aria-busy", String(interactionLock));
  document.querySelector(".pet-app")?.classList.toggle("is-interacting", interactionLock);
  document.querySelector(".pet-app")?.classList.toggle("is-read-only", readOnly);
  ["sound-toggle", "onboarding-skip", "adopt"].forEach((id) => {
    const button = $(id);
    if (button) button.disabled = readOnly;
  });
  document.querySelectorAll("#drawer button, #decorations button, .bottom-nav button").forEach((button) => {
    if (ringDrag?.ring === button || poolToyDrag?.toy === button) return;
    if (controlsBlocked && !button.disabled) {
      button.disabled = true;
      button.dataset.busyDisabled = "true";
    } else if (!controlsBlocked && button.dataset.busyDisabled === "true") {
      button.disabled = false;
      delete button.dataset.busyDisabled;
    }
  });
}

function ensureAudio(startAmbient = false) {
  if (!pet.soundOn || document.hidden) return null;
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
  ambientLfo = audio.createOscillator();
  const lfoGain = audio.createGain();
  ambientLfo.frequency.value = 0.11;
  lfoGain.gain.value = 0.006;
  ambientLfo.connect(lfoGain).connect(ambientGain.gain);
  ambientSource.connect(filter).connect(ambientGain).connect(masterGain);
  ambientSource.start();
  ambientLfo.start();
}

function stopWaterAmbience() {
  try {
    ambientSource?.stop();
    ambientLfo?.stop();
  } catch {
    // Audio nodes may already have stopped during browser teardown.
  }
  ambientSource?.disconnect();
  ambientLfo?.disconnect();
  ambientSource = null;
  ambientLfo = null;
  ambientGain = null;
}

function suspendAudio() {
  if (!audio) return;
  const generation = ++audioVisibilityGeneration;
  if (audio.state !== "running") return;
  audio.suspend().then(() => {
    if (generation !== audioVisibilityGeneration && !document.hidden && pet.soundOn) resumeAudio();
  }).catch(() => {});
}

function resumeAudio() {
  if (!audio || !soundUnlocked || !pet.soundOn || document.hidden) return;
  const generation = ++audioVisibilityGeneration;
  const resumed = audio.state === "suspended" ? audio.resume() : Promise.resolve();
  resumed.then(() => {
    if (generation === audioVisibilityGeneration && !document.hidden && pet.soundOn) startWaterAmbience();
  }).catch(() => {});
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
  if (kind === "approach") {
    tone(290, now, 0.18, 0.026, "sine", 390);
    tone(470, now + 0.12, 0.24, 0.022, "triangle", 560);
  }
  if (kind === "haul") {
    noiseBurst(now, 0.24, 190, 0.035, 2.6);
    tone(125, now + 0.08, 0.34, 0.026, "sine", 88);
  }
  if (kind === "sleep") {
    tone(118, now, 0.52, 0.018, "sine", 92);
    tone(96, now + 0.42, 0.62, 0.014, "sine", 76);
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
  button.setAttribute("aria-label", "音效");
  button.setAttribute("aria-pressed", String(pet.soundOn));
  button.title = pet.soundOn ? "關閉音效" : "開啟音效";
}

function toggleSound() {
  if (tabReadOnly || saveWriteProtected) return;
  pet.soundOn = !pet.soundOn;
  if (pet.soundOn) {
    ensureAudio(true);
    resumeAudio();
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
    setTimeout(() => {
      if (!pet.soundOn || document.hidden) {
        stopWaterAmbience();
        suspendAudio();
      }
    }, 80);
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

function prefersReducedMotion() {
  return reducedMotion;
}

function sequenceTiming(motion, requestedMain) {
  if (prefersReducedMotion()) return { attention: 60, main: 120, settle: 100 };
  const attention = coarsePointer ? 520 : 620;
  const settle = coarsePointer ? 880 : 1050;
  if (motion === "haul") return { attention, main: 7200, settle };
  const mainLimit = motion === "auto-sleep"
    ? (coarsePointer ? 3200 : 3600)
    : (coarsePointer ? 2900 : 3400);
  return { attention, main: Math.min(requestedMain, mainLimit), settle };
}

function reactionDuration(kind, motion = "") {
  if (prefersReducedMotion()) {
    if (motion === "notice-player") return 60;
    if (motion === "settle-away") return 100;
    return motion === "haul" ? 180 : 120;
  }
  if (motion === "notice-player") return coarsePointer ? 520 : 620;
  if (motion === "settle-away") return coarsePointer ? 880 : 1050;
  if (motion === "haul") return 7200;
  if (motion === "auto-rest") return coarsePointer ? 4600 : 6200;
  if (motion === "auto-sleep") return coarsePointer ? 3200 : 3600;
  if (motion.startsWith("auto-")) return coarsePointer ? 2900 : 3400;
  if (kind === "eat") return coarsePointer ? 1250 : 1480;
  return coarsePointer ? 1000 : 1180;
}

function createWaterTransition(strength = "soft") {
  if (prefersReducedMotion()) return;
  const pool = $("pool");
  const seal = $("seal");
  if (!pool || !seal) return;
  pool.querySelector(".water-transition")?.remove();
  const poolRect = pool.getBoundingClientRect();
  const sealRect = seal.getBoundingClientRect();
  const splash = document.createElement("span");
  splash.className = `water-transition is-${strength}`;
  splash.style.left = `${sealRect.left - poolRect.left + sealRect.width * 0.5}px`;
  splash.style.top = `${sealRect.top - poolRect.top + sealRect.height * 0.78}px`;
  splash.setAttribute("aria-hidden", "true");
  pool.appendChild(splash);
  setTimeout(() => splash.remove(), 760);
}

function setActionSprite(asset) {
  const sprite = $("seal-action-sprite");
  const roamer = $("seal-roamer");
  const stageNumber = currentStage || stage();
  const key = `${stageNumber}:${asset}`;
  if (sprite.dataset.asset === key) return;
  const apply = () => {
    sprite.style.backgroundImage = `url("${spriteAsset(stageNumber, asset)}")`;
    sprite.dataset.asset = key;
  };
  clearTimeout(spriteSwapTimer);
  if (prefersReducedMotion() || !roamer.classList.contains("reacting")) {
    roamer.classList.remove("sprite-swapping");
    apply();
    return;
  }
  roamer.classList.add("sprite-swapping");
  spriteSwapTimer = setTimeout(() => {
    apply();
    requestAnimationFrame(() => roamer.classList.remove("sprite-swapping"));
  }, 100);
}

function react(kind, icon, zone = "", visualAsset = "", motion = "") {
  const seal = $("seal");
  const roamer = $("seal-roamer");
  const actionAsset = visualAsset || (kind === "eat" ? "eat" : "pet");
  roamer.classList.add("reacting");
  setActionSprite(actionAsset);
  if (kind === "eat") {
    $("seal-jaw-sprite").style.backgroundImage = `url("${spriteAsset(currentStage || stage(), "chew")}")`;
  }
  actionActive = kind;
  seal.dataset.motion = motion || zone || kind;
  seal.classList.remove("eat", "pet");
  void seal.offsetWidth;
  seal.classList.add(kind);
  roamer.classList.toggle("resting-on-rock", motion === "haul" || motion === "auto-rest");
  $("reaction-icon").dataset.kind = kind;
  $("reaction-icon").dataset.zone = zone || "";
  $("reaction-icon").hidden = false;
  createParticles(kind, icon);
  if (actionAsset === "swim" || motion === "clean" || motion === "fin" || motion.startsWith("feed-")) {
    createWaterTransition(motion === "clean" || motion === "auto-swim" ? "strong" : "soft");
  }
  clearTimeout(reactionTimer);
  const duration = reactionDuration(kind, motion);
  seal.style.animationDuration = `${duration}ms`;
  if (motion === "haul") {
    createWaterTransition("strong");
    setTimeout(() => {
      if (actionActive === kind && seal.dataset.motion === "haul") createWaterTransition("soft");
    }, Math.max(0, duration - 720));
  }
  reactionTimer = setTimeout(() => {
    $("reaction-icon").hidden = true;
    $("reaction-icon").dataset.zone = "";
    seal.classList.remove(kind);
    delete seal.dataset.motion;
    roamer.classList.remove("reacting");
    roamer.classList.remove("resting-on-rock");
    seal.style.removeProperty("animation-duration");
    actionActive = "";
  }, duration);
}

function playInteractionSequence({ icon, zone, asset, motion, onMain, onComplete, mainDuration = 1180 }) {
  if (interactionLock || pet.dead) return;
  clearTimeout(sequenceTimer);
  clearTimeout(settleTimer);
  const sequenceLock = setBusy(true);
  const timing = sequenceTiming(motion, mainDuration);
  $("speech").textContent = `${pet.name} ${pickVariant("sequence-attention", ATTENTION_LINES)}…`;
  react("pet", "•", "attention", "approach", "notice-player");
  sound("approach");
  sequenceTimer = setTimeout(() => {
    onMain?.();
    react("pet", icon, zone, asset, motion);
    settleTimer = setTimeout(() => {
      const settleOptions = pet.energy < 35
        ? [
            { line: `${pet.name} 安心地停在你身邊休息`, asset: "sleep", sound: "sleep" },
            { line: `${pet.name} 靠著池邊，慢慢閉上眼睛`, asset: "sleep", sound: "sleep" },
          ]
        : [
            { line: `${pet.name} 回到水裡，仍不時回頭看你`, asset: "swim", sound: "water" },
            { line: `${pet.name} 輕輕滑回池中，又繞回你附近`, asset: "swim", sound: "water" },
            { line: `${pet.name} 停在池邊多看了你一會兒`, asset: "approach", sound: "approach" },
          ];
      const settle = pickVariant(`settle-${zone}`, settleOptions);
      $("speech").textContent = settle.line;
      react("pet", "♡", "settle", settle.asset, "settle-away");
      sound(settle.sound);
      settleTimer = setTimeout(() => {
        if (setBusy(false, sequenceLock)) onComplete?.();
      }, timing.settle);
    }, timing.main);
  }, timing.attention);
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
  if (pet.dead || interactionLock || tabReadOnly || saveWriteProtected) return;
  if (pet.satiety >= 96) {
    showNotice("牠已經吃飽了，先觀察消化與活動狀況", "warning");
    addActivity("health", "吃飽後停止餵食，避免過量", "🩺");
    safeSave();
    return;
  }
  const satietyGain = 10;
  const feedingStage = currentStage || stage();
  const bodyConditionGain = pet.satiety < 80 ? 0.6 : 0.25;
  const targetStage = stageForBodyCondition(clamp(pet.bodyCondition + bodyConditionGain));
  const feedVisualGeneration = ++visualStageGeneration;
  visualStageLock = feedingStage;
  const targetStageReady = targetStage === feedingStage
    ? Promise.resolve(true)
    : preloadStageActions(targetStage, ["idle"]).then((results) => results.every(Boolean));
  const feedLock = setBusy(true);
  const feedCanCommit = () => feedLock === interactionGeneration
    && interactionLock
    && !pet.dead
    && !tabReadOnly
    && !saveWriteProtected;
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
  vibrate(8);
  showNotice(`牠看到${food.name}，正在靠近確認氣味…`);
  const delay = prefersReducedMotion() ? 60 : coarsePointer ? 400 : 480;
  if (delay > 100) setTimeout(() => {
    if (feedCanCommit()) showNotice(`咬住${food.name}，開始咀嚼…`);
  }, 330);
  setTimeout(() => {
    if (!feedCanCommit()) {
      if (feedVisualGeneration === visualStageGeneration) visualStageLock = 0;
      if (feedLock === interactionGeneration) {
        setBusy(false, feedLock);
        render(false, true);
      }
      return;
    }
    pet.satiety = clamp(pet.satiety + satietyGain);
    pet.bodyCondition = clamp(pet.bodyCondition + bodyConditionGain);
    pet.affection = clamp(pet.affection + 1 + (food.affection || 0));
    pet.health = clamp(pet.health + (food.health || 0));
    pet.energy = clamp(pet.energy + (food.energy || 0));
    pet.lastFedAt = Date.now();
    rememberInteraction("feed", `餵${food.name}`);
    pet.recentFoods = [...pet.recentFoods, food.name].slice(-6);
    updateDaily("feed", food.name);
    const variety = new Set(pet.recentFoods.slice(-4)).size;
    if (variety >= 3) pet.health = clamp(pet.health + 1);
    addActivity("feed", `吃了${food.name}${variety >= 3 ? "，近期飲食種類豐富" : ""}`, food.icon);
    showNotice(`${food.name}：${pickVariant(`feed-${food.id}`, FEED_LINES)}　＋${satietyGain}%`, "success");
    render(true, true);
    if (threeState.ready) {
      threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.27, 0.2);
    }
    react("eat", food.icon, food.sound, "eat", `feed-${food.sound}`);
    sound("eat", food.sound);
    vibrate([10, 35, 9]);
    setTimeout(() => {
      const revealUpdatedStage = () => {
        if (feedVisualGeneration !== visualStageGeneration) return;
        visualStageLock = 0;
        render(true, true);
      };
      if (targetStage === feedingStage || preloaded.has(targetStage)) revealUpdatedStage();
      else targetStageReady.then(revealUpdatedStage);
      if (setBusy(false, feedLock)) advanceOnboarding(2);
    }, prefersReducedMotion() ? 120 : coarsePointer ? 1250 : 1500);
  }, delay);
}

function performCompanion(actionId) {
  if (pet.dead || interactionLock || tabReadOnly || saveWriteProtected) return;
  const actions = {
    call: { icon: "👋", asset: "approach", motion: "auto-approach", affection: 3, energy: -1, fatigue: 5, sound: "pet" },
    splash: { icon: "💦", asset: "swim", motion: "auto-swim", affection: 4, energy: -3, fatigue: 8, sound: "water" },
    quiet: { icon: "💤", asset: "sleep", motion: "auto-sleep", affection: 3, energy: 5, fatigue: -12, sound: "sleep" },
    wave: { icon: "🤍", asset: "pet", motion: "greet", affection: 2, energy: 0, fatigue: 4, sound: "pet" },
  };
  const action = actions[actionId];
  if (!action) return;
  const message = `${pet.name} ${pickVariant(`companion-${actionId}`, COMPANION_LINES[actionId])}`;
  playInteractionSequence({ icon: action.icon, zone: actionId, asset: action.asset, motion: action.motion, mainDuration: 4300, onComplete: () => advanceOnboarding(1), onMain: () => {
    pet.affection = clamp(pet.affection + interactionAffectionGain(action.affection));
    pet.energy = clamp(pet.energy + action.energy);
    pet.interactionFatigue = clamp(pet.interactionFatigue + action.fatigue);
    rememberInteraction(actionId, message);
    updateDaily("play");
    addActivity("play", message, action.icon);
    showNotice(`${message}${interactionRestCue()}`, "success");
    sound(action.sound, actionId);
    vibrate(actionId === "splash" ? [8, 28, 8] : 10);
    render(true, true);
  } });
}

function resolveDailyMoment(choiceId) {
  if (pet.dead || interactionLock || pet.dailyMoment?.choice) return;
  const moment = DAILY_MOMENTS.find((item) => item.id === pet.dailyMoment?.id);
  const choice = moment?.choices.find((item) => item.id === choiceId);
  if (!choice) return;
  playInteractionSequence({ icon: choice.icon, zone: choice.id, asset: choice.asset, motion: choice.motion, mainDuration: choice.motion === "haul" ? 7200 : 4300, onComplete: () => advanceOnboarding(1), onMain: () => {
    pet.dailyMoment.choice = choice.id;
    pet.affection = clamp(pet.affection + interactionAffectionGain(choice.affection));
    pet.energy = clamp(pet.energy + choice.energy);
    pet.interactionFatigue = clamp(pet.interactionFatigue + (choice.asset === "sleep" ? -10 : 5));
    rememberInteraction("moment", choice.reply);
    updateDaily("play");
    addActivity("play", choice.reply, choice.icon);
    showNotice(`${choice.reply}${interactionRestCue()}`, "success");
    sound(choice.asset === "swim" ? "water" : "pet", choice.id);
    vibrate(10);
    render(true, true);
  } });
}

function restockFood(foodId) {
  const food = FOODS.find((item) => item.id === foodId);
  if (!food) return;
  if (pet.coins < 3) {
    showNotice("海豹幣不足，完成每日目標或成就可獲得海豹幣", "warning");
    return;
  }
  pet.coins -= 3;
  pet.inventory[foodId] = (pet.inventory[foodId] || 0) + food.restock;
  addActivity("care", `補充 ${food.name} ${food.restock} 份`, "🧊");
  showNotice(`${food.name}已放入冷凍庫`, "success");
  sound("coin");
  drawerKey = "";
  render(true, true);
}

function careCooldown(action, now = Date.now()) {
  const lastDone = Number(pet.careLog?.[action.id]) || 0;
  return Math.max(0, action.cooldown - (now - lastDone));
}

function performCare(actionId) {
  if (pet.dead || interactionLock || tabReadOnly || saveWriteProtected) return;
  const action = CARE_ACTIONS.find((item) => item.id === actionId);
  if (!action || careCooldown(action)) return;
  const careLock = setBusy(true);
  const activeEvent = pet.currentHealthEvent ? HEALTH_EVENTS[pet.currentHealthEvent] : null;
  pet.careLog = { ...pet.careLog, [action.id]: Date.now() };
  let message = "";
  let reaction = "♥";
  if (action.id === "haul") {
    pet.energy = clamp(pet.energy + 24);
    pet.affection = clamp(pet.affection + 3);
    message = "牠在乾燥岩台上安心休息，體力恢復了";
    reaction = "💤";
    pet.lastRestAt = Date.now();
  }
  if (action.id === "clean") {
    pet.waterQuality = clamp(pet.waterQuality + 35);
    pet.health = clamp(pet.health + 3);
    message = "循環與過濾完成，泳池水質恢復清澈";
    reaction = "💧";
    pet.lastCleanAt = Date.now();
  }
  if (action.id === "enrich") {
    pet.affection = clamp(pet.affection + 8);
    pet.energy = clamp(pet.energy - 4);
    message = "牠用鬍鬚探索藏食冰塊，保持好奇心";
    reaction = "✦";
  }
  if (action.id === "check") {
    pet.affection = clamp(pet.affection + 1);
    if (activeEvent) {
      pet.diagnosedHealthEvent = pet.currentHealthEvent;
      message = `已記錄「${activeEvent.title}」的呼吸、眼睛、皮膚與活動力；這次檢查不會直接讓症狀消失`;
    } else {
      message = "呼吸、眼睛、皮膚與活動力都記錄完成";
    }
    reaction = "🩺";
  }
  const eventNeedsCheck = activeEvent?.requiresCheck
    && pet.diagnosedHealthEvent !== pet.currentHealthEvent;
  if (activeEvent && action.id !== "check" && activeEvent.treatment === action.id && !eventNeedsCheck) {
    message += `；「${activeEvent.title}」已完成正確處置並持續記錄`;
    pet.health = clamp(pet.health + 4);
    pet.currentHealthEvent = "";
    pet.diagnosedHealthEvent = "";
  } else if (activeEvent && action.id !== "check" && activeEvent.treatment === action.id) {
    message += `；處置前還需先完成「${activeEvent.title}」的健康檢查記錄`;
  } else if (activeEvent && action.id !== "check") {
    message += `；仍需處理「${activeEvent.title}」`;
  }
  updateDaily("care");
  addActivity(action.id === "check" ? "health" : "care", `${action.name}：${message}`, reaction);
  showNotice(message, "success");
  const careVisuals = {
    haul: { asset: "haul", motion: "haul" },
    clean: { asset: "swim", motion: "clean" },
    enrich: { asset: "sniff", motion: "enrich" },
    check: { asset: "approach", motion: "check" },
  };
  const careSounds = { haul: "haul", clean: "water", enrich: "approach", check: "pet" };
  sound(careSounds[action.id] || "pet", action.id === "clean" ? "fin" : "belly");
  vibrate(10);
  drawerKey = "";
  render(true, true);
  const careVisual = careVisuals[action.id];
  react("pet", reaction, action.id, careVisual.asset, careVisual.motion);
  setTimeout(() => {
    if (setBusy(false, careLock)) advanceOnboarding(3);
  }, reactionDuration("pet", careVisual.motion));
}

function addPetTrail(x, y) {
  const existingTrails = document.querySelectorAll(".pet-trail");
  if (existingTrails.length >= 8) existingTrails[0].remove();
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
  if (pet.dead || mode !== "pet" || interactionLock || tabReadOnly || saveWriteProtected || now - lastPetAt < 700) return;
  const safeZone = threeZoneRewards[zone] ? zone : "belly";
  const reward = threeZoneRewards[safeZone];
  const responseLine = pickVariant(`pet-${safeZone}`, PET_LINES[safeZone] || [reward.line]);
  lastPetAt = now;
  const petLock = setBusy(true);
  directPetLockToken = petLock;
  pet.affection = clamp(pet.affection + interactionAffectionGain(reward.affection));
  pet.interactionFatigue = clamp(pet.interactionFatigue + 10);
  rememberInteraction("pet", responseLine);
  updateDaily("play");
  if (threeState.ready) {
    const actionPose = reward.mode || THREE_POSE_STATES.PET;
    setThreeAction(actionPose, safeZone === "fin" ? 1160 : 920, safeZone, reward.expression);
    threeState.lastInteractionStamp = performance.now();
    if (safeZone === "fin") {
      threeState.wetness = THREE.MathUtils.lerp(threeState.wetness, 0.5, 0.12);
    }
  }
  threeState.lastInteractionStamp = performance.now();
  showNotice(`${responseLine}${interactionRestCue()}`, "success");
  render();
  const zoneVisual = {
    head: "•",
    cheek: "✦",
    belly: "♥",
    fin: "💧",
    poke: "⚡",
  };
  addActivity("play", responseLine, zoneVisual[safeZone] || "♥");
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
  vibrate(10);
  safeSave();
  setTimeout(() => {
    if (setBusy(false, petLock)) {
      if (directPetLockToken === petLock) directPetLockToken = 0;
      advanceOnboarding(1);
    }
  }, reactionDuration("pet", petVisual.motion));
}

function greetSeal() {
  if (pet.dead || interactionLock || actionActive || tabReadOnly || saveWriteProtected) return;
  const line = pickVariant("greet", IDLE_LINES);
  updateDaily("play");
  addActivity("play", "小海豹主動回應你的招呼", "♪");
  showNotice(line);
  react("pet", "♪", "greet", "walk", "greet");
  sound("pet");
  safeSave();
}

function buy(item) {
  if (interactionLock || tabReadOnly || saveWriteProtected) return;
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
    showNotice("海豹幣不夠，離線休息每滿六小時會獲得 1 枚～", "warning");
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

function switchMode(nextMode, focusDrawer = false) {
  if (interactionLock || tabReadOnly || saveWriteProtected) return;
  mode = mode === nextMode ? "home" : nextMode;
  threeState.lastInteractionStamp = performance.now();
  drawerKey = "";
  sound("select");
  render(true, true);
  if (mode !== "home") {
    requestAnimationFrame(() => {
      if (activeModal || mode === "home") return;
      const drawer = $("drawer");
      if (focusDrawer) focusElement(drawer);
      if (matchMedia("(max-width: 640px)").matches) {
        drawer.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest" });
      }
    });
  }
}

let pointerTracking = false;
let pointerTravel = 0;
let pointerLastX = 0;
let pointerLastY = 0;
let trailDistance = 0;
let gesturePetTriggered = false;
let pointerZone = "";
let suppressClick = false;
let ringDrag = null;
let poolToyDrag = null;
let activePetPointerId = null;

function poolToyTouchesSeal(toy) {
  const toyRect = toy.getBoundingClientRect();
  const sealRect = $("seal").getBoundingClientRect();
  const centerX = toyRect.left + toyRect.width / 2;
  const centerY = toyRect.top + toyRect.height / 2;
  return centerX >= sealRect.left + sealRect.width * 0.18 && centerX <= sealRect.right - sealRect.width * 0.18 && centerY >= sealRect.top + sealRect.height * 0.18 && centerY <= sealRect.bottom - sealRect.height * 0.12;
}

function ringTouchesSeal(ring) {
  return poolToyTouchesSeal(ring);
}

function returnRingToPool(ring) {
  ring.classList.remove("is-dragging");
  ring.classList.add("is-returning");
  ring.style.translate = "0px 0px";
  setTimeout(() => ring.classList.remove("is-returning", "is-playing"), 620);
}

const POOL_TOY_REACTIONS = {
  ball: {
    icon: "🏖️",
    asset: "swim",
    motion: "auto-swim",
    line: "追著海灘球游了一圈，又把球推回你面前",
    activity: "追著海灘球游了一圈",
    affection: 4,
    energy: -3,
    fatigue: 8,
    cooldown: 4500,
    sound: "water",
    soundDetail: "fin",
  },
  duck: {
    icon: "🦆",
    asset: "sniff",
    motion: "auto-explore",
    line: "慢慢靠近小鴨聞了聞，再用鼻尖輕輕碰一下",
    activity: "好奇地聞聞小鴨浮伴",
    affection: 3,
    energy: -1,
    fatigue: 5,
    cooldown: 3800,
    sound: "pet",
    soundDetail: "cheek",
  },
};

const POOL_FEATURE_REACTIONS = {
  plant: {
    icon: "🌴",
    asset: "sleep",
    motion: "auto-sleep",
    instruction: "陪海豹到樹影旁休息",
    line: "靠到椰子樹影旁，舒服地伸展身體",
    activity: "在椰子樹影旁放鬆休息",
    affection: 3,
    energy: 5,
    fatigue: -8,
    cooldown: 4200,
    sound: "sleep",
    soundDetail: "quiet",
  },
  light: {
    icon: "✨",
    asset: "swim",
    motion: "auto-swim",
    instruction: "陪海豹追逐水面倒影",
    line: "發現星星池燈的倒影，輕快地追著光游了一圈",
    activity: "追著星星池燈的倒影游泳",
    affection: 4,
    energy: -2,
    fatigue: 6,
    cooldown: 4400,
    sound: "water",
    soundDetail: "fin",
  },
  shell: {
    icon: "🐚",
    asset: "sniff",
    motion: "auto-explore",
    instruction: "讓海豹探索珍珠貝殼",
    line: "慢慢靠近珍珠貝殼，聞了聞再用鬍鬚輕碰一下",
    activity: "用鬍鬚探索珍珠貝殼",
    affection: 3,
    energy: -1,
    fatigue: 4,
    cooldown: 3900,
    sound: "pet",
    soundDetail: "cheek",
  },
};

function preserveDecorationKeyboardFocus(decoration) {
  if (!lastInputWasKeyboard || !decoration) return;
  decorationFocusRestore = {
    dataset: {
      poolToy: decoration.dataset.poolToy || "",
      poolFeature: decoration.dataset.poolFeature || "",
    },
  };
}

function returnPoolToyToWater(toy) {
  toy.classList.remove("is-dragging", "is-over-seal");
  toy.classList.add("is-returning");
  toy.style.translate = "0px 0px";
  setTimeout(() => toy.classList.remove("is-returning", "is-playing"), 620);
}

$("decorations").addEventListener("pointerdown", (event) => {
  const ring = event.target.closest('[data-pool-toy="ring"]');
  if (!event.isPrimary || ringDrag || poolToyDrag || !ring || pet.dead || interactionLock || actionActive || tabReadOnly || saveWriteProtected) return;
  if (Date.now() < ringInteractionAvailableAt) {
    showNotice("讓牠先休息一下，等等再玩泳圈", "warning");
    return;
  }
  ensureAudio(true);
  const poolRect = $("pool").getBoundingClientRect();
  const ringRect = ring.getBoundingClientRect();
  ringDrag = {
    ring,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    minX: poolRect.left - ringRect.left,
    maxX: poolRect.right - ringRect.right,
    minY: poolRect.top - ringRect.top,
    maxY: poolRect.bottom - ringRect.bottom,
    lockToken: 0,
  };
  ring.classList.remove("is-returning");
  ring.classList.add("is-dragging");
  ring.setPointerCapture?.(event.pointerId);
  ringDrag.lockToken = setBusy(true);
});

$("decorations").addEventListener("pointerdown", (event) => {
  const toy = event.target.closest('[data-pool-toy="ball"], [data-pool-toy="duck"]');
  if (!event.isPrimary || ringDrag || poolToyDrag || !toy || pet.dead || interactionLock || actionActive || tabReadOnly || saveWriteProtected) return;
  const toyId = toy.dataset.poolToy;
  if (poolToyCoolingDown(toyId)) {
    showNotice("讓牠先喘口氣，等等再玩這個玩具", "warning");
    return;
  }
  ensureAudio(true);
  const poolRect = $("pool").getBoundingClientRect();
  const toyRect = toy.getBoundingClientRect();
  poolToyDrag = {
    toy,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    minX: poolRect.left - toyRect.left,
    maxX: poolRect.right - toyRect.right,
    minY: poolRect.top - toyRect.top,
    maxY: poolRect.bottom - toyRect.bottom,
    lockToken: 0,
  };
  toy.classList.remove("is-returning");
  toy.classList.add("is-dragging");
  toy.setPointerCapture?.(event.pointerId);
  poolToyDrag.lockToken = setBusy(true);
  event.preventDefault();
});

$("decorations").addEventListener("pointermove", (event) => {
  if (!ringDrag || event.pointerId !== ringDrag.pointerId) return;
  const deltaX = event.clientX - ringDrag.startX;
  const deltaY = event.clientY - ringDrag.startY;
  if (Math.hypot(deltaX, deltaY) > 7) ringDrag.moved = true;
  const x = Math.min(ringDrag.maxX, Math.max(ringDrag.minX, deltaX));
  const y = Math.min(ringDrag.maxY, Math.max(ringDrag.minY, deltaY));
  ringDrag.ring.style.translate = `${x}px ${y}px`;
  ringDrag.ring.classList.toggle("is-over-seal", ringTouchesSeal(ringDrag.ring));
  event.preventDefault();
});

$("decorations").addEventListener("pointermove", (event) => {
  if (!poolToyDrag || event.pointerId !== poolToyDrag.pointerId) return;
  const deltaX = event.clientX - poolToyDrag.startX;
  const deltaY = event.clientY - poolToyDrag.startY;
  if (Math.hypot(deltaX, deltaY) > 7) poolToyDrag.moved = true;
  const x = Math.min(poolToyDrag.maxX, Math.max(poolToyDrag.minX, deltaX));
  const y = Math.min(poolToyDrag.maxY, Math.max(poolToyDrag.minY, deltaY));
  poolToyDrag.toy.style.translate = `${x}px ${y}px`;
  poolToyDrag.toy.classList.toggle("is-over-seal", poolToyTouchesSeal(poolToyDrag.toy));
  event.preventDefault();
});

function playWithRing(ring, lockToken = 0) {
  if (!ring || pet.dead || actionActive || tabReadOnly || saveWriteProtected || Date.now() < ringInteractionAvailableAt) {
    if (lockToken) setBusy(false, lockToken);
    return;
  }
  const ringLock = lockToken || setBusy(true);
  preserveDecorationKeyboardFocus(ring);
  ringInteractionAvailableAt = Date.now() + 4000;
  const affectionGain = interactionAffectionGain(5);
  pet.affection = clamp(pet.affection + affectionGain);
  pet.interactionFatigue = clamp(pet.interactionFatigue + 7);
  pet.lifetime.ring += 1;
  updateDaily("play");
  checkAchievements();
  addActivity("play", "抱住 Doflamingo 羽毛泳圈玩水", "🦩");
  ring.classList.add("is-playing", "is-cooling-down");
  ring.disabled = true;
  delete ring.dataset.busyDisabled;
  decorKey = decorationStateKey();
  showNotice(`海豹抱住 Doflamingo 羽毛泳圈玩水！信任度＋${affectionGain}${interactionRestCue()}`, "success");
  render();
  react("pet", "🦩", "ring", "ring", "ring-play");
  sound("water", "fin");
  vibrate([12, 35, 12]);
  safeSave();
  setTimeout(() => setBusy(false, ringLock), reactionDuration("pet", "ring-play"));
  scheduleDecorationRefresh(4050);
}

function playWithPoolToy(toy, lockToken = 0) {
  const toyId = toy?.dataset.poolToy;
  const reaction = POOL_TOY_REACTIONS[toyId];
  if (!toy || !reaction || pet.dead || actionActive || tabReadOnly || saveWriteProtected || poolToyCoolingDown(toyId)) {
    if (lockToken) setBusy(false, lockToken);
    return;
  }
  const toyLock = lockToken || setBusy(true);
  preserveDecorationKeyboardFocus(toy);
  poolToyInteractionAvailableAt[toyId] = Date.now() + reaction.cooldown;
  const affectionGain = interactionAffectionGain(reaction.affection);
  pet.affection = clamp(pet.affection + affectionGain);
  pet.energy = clamp(pet.energy + reaction.energy);
  pet.interactionFatigue = clamp(pet.interactionFatigue + reaction.fatigue);
  const message = `${pet.name}${reaction.line}`;
  rememberInteraction(toyId, reaction.activity);
  updateDaily("play");
  addActivity("play", reaction.activity, reaction.icon);
  toy.classList.add("is-playing", "is-cooling-down");
  toy.disabled = true;
  delete toy.dataset.busyDisabled;
  decorKey = decorationStateKey();
  showNotice(`${message}！信任度＋${affectionGain}${interactionRestCue()}`, "success");
  render(true, true);
  $("speech").textContent = message;
  react("pet", reaction.icon, toyId, reaction.asset, reaction.motion);
  sound(reaction.sound, reaction.soundDetail);
  vibrate(toyId === "ball" ? [9, 26, 9] : 10);
  setTimeout(() => toy.classList.remove("is-playing"), 680);
  setTimeout(() => setBusy(false, toyLock), reactionDuration("pet", reaction.motion));
  scheduleDecorationRefresh(reaction.cooldown + 60);
}

function playWithPoolFeature(feature) {
  const featureId = feature?.dataset.poolFeature;
  const reaction = POOL_FEATURE_REACTIONS[featureId];
  if (!feature || !reaction || pet.dead || interactionLock || actionActive || tabReadOnly || saveWriteProtected || poolToyCoolingDown(featureId)) return;
  const featureLock = setBusy(true);
  preserveDecorationKeyboardFocus(feature);
  poolToyInteractionAvailableAt[featureId] = Date.now() + reaction.cooldown;
  const affectionGain = interactionAffectionGain(reaction.affection);
  pet.affection = clamp(pet.affection + affectionGain);
  pet.energy = clamp(pet.energy + reaction.energy);
  pet.interactionFatigue = clamp(pet.interactionFatigue + reaction.fatigue);
  const message = `${pet.name}${reaction.line}`;
  rememberInteraction(featureId, reaction.activity);
  updateDaily("play");
  addActivity("play", reaction.activity, reaction.icon);
  feature.classList.add("is-playing", "is-cooling-down");
  feature.disabled = true;
  delete feature.dataset.busyDisabled;
  decorKey = decorationStateKey();
  showNotice(`${message}！信任度＋${affectionGain}${interactionRestCue()}`, "success");
  render(true, true);
  $("speech").textContent = message;
  react("pet", reaction.icon, featureId, reaction.asset, reaction.motion);
  sound(reaction.sound, reaction.soundDetail);
  vibrate(featureId === "light" ? [8, 24, 8] : 9);
  setTimeout(() => feature.classList.remove("is-playing"), 680);
  setTimeout(() => setBusy(false, featureLock), reactionDuration("pet", reaction.motion));
  scheduleDecorationRefresh(reaction.cooldown + 60);
}

function finishRingDrag(event) {
  if (!ringDrag || event.pointerId !== ringDrag.pointerId) return;
  const drag = ringDrag;
  const ring = drag.ring;
  const shouldPlay = !drag.moved || ringTouchesSeal(ring);
  ring.classList.remove("is-over-seal");
  ringDrag = null;
  if (shouldPlay) playWithRing(ring, drag.lockToken);
  else setBusy(false, drag.lockToken);
  returnRingToPool(ring);
}

function cancelRingDrag(event) {
  if (!ringDrag || event.pointerId !== ringDrag.pointerId) return;
  const drag = ringDrag;
  const ring = drag.ring;
  ringDrag = null;
  ring.classList.remove("is-over-seal");
  setBusy(false, drag.lockToken);
  returnRingToPool(ring);
}

function finishPoolToyDrag(event) {
  if (!poolToyDrag || event.pointerId !== poolToyDrag.pointerId) return;
  const drag = poolToyDrag;
  const toy = drag.toy;
  const shouldPlay = !drag.moved || poolToyTouchesSeal(toy);
  poolToyDrag = null;
  if (shouldPlay) playWithPoolToy(toy, drag.lockToken);
  else setBusy(false, drag.lockToken);
  returnPoolToyToWater(toy);
}

function cancelPoolToyDrag(event) {
  if (!poolToyDrag || event.pointerId !== poolToyDrag.pointerId) return;
  const drag = poolToyDrag;
  poolToyDrag = null;
  setBusy(false, drag.lockToken);
  returnPoolToyToWater(drag.toy);
}

$("decorations").addEventListener("pointerup", finishRingDrag);
$("decorations").addEventListener("pointercancel", cancelRingDrag);
$("decorations").addEventListener("lostpointercapture", cancelRingDrag);
$("decorations").addEventListener("pointerup", finishPoolToyDrag);
$("decorations").addEventListener("pointercancel", cancelPoolToyDrag);
$("decorations").addEventListener("lostpointercapture", cancelPoolToyDrag);
$("decorations").addEventListener("click", (event) => {
  const ring = event.target.closest('[data-pool-toy="ring"]');
  if (!ring || event.detail !== 0 || interactionLock || actionActive || tabReadOnly || saveWriteProtected) return;
  playWithRing(ring);
});
$("decorations").addEventListener("click", (event) => {
  const toy = event.target.closest('[data-pool-toy="ball"], [data-pool-toy="duck"]');
  if (!toy || event.detail !== 0 || interactionLock || actionActive || tabReadOnly || saveWriteProtected) return;
  playWithPoolToy(toy);
});
$("decorations").addEventListener("click", (event) => {
  const feature = event.target.closest("[data-pool-feature]");
  if (!feature || interactionLock || actionActive || tabReadOnly || saveWriteProtected) return;
  playWithPoolFeature(feature);
});

$("seal").addEventListener("pointerdown", (event) => {
  if (!event.isPrimary || activePetPointerId !== null || mode !== "pet" || pet.dead || tabReadOnly || saveWriteProtected) return;
  const canTrackRapidTouch = !interactionLock || directPetLockToken === interactionGeneration;
  if (!canTrackRapidTouch) return;
  activePetPointerId = event.pointerId;
  const now = Date.now();
  rapidTouches = [...rapidTouches.filter((stamp) => now - stamp < 1200), now];
  const rapidTouchLimit = coarsePointer ? 5 : 4;
  if (rapidTouches.length >= rapidTouchLimit) {
    rapidTouches = [];
    pointerTracking = false;
    gesturePetTriggered = true;
    suppressClick = true;
    pet.interactionFatigue = clamp(pet.interactionFatigue + 12);
    showNotice(`${pet.name} 被嚇到了，先轉身保持一點距離`, "warning");
    $("speech").textContent = "慢一點，我需要一點空間";
    const boundaryLock = setBusy(true);
    directPetLockToken = boundaryLock;
    react("pet", "🤍", "space", "space", "auto-space");
    vibrate([7, 32, 7]);
    safeSave();
    $("seal").setPointerCapture?.(event.pointerId);
    event.preventDefault();
    setTimeout(() => {
      if (setBusy(false, boundaryLock) && directPetLockToken === boundaryLock) {
        directPetLockToken = 0;
      }
    }, reactionDuration("pet", "auto-space"));
    return;
  }
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

$("seal").addEventListener("pointerenter", () => {
  if (pet.dead || interactionLock || actionActive) return;
  clearTimeout(attentionTimer);
  attentionTimer = setTimeout(() => {
    if (interactionLock || actionActive) return;
    $("seal-roamer").classList.add("noticing-player");
    $("speech").textContent = pet.affection >= 60 ? `${pet.name} 抬起頭，期待你靠近` : `${pet.name} 小心地看向你`;
  }, 380);
});

$("seal").addEventListener("pointerleave", () => {
  clearTimeout(attentionTimer);
  if (!pointerTracking) $("seal-roamer").classList.remove("noticing-player");
});

$("seal").addEventListener("pointermove", (event) => {
  if (!pointerTracking || event.pointerId !== activePetPointerId) return;
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
  const trailThreshold = coarsePointer ? 34 : 22;
  const petThreshold = coarsePointer ? 68 : 58;
  if (trailDistance > trailThreshold) {
    trailDistance = 0;
    addPetTrail(event.clientX, event.clientY);
  }
  if (pointerTravel > petThreshold && !gesturePetTriggered) {
    gesturePetTriggered = true;
    suppressClick = true;
    petSeal(pointerZone);
  }
});

function endPetPointer(event, cancelled = false) {
  if (activePetPointerId !== null && event.pointerId !== activePetPointerId) return;
  activePetPointerId = null;
  pointerTracking = false;
  $("seal-roamer").classList.remove("held", "noticing-player");
  if (!cancelled && !gesturePetTriggered && mode === "pet" && !interactionLock && !pet.dead && !suppressClick) {
    petSeal(pointerZone);
  }
}

$("seal").addEventListener("pointerup", endPetPointer);
$("seal").addEventListener("pointercancel", (event) => endPetPointer(event, true));
$("seal").addEventListener("lostpointercapture", (event) => endPetPointer(event, true));
$("seal").onclick = () => {
  if (suppressClick) {
    suppressClick = false;
    return;
  }
  if (mode === "pet") petSeal(pointerZone || "belly");
  else if (mode === "home") greetSeal();
};

document.querySelectorAll(".bottom-nav button").forEach((button) => {
  button.onclick = (event) => switchMode(button.dataset.mode, event.detail === 0);
});

document.addEventListener("keydown", (event) => {
  lastInputWasKeyboard = true;
  handleModalKeydown(event);
}, true);
document.addEventListener("pointerdown", () => {
  lastInputWasKeyboard = false;
}, true);
document.addEventListener("click", (event) => {
  if (event.detail === 0) lastInputWasKeyboard = true;
}, true);

$("sound-toggle").onclick = toggleSound;
$("profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (tabReadOnly || saveWriteProtected) return;
  const wasComplete = pet.profileComplete;
  const wasEditing = profileEditCancelable;
  saveIdentity($("profile-name").value, $("profile-birthday").value);
  closeProfileDialog();
  showNotice(wasEditing ? "海豹資料已更新" : `歡迎 ${pet.name} 來到泳池！`, "success");
  if (!wasComplete) startOnboarding();
  if (!storageAvailable) {
    storageWarningShown = false;
    setTimeout(warnStorageUnavailable, 650);
  }
});
$("profile-cancel").onclick = closeProfileDialog;
$("onboarding-skip").onclick = () => {
  if (tabReadOnly || saveWriteProtected) return;
  pet.onboardingStep = 4;
  drawerKey = "";
  showNotice("可以自由探索了，海豹會用反應告訴你牠的心情");
  render(true, true);
};
$("adopt").onclick = () => {
  if (tabReadOnly || saveWriteProtected) return;
  if (PREVIEW_DEAD) {
    location.href = `${location.pathname}?build=13`;
    return;
  }
  const reason = recoverFromCarePause();
  mode = "care";
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
  showNotice(
    reason === "substitute" ? `${pet.name} 平安回來了，所有共同紀錄都還在` : `${pet.name} 完成評估，先從溫和照護開始`,
    "success",
  );
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
  const readOnly = tabReadOnly || saveWriteProtected;
  if (document.hidden) {
    suspendAudio();
    $("pool").classList.add("is-paused");
    if (threeState.running) {
      stopThree();
    }
    if (!readOnly) {
      applyElapsedStats();
      pet.lastCoinAt = Date.now();
      safeSave();
    }
    return;
  }
  $("pool").classList.remove("is-paused");
  if (threeState.ready && !threeState.running) {
    startThree();
  }
  resumeAudio();
  if (readOnly) {
    render(false);
    return;
  }
  const now = Date.now();
  applyElapsedStats(now);
  const earned = collectOfflineCoins(now);
  if (earned) showNotice(`休息期間獲得 ${earned} 枚海豹幣！`, "success");
  render();
});

window.addEventListener("pageshow", () => {
  if (!tabReadOnly && !saveWriteProtected) applyElapsedStats();
  if (threeState.ready && !threeState.running) {
    startThree();
  }
  render(!tabReadOnly && !saveWriteProtected);
});

window.addEventListener("storage", async (event) => {
  if (event.key === TAB_LEASE_KEY && tabOwnershipMode === "lease") {
    const incomingLease = decodeTabLease(event.newValue);
    if (!incomingLease || incomingLease.owner !== TAB_ID) {
      clearInterval(tabLeaseHeartbeat);
      tabLeaseHeartbeat = 0;
      tabOwnershipMode = "none";
      tabReadOnly = true;
      queueLeaseTakeover();
      syncInteractionState();
      showNotice("另一個分頁已取得照護權；這裡改為唯讀", "warning");
    }
    return;
  }
  if (event.key === TAB_LEASE_KEY && tabReadOnly && !navigator.locks?.request) {
    attemptLeaseTakeover();
    return;
  }
  if (event.key !== SAVE_KEY || !event.newValue) return;
  try {
    const rawIncoming = decodeSavedPet(event.newValue);
    if (hasFutureSchema(rawIncoming)) {
      protectFutureSave();
      return;
    }
    const migrated = migrateSave(rawIncoming);
    if (!migrated) return;
    const incoming = normalizePet(migrated);
    if (incoming.updatedAt <= pet.updatedAt) return;
    await preloadStageActions(stageForBodyCondition(incoming.bodyCondition), ["idle"]);
    if (incoming.updatedAt <= pet.updatedAt) return;
    pet = incoming;
    currentStage = 0;
    drawerKey = "";
    decorKey = "";
    render(false, true);
    if (pet.soundOn) resumeAudio();
    else {
      stopWaterAmbience();
      suspendAudio();
    }
    showNotice("已同步另一個分頁的照顧進度");
  } catch {
    // Ignore malformed data from another tab.
  }
});

window.addEventListener("resize", () => {
  syncCanvasSize();
});

window.addEventListener("beforeunload", () => {
  if (!tabReadOnly && !saveWriteProtected) {
    applyElapsedStats();
    safeSave();
  }
  releaseTabLease();
});

setInterval(() => {
  if (document.hidden || tabReadOnly || saveWriteProtected) return;
  applyElapsedStats();
  renderStats();
  if (!actionActive) $("speech").textContent = mood();
  syncDeadDialog();
  renderLifeStrip();
  if (mode === "care") {
    drawerKey = "";
    renderDrawer(true);
  }
  safeSave();
}, 6e4);

setInterval(runAutonomousBehavior, 14500);

if (pet.dead) {
  $("notice").textContent = pet.carePauseReason === "substitute" ? "代班照護員已安全接手" : "小海豹正在接受專業評估";
} else if (starterGift) {
  $("notice").textContent = "新手禮物：11 枚海豹幣已送達！";
} else if (offlineCoins) {
  $("notice").textContent = `離線期間獲得 ${offlineCoins} 枚海豹幣！`;
} else {
  $("notice").textContent = "小海豹正在等你～";
}

async function bootApp() {
  const loader = $("app-loader");
  const startedAt = performance.now();
  $("profile-birthday").max = localDayKey();
  interactionLock = true;
  await establishTabOwnership();
  const allLoaded = await preloadEssentialAssets();
  const minimumDisplayTime = prefersReducedMotion() ? 0 : 450;
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
  scheduleBackgroundPreload();
  if (!storageAvailable && pet.profileComplete) {
    setTimeout(warnStorageUnavailable, 900);
  } else if (tabReadOnly) {
    setTimeout(() => showNotice("另一個分頁正在照顧海豹；這個分頁暫時只供查看", "warning"), 300);
  } else if (saveWriteProtected) {
    setTimeout(() => showNotice("這份存檔來自較新版本，目前以唯讀方式開啟", "warning"), 300);
  } else if (recoveredSave) {
    setTimeout(() => showNotice("已從上一份安全備份恢復照護進度", "success"), 300);
  }
  if (!pet.profileComplete && !pet.dead && !PREVIEW_DEAD && !tabReadOnly && !saveWriteProtected) {
    openProfileDialog(false);
  } else if (!pet.dead && !tabReadOnly && !saveWriteProtected) {
    const favorite = favoriteInteraction();
    let welcome = `${pet.name} 看見你，抬起頭打了個招呼`;
    if (elapsedAway >= 24 * HOUR) welcome = `${pet.name} 等你很久了，一看到你就游了過來`;
    else if (elapsedAway >= 2 * HOUR) welcome = `${pet.name} 認出你的腳步聲，主動靠近池邊`;
    else if (pet.satiety < 30) welcome = `${pet.name} 看見你，先期待地望向食物區`;
    else if (pet.energy < 30) welcome = `${pet.name} 睜開眼睛確認是你，又安心趴了回去`;
    else if (favorite) welcome = `${pet.name} 記得你喜歡「${favorite}」，正等著你的回應`;
    setTimeout(() => {
      showNotice(welcome, "success");
      $("speech").textContent = welcome;
      react("pet", "🤍", "welcome", "approach", "auto-approach");
    }, recoveredSave || saveWriteProtected ? 2200 : 360);
  }
  if (!tabReadOnly && !saveWriteProtected) setTimeout(runAutonomousBehavior, 5200);
}

bootApp();

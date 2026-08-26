import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const [html, script, styles, readme, workflow, smokeScript, assets] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../app.js", import.meta.url), "utf8"),
  readFile(new URL("../style.css", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8"),
  readFile(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8"),
  readFile(new URL("../scripts/smoke-deployment.mjs", import.meta.url), "utf8"),
  readdir(new URL("../assets/", import.meta.url)),
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
  assert.equal((script.match(/seal-stage-[1-5](?:-(?:eat|pet|walk))?-aligned-v1\.webp/g) || []).length, 20);
  assert.equal((script.match(/seal-stage-[1-5]-eat-closed-v2-aligned-v1\.webp/g) || []).length, 5);
  assert.equal((script.match(/seal-stage-[1-5]-doflamingo-ring-aligned-v1\.webp/g) || []).length, 5);
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

test("首屏只載入目前體型，其餘素材會在合適時機逐張背景載入", () => {
  assert.match(html, /id="app-loader"/);
  assert.equal((html.match(/rel="preload" as="image"/g) || []).length, 0);
  assert.match(script, /async function preloadEssentialAssets\(\)/);
  assert.match(script, /const total = baseUrls\.length \+ Object\.keys\(SPRITE_ASSETS\[current\]\)\.length;/);
  assert.match(script, /const \[baseResults, currentLoaded\] = await Promise\.all/);
  assert.match(script, /preloadStage\(current, markComplete\)/);
  assert.doesNotMatch(script, /\[current, current - 1, current \+ 1\]/);
  assert.match(script, /async function preloadRemainingAssets\(\)/);
  assert.match(script, /navigator\.connection\?\.saveData/);
  assert.match(script, /navigator\.deviceMemory && navigator\.deviceMemory <= 2/);
  assert.match(script, /sort\(\(a, b\) => Math\.abs\(a - current\) - Math\.abs\(b - current\)\)/);
  assert.match(script, /for \(const url of Object\.values\(SPRITE_ASSETS\[stageNumber\]\)\)/);
  assert.match(script, /function backgroundPreloadAllowed\(\)/);
  assert.match(script, /async function waitForBackgroundPreloadWindow\(\)/);
  assert.match(script, /await waitForBackgroundPreloadWindow\(\)/);
  assert.match(script, /await waitForIdle\(900\)/);
  assert.match(script, /scheduleBackgroundPreload\(\)/);
  assert.match(script, /function preloadImage\(url\)/);
  assert.match(script, /await image\.decode\(\)/);
  assert.match(script, /spriteCache\.delete\(url\)/);
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
  assert.match(script, /if \(motion === "haul"\) return \{ attention, main: 7200, settle \};/);
  assert.match(script, /const sequenceLock = setBusy\(true\);/);
  assert.match(script, /setBusy\(false, sequenceLock\)/);
  assert.doesNotMatch(script, /if \(motion === "haul"\) setBusy\((?:true|false)\);/);
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
  assert.match(script, /function poolToyTouchesSeal\(toy\)/);
  assert.match(script, /pointermove/);
  assert.match(script, /const affectionGain = interactionAffectionGain\(5\)/);
  assert.match(script, /pet\.affection = clamp\(pet\.affection \+ affectionGain\)/);
  assert.match(script, /"ring-play"/);
  assert.match(script, /react\("pet", "🦩", "ring", "ring", "ring-play"\)/);
  assert.match(styles, /width: clamp\(150px, 42cqw, 220px\);/);
  assert.match(styles, /\.decor-ring\s*\{[\s\S]*?touch-action: pan-y;/);
  assert.match(script, /moved: false,[\s\S]*?minX: poolRect\.left - toyRect\.left/);
  assert.match(script, /const shouldPlay = !drag\.moved \|\| poolToyTouchesSeal\(drag\.toy\)/);
  assert.match(styles, /\.decor-ring\.is-over-seal/);
  assert.match(script, /if \(toy\.dataset\.poolToy === "ring"\)[\s\S]*?overlapX >= 32 && overlapY >= 32/);
  assert.match(styles, /\.decor-ring\.is-dragging\s*\{[\s\S]*?z-index: 15;/);
  assert.match(styles, /@keyframes interaction-ring-play/);
});

test("六件道具都使用同一條點按、拖曳、鍵盤與取消路徑", () => {
  assert.match(script, /const POOL_TOY_REACTIONS = \{/);
  assert.match(script, /let decorationDrag = null/);
  assert.doesNotMatch(script, /ringDrag|poolToyDrag|POOL_FEATURE_REACTIONS|data-pool-feature|playWithPoolFeature/);
  assert.match(script, /data-pool-toy="\$\{item\.id\}"/);
  assert.match(script, /closest\("\[data-pool-toy\]"\)/);
  assert.match(script, /!event\.isPrimary/);
  assert.match(script, /const unsupportedMouseButton = event\.pointerType === "mouse" && event\.button !== 0/);
  assert.match(script, /unsupportedMouseButton \|\| decorationDrag/);
  assert.match(script, /toy\.setPointerCapture\?\.\(event\.pointerId\)/);
  assert.match(script, /Math\.hypot\(deltaX, deltaY\) > 7/);
  assert.match(script, /function playWithPoolToy\(toy, lockToken = 0\)/);
  assert.match(script, /function finishDecorationDrag\(event\)/);
  assert.match(script, /function cancelDecorationDrag\(event\)/);
  assert.match(script, /!drag\.moved \|\| poolToyTouchesSeal\(drag\.toy\)/);
  assert.match(script, /event\.detail !== 0/);
  assert.match(script, /lostpointercapture/);
  assert.match(script, /window\.addEventListener\("blur", \(\) => cancelDecorationDrag\(\)\)/);
  assert.match(script, /window\.addEventListener\("pagehide", \(\) => cancelDecorationDrag\(\)\)/);
  assert.match(script, /function releaseDecorationPointerCapture\(drag\)/);
  assert.match(script, /poolToyInteractionAvailableAt\[toyId\]/);
  assert.match(script, /delete toy\.dataset\.busyDisabled/);
  assert.match(script, /function scheduleDecorationRefresh\(delay = 0\)/);
  assert.match(script, /if \(decorationDrag \|\| interactionLock \|\| actionActive\)/);
  assert.match(styles, /\.pool-toy:not\(\.decor-ring\)\s*\{[\s\S]*?pointer-events: auto;[\s\S]*?touch-action: pan-y;/);
  assert.doesNotMatch(styles, /\.pool-toy[^{}]*\{[^}]*touch-action:\s*none/);
  assert.match(styles, /\.pool-toy:focus-visible/);
  assert.match(styles, /\.pool-toy:not\(\.decor-ring\)\.is-dragging/);
  assert.match(styles, /\.pool-toy:not\(\.decor-ring\)\.is-dragging\s*\{[\s\S]*?z-index: 15;/);
  assert.match(styles, /\.pool-toy:not\(\.decor-ring\)\.is-over-seal/);
  assert.match(styles, /\.decor-ice\s*\{[\s\S]*?left: 46%;[\s\S]*?bottom: 112px;/);
  assert.match(styles, /\.notice\s*\{[\s\S]*?pointer-events: none;/);
  assert.match(styles, /@keyframes pool-toy-play-pop/);
});

test("非泳圈道具有五種不同的名稱、圖像、動作與近身視覺", () => {
  const expectations = [
    ["ball", "海灘球", "swim", "toy-ball", "toy-visual-ball"],
    ["plant", "軟質海藻刷", "pet", "toy-kelp", "toy-visual-kelp"],
    ["light", "星光感應浮球", "approach", "toy-light", "toy-visual-light"],
    ["shell", "嗅聞貝盒", "sniff", "toy-scent", "toy-visual-scent"],
    ["duck", "涼涼浮冰枕", "sleep", "toy-ice", "toy-visual-ice"],
  ];
  for (const [id, name, asset, motion, visual] of expectations) {
    assert.match(script, new RegExp(`\\{ id: "${id}"[^\\n]+name: "${name}"`));
    assert.match(script, new RegExp(`${id}: \\{[\\s\\S]*?asset: "${asset}"[\\s\\S]*?motion: "${motion}"`));
    assert.match(styles, new RegExp(`\\.pet-seal\\[data-motion="${motion}"\\]`));
    assert.match(styles, new RegExp(`@keyframes ${visual}`));
  }
  assert.match(script, /function createPoolToyInteractionVisual\(toyId, icon, duration\)/);
  assert.match(script, /visual\.setAttribute\("aria-hidden", "true"\)/);
  assert.match(styles, /\.toy-interaction-visual\s*\{[\s\S]*?pointer-events: none;/);
});

test("每件道具的可及名稱、冷卻與鍵盤回饋一致", () => {
  assert.match(script, /type="button"[^\n]+aria-label="\$\{coolingDown/);
  assert.match(script, /拖到海豹身邊，或按一下/);
  assert.match(script, /function setDecorationCoolingState\(toy, toyId\)/);
  assert.match(script, /toy\.disabled = true/);
  assert.match(script, /toy\.setAttribute\("aria-label", `\$\{item\?\.name \|\| "這件道具"\}正在冷卻/);
  assert.match(script, /event\.detail !== 0/);
  assert.match(script, /function preserveDecorationKeyboardFocus\(decoration\)/);
  assert.match(script, /requestAnimationFrame\(\(\) => focusElement\(replacement\)\)/);
  assert.match(script, /<span aria-hidden="true">\$\{item\.icon\}<\/span>/);
  assert.match(script, /<img src="\$\{doflamingoRing\}[^>]+alt="">/);
});

test("海豹會依作息、個性與身體狀況自主活動", () => {
  assert.match(script, /const PERSONALITIES = \[/);
  assert.match(script, /function dayPhase\(stamp = Date\.now\(\)\)/);
  assert.match(script, /function chooseAutonomousBehavior\(\)/);
  assert.match(script, /setInterval\(runAutonomousBehavior, 14500\)/);
  assert.match(script, /pet\.energy < 28/);
  assert.match(script, /pet\.satiety < 25/);
  assert.match(styles, /@keyframes autonomous-swim/);
  assert.match(styles, /@keyframes autonomous-approach/);
});

test("主畫面只保留四個清楚入口", () => {
  assert.equal((html.match(/data-mode=/g) || []).length, 4);
  assert.doesNotMatch(html, /data-mode="journal"/);
  assert.match(html, /id="personality-label"/);
  assert.doesNotMatch(html, /weather-label|memory-count/);
  assert.match(html, />陪伴</);
  assert.match(html, />餵食</);
  assert.match(html, />照護</);
  assert.match(html, />小屋</);
  assert.match(styles, /repeat\(4, minmax\(0, 1fr\)\)/);
});

test("所有海豹姿勢都有一致畫布與底部基準版本", () => {
  assert.equal(assets.filter((name) => name.endsWith("-aligned-v1.webp")).length, 60);
  assert.equal((script.match(/-aligned-v1\.webp/g) || []).length, 60);
  assert.doesNotMatch(html, /seal-stage-1-aligned-v1\.webp/);
});

test("首次遊玩以非彈窗方式引導陪伴、餵食與照護", () => {
  assert.match(html, /id="onboarding-tip"/);
  assert.match(script, /onboardingStep: 0/);
  assert.match(script, /function startOnboarding\(\)/);
  assert.match(script, /function advanceOnboarding\(completedStep\)/);
  assert.match(script, /mode = "feed"/);
  assert.match(script, /mode = "care"/);
  assert.match(styles, /\.bottom-nav button\.is-guide-target/);
});

test("互動期間所有操作會顯示忙碌並防止重複點擊", () => {
  assert.match(script, /function syncInteractionState\(\)/);
  assert.match(script, /#drawer button, #decorations button, \.bottom-nav button/);
  assert.match(script, /if \(interactionLock \|\| tabReadOnly \|\| saveWriteProtected\) return;/);
  assert.match(styles, /\.pet-app\.is-interacting/);
  assert.match(styles, /#drawer\[aria-busy="true"\]/);
});

test("手機觸控限制單一指標並安全處理取消事件", () => {
  assert.match(html, /viewport-fit=cover/);
  assert.match(script, /!event\.isPrimary/);
  assert.match(script, /activePetPointerId/);
  assert.match(script, /function cancelDecorationDrag\(event\)/);
  assert.match(script, /lostpointercapture/);
  assert.match(script, /pagehide/);
  assert.match(styles, /@media \(max-width: 360px\)/);
});

test("陪伴頁提供四種直接互動並切換不同動作", () => {
  assert.match(script, /function performCompanion\(actionId\)/);
  assert.match(script, /data-companion="call"/);
  assert.match(script, /data-companion="splash"/);
  assert.match(script, /data-companion="quiet"/);
  assert.match(script, /data-companion="wave"/);
  assert.match(script, /asset: "approach"/);
  assert.match(script, /asset: "swim"/);
  assert.match(script, /asset: "sleep"/);
  assert.match(script, /call: \{ icon: "👋", asset: "approach", motion: "auto-approach"/);
  assert.match(script, /wave: \{ icon: "🤍", asset: "pet", motion: "greet"/);
  assert.match(styles, /\.companion-grid/);
});

test("照護頁精簡顯示三項今日進度與安全處理的最近紀錄", () => {
  assert.match(script, /function renderCareProgressCard\(\)/);
  assert.match(script, /const goals = DAILY_GOALS\.map/);
  assert.match(script, /Math\.min\(goal\.value, goal\.target\)/);
  assert.match(script, /latestIcon = latest \? escapeAttribute/);
  assert.match(script, /latestText = latest \? escapeAttribute/);
  assert.match(script, /progressCard \+ healthCard/);
  assert.match(script, /pet\.activityLog\.at\(-1\)\?\.id/);
  assert.match(styles, /\.care-progress-card ul/);
  assert.match(styles, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/);
  assert.match(styles, /\.latest-care-activity/);
});

test("共同回憶、成就數與專業觀察收在既有陪伴和照護頁", () => {
  assert.match(script, /function renderCompanionHistoryCard\(\)/);
  assert.match(script, /data-companion-history/);
  assert.match(script, /\$\{memoryCount\} 則回憶 · \$\{achievementCount\}／\$\{ACHIEVEMENTS\.length\} 個成就/);
  assert.match(script, /function renderObservationCard\(\)/);
  assert.match(script, /observationSummary\(\)/);
  assert.match(script, /progressCard \+ healthCard \+ observationCard/);
  assert.match(styles, /\.companion-history-card summary:focus-visible/);
  assert.match(styles, /\.observation-card/);
  assert.equal((html.match(/data-mode=/g) || []).length, 4);
});

test("長時間離開改由代班或獸醫照護且不再重建海豹", () => {
  assert.match(html, /id="care-pause-copy"/);
  assert.match(html, /你們累積的一切都不會歸零/);
  assert.match(script, /carePauseReason: ""/);
  assert.match(script, /carePauseReason = "substitute"/);
  assert.match(script, /function recoverFromCarePause\(now = Date\.now\(\)\)/);
  assert.match(script, /const reason = recoverFromCarePause\(\);/);
  assert.doesNotMatch(script.slice(script.indexOf('$("adopt").onclick'), script.indexOf("window.addEventListener", script.indexOf('$("adopt").onclick'))), /pet = fresh\(\)|openProfileDialog\(false\)/);
});

test("海豹會記住互動偏好並在回訪時主動迎接", () => {
  assert.match(script, /interactionCounts: \{\}/);
  assert.match(script, /function rememberInteraction\(id, label\)/);
  assert.match(script, /function favoriteInteraction\(\)/);
  assert.match(script, /elapsedAway >= 24 \* HOUR/);
  assert.match(script, /記得你喜歡/);
});

test("每天只有一個簡短情境選擇", () => {
  const momentBlock = script.slice(script.indexOf("const DAILY_MOMENTS"), script.indexOf("const SIZE_STOPS"));
  assert.match(script, /const DAILY_MOMENTS = \[/);
  assert.equal((momentBlock.match(/^  \{ id:/gm) || []).length, 11);
  assert.match(script, /function dailyMomentCandidates\(\)/);
  assert.match(script, /moment\.personalities\?\.includes\(pet\.personality\)/);
  assert.match(script, /pet\.owned\.includes\(moment\.requiresOwned\)/);
  assert.match(script, /function chooseDailyMoment\(today\)/);
  assert.match(script, /dailyMoment: \{ date:/);
  assert.match(script, /function resolveDailyMoment\(choiceId\)/);
  assert.match(script, /data-moment=/);
  assert.match(styles, /\.daily-moment/);
});

test("陪伴動作會先注意玩家、互動，再自然離開", () => {
  assert.match(script, /function playInteractionSequence/);
  assert.match(script, /"notice-player"/);
  assert.match(script, /"settle-away"/);
  assert.match(styles, /@keyframes notice-player/);
  assert.match(styles, /@keyframes settle-away/);
});

test("停留會被注視，快速亂點會讓海豹退開", () => {
  assert.match(script, /addEventListener\("pointerenter"/);
  assert.match(script, /const rapidTouchLimit = coarsePointer \? 5 : 4/);
  assert.match(script, /rapidTouches\.length >= rapidTouchLimit/);
  assert.match(script, /被嚇到了，先轉身保持一點距離/);
  assert.match(script, /"auto-space"/);
  assert.match(styles, /\.seal-roamer\.noticing-player/);
});

test("心情透過畫面反應而非新增數值欄", () => {
  assert.match(script, /function visibleEmotion\(\)/);
  assert.match(script, /dataset\.emotion = visibleEmotion\(\)/);
  assert.match(styles, /data-emotion="happy"/);
  assert.match(styles, /data-emotion="expecting"/);
  assert.match(styles, /data-emotion="overwhelmed"/);
});

test("照護會記錄長期後果並尊重海豹停止互動的訊號", () => {
  assert.match(script, /recentFoods/);
  assert.match(script, /lastRestAt: now/);
  assert.match(script, /lastCleanAt: now/);
  assert.match(script, /function positiveTimestampOr\(value, fallback, maximum = Date\.now\(\)\)/);
  assert.match(script, /Math\.min\(timestamp, upperBound\)/);
  assert.match(script, /lastRestAt: positiveTimestampOr\(raw\?\.lastRestAt, careCheckpoint, now\)/);
  assert.match(script, /simulatedAt - restCheckpoint > 18 \* HOUR/);
  assert.match(script, /simulatedAt - cleanCheckpoint > 24 \* HOUR/);
  assert.match(script, /function interactionAffectionGain\(baseGain\)/);
  assert.match(script, /Math\.max\(0\.35, 1 - pet\.interactionFatigue \/ 130\)/);
  assert.match(script, /function interactionRestCue\(\)/);
  assert.doesNotMatch(script, /if \(pet\.interactionFatigue >= 82\) return/);
  assert.match(script, /停止餵食，避免過量/);
  assert.match(script, /dietVariety < 2/);
});

test("音效與震動可以分別調整", () => {
  assert.match(script, /vibrationOn/);
  assert.match(script, /function vibrate\(pattern\)/);
  assert.doesNotMatch(script.replace(/navigator\.vibrate\?\.\(pattern\)/, ""), /navigator\.vibrate/);
  assert.match(html, /id="sound-toggle"/);
  assert.match(html, /id="sound-toggle"[^>]+aria-label="音效"[^>]+aria-pressed="true"/);
  assert.match(script, /button\.setAttribute\("aria-label", "音效"\)/);
  assert.match(script, /button\.setAttribute\("aria-pressed", String\(pet\.soundOn\)\)/);
  assert.match(script, /data-setting="vibration"/);
});

test("正式版保留命名、相遇日與簡單身分編輯", () => {
  assert.match(html, /id="profile-overlay"/);
  assert.match(html, /id="profile-name"/);
  assert.match(html, /id="profile-birthday"/);
  assert.match(script, /data-edit-profile/);
  assert.match(script, /function saveIdentity\(name, birthday = ""\)/);
});

test("命名與醫療視窗是真正鎖定背景且可用鍵盤操作的 modal", () => {
  assert.match(html, /id="profile-overlay"[^>]+role="dialog"[^>]+aria-modal="true"/);
  assert.match(html, /id="dead-overlay"[^>]+role="dialog"[^>]+aria-modal="true"/);
  assert.match(html, /id="profile-cancel"[^>]+hidden/);
  assert.match(script, /function openModal\(modal, initialFocus\)/);
  assert.match(script, /app\.inert = inert/);
  assert.match(script, /function handleModalKeydown\(event\)/);
  assert.match(script, /event\.key === "Escape"/);
  assert.match(script, /profileEditCancelable\) closeProfileDialog\(\)/);
  assert.match(script, /event\.key !== "Tab"/);
  assert.match(script, /modalRestoreFocus/);
  assert.match(script, /document\.querySelector\("\[data-edit-profile\]"\)/);
  assert.match(styles, /body\.modal-open/);
  assert.match(styles, /\.profile-overlay[\s\S]*?overflow-y: auto/);
  assert.match(styles, /\.dead-overlay[\s\S]*?overflow-y: auto/);
  assert.match(styles, /@media \(max-height: 560px\)/);
});

test("鍵盤開啟抽屜會聚焦內容且重繪只還原鍵盤焦點", () => {
  assert.match(html, /id="drawer"[^>]+tabindex="-1"/);
  assert.match(script, /function drawerFocusToken\(element, drawer\)/);
  assert.match(script, /if \(!lastInputWasKeyboard/);
  assert.match(script, /function restoreDrawerFocus\(drawer, token\)/);
  assert.match(script, /switchMode\(button\.dataset\.mode, event\.detail === 0\)/);
  assert.match(script, /if \(focusDrawer\) focusElement\(drawer\)/);
});

test("撫摸區保留直向捲動，不會用整面 touch-action none 困住手機", () => {
  assert.match(styles, /\.mode-pet \.pet-seal\s*\{[^}]*touch-action: pan-y pinch-zoom;/);
  assert.doesNotMatch(styles, /\.mode-pet \.pet-seal\s*\{[^}]*touch-action: none;/);
  assert.match(script, /addEventListener\("pointercancel", \(event\) => endPetPointer\(event, true\)\)/);
});

test("餵食不要求庫存補充，照護狀況會直接告知玩家", () => {
  assert.doesNotMatch(script, /data-restock=/);
  assert.doesNotMatch(script, /冷凍食物庫存|今日觀察事件/);
  assert.doesNotMatch(script, /pet\.inventory\[food\.id\] = Math\.max\(0, pet\.inventory\[food\.id\] - 1\)/);
  assert.doesNotMatch(script, /照片回憶簿|匯出備份|匯入備份/);
  assert.match(script, /const healthCard = healthEvent/);
  assert.match(script, /const healthHint = pet\.diagnosedHealthEvent === pet\.currentHealthEvent/);
  assert.match(script, /healthEvent\?\.afterCheckHint/);
});

test("五種體型都有六張真正的自主生活動作圖", () => {
  assert.equal((script.match(/seal-stage-[1-5]-(?:swim|haul|sleep|sniff|approach|space)-v1-aligned-v1\.webp/g) || []).length, 30);
  assert.match(script, /asset: "sleep"/);
  assert.match(script, /asset: "sniff"/);
  assert.match(script, /asset: "approach"/);
  assert.match(script, /asset: "swim"/);
  assert.match(script, /react\("pet", "🤍", "space", "space", "auto-space"\)/);
});

test("互動圖片會交叉淡化並在入水時補上水紋過場", () => {
  assert.match(script, /function setActionSprite\(asset\)/);
  assert.match(script, /sprite-swapping/);
  assert.ok(script.indexOf('roamer.classList.add("reacting");', script.indexOf("function react")) < script.indexOf("setActionSprite(actionAsset);", script.indexOf("function react")));
  assert.match(script, /function createWaterTransition\(strength = "soft"\)/);
  assert.match(styles, /\.seal-roamer\.reacting\.sprite-swapping \.seal-action-sprite/);
  assert.match(styles, /@keyframes water-transition-ripple/);
});

test("互動句子會避開連續重複並使用對應情境音", () => {
  assert.match(script, /function pickVariant\(key, options\)/);
  assert.match(script, /lastResponseIndexes/);
  assert.match(script, /const ATTENTION_LINES = \[/);
  assert.match(script, /const COMPANION_LINES = \{/);
  assert.match(script, /kind === "approach"/);
  assert.match(script, /kind === "haul"/);
  assert.match(script, /kind === "sleep"/);
});

test("手機與減少動態效果模式使用較短互動節奏", () => {
  assert.match(script, /const COARSE_POINTER_QUERY = matchMedia/);
  assert.match(script, /const REDUCED_MOTION_QUERY = matchMedia/);
  assert.match(script, /query\.addEventListener\("change", handleMediaPreferenceChange\)/);
  assert.match(script, /function sequenceTiming\(motion, requestedMain\)/);
  assert.match(script, /if \(prefersReducedMotion\(\)\) return \{ attention: 60, main: 120, settle: 100 \}/);
  assert.match(script, /const trailThreshold = coarsePointer \? 34 : 22/);
  assert.match(script, /const petThreshold = coarsePointer \? 68 : 58/);
  assert.match(script, /behavior: prefersReducedMotion\(\) \? "auto" : "smooth"/);
});

test("鍵盤焦點、裝飾重建與手機字級都有清楚回饋", () => {
  assert.match(styles, /button:focus-visible\s*\{[\s\S]*?outline: 3px solid #fffdf4;[\s\S]*?box-shadow: 0 0 0 6px #174758;/);
  assert.match(script, /function preserveDecorationKeyboardFocus\(decoration\)/);
  assert.match(script, /const focusedDecoration = document\.activeElement\?\.closest/);
  assert.match(script, /requestAnimationFrame\(\(\) => focusElement\(replacement\)\)/);
  assert.match(styles, /\.pet-app small,[\s\S]*?font-size: 11px;/);
  assert.match(styles, /\.status-copy,[\s\S]*?font-size: 12px;/);
});

test("存檔有版本遷移、安全備份與新版本寫入保護", () => {
  assert.match(script, /const SAVE_SCHEMA_VERSION = \d+/);
  assert.match(script, /function migrateSave\(raw\)/);
  assert.match(script, /function isRecognizableSave\(raw\)/);
  assert.match(script, /function hasFutureSchema\(raw\)/);
  assert.match(script, /SAVE_BACKUP_KEY/);
  assert.match(script, /saveWriteProtected = true/);
  assert.match(script, /if \(hasFutureSchema\(decodeSavedPet\(currentValue\)\)\)/);
  assert.match(script, /schemaVersion: SAVE_SCHEMA_VERSION/);
  assert.match(script, /await preloadStageActions\(stageForBodyCondition\(incoming\.bodyCondition\), \["idle"\]\)/);
  assert.match(script, /if \(!tabReadOnly && !saveWriteProtected\) ensureCurrentDay\(\)/);
});

test("部署流程會測試公開首頁與正式素材", () => {
  assert.match(workflow, /Checkout smoke test/);
  assert.match(workflow, /node scripts\/smoke-deployment\.mjs/);
  assert.match(smokeScript, /AbortSignal\.timeout\(requestTimeout\)/);
  assert.match(smokeScript, /homepage identity is missing/);
  assert.match(smokeScript, /built JS or CSS reference is missing/);
});

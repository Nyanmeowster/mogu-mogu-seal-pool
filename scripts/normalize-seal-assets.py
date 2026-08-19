"""Create non-destructive, consistently anchored copies of all 2D seal poses."""

from pathlib import Path
import re

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
CANVAS = (1000, 800)
STAGE_WIDTH = {1: 710, 2: 740, 3: 750, 4: 765, 5: 790}
ACTION_SCALE = {
    "idle": 1.0,
    "eat": 1.0,
    "eat-closed-v2": 1.0,
    "pet": 1.0,
    "walk": 1.0,
    "doflamingo-ring": 1.05,
    "swim-v1": 1.0,
    "haul-v1": 1.0,
    "sleep-v1": 0.92,
    "sniff-v1": 1.0,
    "approach-v1": 0.78,
    "space-v1": 0.9,
}
ACTION_BASELINE = {
    "sleep-v1": 660,
    "approach-v1": 675,
    "doflamingo-ring": 695,
}


def action_from_name(path: Path, stage: int) -> str:
    stem = path.stem
    prefix = f"seal-stage-{stage}"
    return stem[len(prefix) + 1 :] if stem != prefix else "idle"


def output_path(path: Path) -> Path:
    return path.with_name(f"{path.stem}-aligned-v1.webp")


def normalize(path: Path, stage: int, action: str) -> None:
    source = Image.open(path).convert("RGBA")
    bounds = source.getchannel("A").getbbox()
    if not bounds:
        return
    subject = source.crop(bounds)
    target_width = round(STAGE_WIDTH[stage] * ACTION_SCALE[action])
    scale = target_width / subject.width
    target_height = round(subject.height * scale)
    if target_height > 620:
        scale = 620 / subject.height
        target_width = round(subject.width * scale)
        target_height = 620
    subject = subject.resize((target_width, target_height), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    baseline = ACTION_BASELINE.get(action, 680)
    x = round((CANVAS[0] - target_width) / 2)
    y = baseline - target_height
    canvas.alpha_composite(subject, (x, y))
    canvas.save(output_path(path), "WEBP", quality=90, method=4)


def main() -> None:
    matcher = re.compile(r"seal-stage-([1-5])(?:-|\.webp)")
    for path in sorted(ASSETS.glob("seal-stage-*.webp")):
        if "aligned-v1" in path.name:
            continue
        match = matcher.match(path.name)
        if not match:
            continue
        stage = int(match.group(1))
        action = action_from_name(path, stage)
        if action not in ACTION_SCALE:
            continue
        normalize(path, stage, action)


if __name__ == "__main__":
    main()

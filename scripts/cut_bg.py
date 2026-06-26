"""Remove the baked-in checkerboard/white background from the intro art.

The backgrounds are a checkerboard of two near-white NEUTRAL grays (~254 / ~238).
The subjects (cream sails, gold sun, tan landmass) are WARM — they have a
channel spread. So we key out pixels that are both bright AND neutral, but only
the region connected to the image border (flood fill), so light *interior*
subject pixels (sail highlights, sun disc) survive because they are enclosed by
dark engraving outlines and never reached from the edge.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

# pixel is "background-like" if bright and near-gray (low saturation)
BRIGHT_MIN = 216   # min channel must be at least this
NEUTRAL_MAX = 18   # max-min channel spread must be at most this

SRC_DIR = "public/uploads/scroll"
TARGETS = ["world", "ship", "sun", "dragon-1", "dragon-2", "dragon-3", "dragon-4"]


def cut(path):
    im = Image.open(path).convert("RGB")
    arr = np.asarray(im).astype(np.int16)
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    mx = arr.max(axis=2)
    mn = arr.min(axis=2)
    bg_like = (mn >= BRIGHT_MIN) & ((mx - mn) <= NEUTRAL_MAX)

    # keep only bg-like blobs that touch the border (the real background)
    labels, n = ndimage.label(bg_like)
    border = np.concatenate([
        labels[0, :], labels[-1, :], labels[:, 0], labels[:, -1],
    ])
    border_ids = set(np.unique(border)) - {0}
    bg = np.isin(labels, list(border_ids))

    # hard alpha, then soften the edge a touch to kill the gray fringe
    alpha = np.where(bg, 0, 255).astype(np.uint8)
    a_img = Image.fromarray(alpha, "L").filter(ImageFilter.GaussianBlur(0.8))

    out = Image.merge("RGBA", (*im.split(), a_img))
    out.save(path)
    cleared = int(bg.sum())
    pct = 100 * cleared / bg.size
    print(f"{path.split('/')[-1]:14} cleared {pct:5.1f}% of pixels")


if __name__ == "__main__":
    for t in TARGETS:
        cut(f"{SRC_DIR}/{t}.png")

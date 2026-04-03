/**
 * Re-crop flower images from Instagram screenshots.
 *
 * All source screenshots are 1400x900. The flower photo is displayed
 * in the left column of the Instagram post viewer. The photo boundaries
 * vary per image but are auto-detected by scanning for non-white pixels.
 *
 * Typical bounds: left ~224-299, right ~750-825, top ~36, bottom ~637.
 * Photo dimensions are roughly 450-600 x 601.
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../../lovely-present/scraped/posts");
const OUT_DIR = path.resolve(__dirname, "../public/images");
const PRODUCTS_DIR = path.join(OUT_DIR, "products");

const productMappings = [
  { src: "flower_21.png", out: "cutie.jpg" },
  { src: "flower_16.png", out: "spring.jpg" },
  { src: "flower_24.png", out: "blue-waters.jpg" },
  { src: "flower_3.png", out: "spring-bouquet.jpg" },
  { src: "flower_20.png", out: "gisele.jpg" },
  { src: "flower_5.png", out: "xmas.jpg" },
  { src: "flower_25.png", out: "sweet-love.jpg" },
  { src: "flower_4.png", out: "mixed.jpg" },
  { src: "flower_12.png", out: "peonies-roses.jpg" },
  { src: "flower_6.png", out: "luxury.jpg" },
  { src: "flower_23.png", out: "dubai.jpg" },
  { src: "flower_18.png", out: "101-roses.jpg" },
];

async function detectPhotoBounds(inputPath) {
  const img = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width,
    h = info.height,
    ch = info.channels;

  function isNearWhite(x, y) {
    const i = (y * w + x) * ch;
    return data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240;
  }

  // Find left edge at y=400 (middle of image)
  let left = 0;
  for (let x = 0; x < w; x++) {
    if (!isNearWhite(x, 400)) {
      left = x;
      break;
    }
  }

  // Find right edge: scan right from photo center until a vertical strip is mostly white
  let right = w;
  for (let x = left + 100; x < w; x++) {
    let whiteCount = 0;
    for (let dy = -50; dy <= 50; dy += 10) {
      const testY = Math.min(Math.max(400 + dy, 0), h - 1);
      if (isNearWhite(x, testY)) whiteCount++;
    }
    if (whiteCount >= 9) {
      right = x;
      break;
    }
  }

  // Find top edge at midpoint X
  const midX = Math.floor((left + right) / 2);
  let top = 0;
  for (let y = 0; y < h; y++) {
    if (!isNearWhite(midX, y)) {
      top = y;
      break;
    }
  }

  // Find bottom edge: scan down from photo area to find where action bar starts
  let bottom = 637; // default fallback
  for (let y = top + 100; y < 750; y++) {
    let whiteCount = 0;
    let total = 0;
    for (let x = left + 10; x < right - 10; x += 5) {
      total++;
      if (isNearWhite(x, y)) whiteCount++;
    }
    if (whiteCount > total * 0.8) {
      bottom = y;
      break;
    }
  }

  return { left, top, width: right - left, height: bottom - top };
}

async function cropProduct(srcFile, outFile) {
  const inputPath = path.join(SRC_DIR, srcFile);
  const outputPath = path.join(PRODUCTS_DIR, outFile);

  const bounds = await detectPhotoBounds(inputPath);
  console.log(
    `  ${srcFile}: detected bounds ${bounds.left},${bounds.top} ${bounds.width}x${bounds.height}`
  );

  await sharp(inputPath)
    .extract(bounds)
    .resize(800, 800, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outputPath);

  console.log(`  -> ${outFile}`);
}

async function cropHero() {
  // Use flower_12 (beautiful pink peonies/roses bouquet)
  const inputPath = path.join(SRC_DIR, "flower_12.png");
  const outputPath = path.join(OUT_DIR, "hero.jpg");

  const bounds = await detectPhotoBounds(inputPath);
  console.log(
    `  hero source: detected bounds ${bounds.left},${bounds.top} ${bounds.width}x${bounds.height}`
  );

  await sharp(inputPath)
    .extract(bounds)
    .resize(1920, 800, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(outputPath);

  console.log(`  -> hero.jpg (1920x800)`);
}

async function cropStorefront() {
  // flower_1 contains the storefront with the flower arch doorway
  const inputPath = path.join(SRC_DIR, "flower_1.png");
  const outputPath = path.join(OUT_DIR, "storefront.jpg");

  const bounds = await detectPhotoBounds(inputPath);
  console.log(
    `  storefront source: detected bounds ${bounds.left},${bounds.top} ${bounds.width}x${bounds.height}`
  );

  await sharp(inputPath)
    .extract(bounds)
    .resize(800, 600, {
      fit: "cover",
      position: "top",
    })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(outputPath);

  console.log(`  -> storefront.jpg (800x600)`);
}

async function main() {
  console.log("Cropping product images...");
  for (const mapping of productMappings) {
    await cropProduct(mapping.src, mapping.out);
  }

  console.log("\nCropping hero image...");
  await cropHero();

  console.log("\nCropping storefront image...");
  await cropStorefront();

  console.log("\nDone! All images re-cropped.");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});

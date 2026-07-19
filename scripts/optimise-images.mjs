/**
 * Converts all PNG and JPG images in public/ to WebP.
 * Saves .webp files alongside originals, then deletes the originals.
 * Run once: node scripts/optimise-images.mjs
 */

import sharp from "sharp";
import { readdir, unlink, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");

// These files should not be converted (OG image stays as JPG for compatibility,
// logo PNG has transparency that must be preserved as WebP)
const SKIP = new Set([]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function convert(filePath) {
  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const before = (await stat(filePath)).size;

  const pipeline = sharp(filePath);

  if (ext === ".png") {
    await pipeline.webp({ quality: 82, effort: 6 }).toFile(webpPath);
  } else {
    await pipeline.webp({ quality: 82 }).toFile(webpPath);
  }

  const after = (await stat(webpPath)).size;
  const saving = (((before - after) / before) * 100).toFixed(0);
  const beforeKb = (before / 1024).toFixed(0);
  const afterKb = (after / 1024).toFixed(0);

  // Delete original only if WebP is smaller
  if (after < before) {
    await unlink(filePath);
    console.log(`✓ ${basename(filePath)} → ${basename(webpPath)}  ${beforeKb}KB → ${afterKb}KB  (-${saving}%)`);
  } else {
    await unlink(webpPath);
    console.log(`— ${basename(filePath)} kept as-is (WebP was not smaller)`);
  }
}

const files = await walk(PUBLIC_DIR);
console.log(`Found ${files.length} images to process...\n`);

let converted = 0;
let skipped = 0;

for (const file of files) {
  if (SKIP.has(basename(file))) {
    console.log(`  skipping ${basename(file)}`);
    skipped++;
    continue;
  }
  try {
    await convert(file);
    converted++;
  } catch (err) {
    console.error(`✗ ${basename(file)}: ${err.message}`);
  }
}

console.log(`\nDone. ${converted} converted, ${skipped} skipped.`);

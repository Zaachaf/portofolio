import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1400;
const QUALITY = 80;
const DELETE_ORIGINALS = process.argv.includes("--delete");
const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

const formatKB = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function optimizeFolder(folder) {
  const files = await fs.readdir(folder);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!SOURCE_EXTENSIONS.has(ext)) continue;

    const input = path.join(folder, file);
    const output = path.join(
      folder,
      `${path.basename(file, path.extname(file))}.webp`,
    );

    const before = (await fs.stat(input)).size;
    await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(output);
    const after = (await fs.stat(output)).size;

    console.log(
      `${path.relative(ROOT, input)}: ${formatKB(before)} -> ${formatKB(after)}`,
    );

    if (DELETE_ORIGINALS) await fs.unlink(input);
  }
}

const entries = await fs.readdir(ROOT, { withFileTypes: true });
for (const entry of entries) {
  if (entry.isDirectory()) await optimizeFolder(path.join(ROOT, entry.name));
}

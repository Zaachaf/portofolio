import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".avif",
]);

/**
 * Membaca semua gambar di public/images/<folder>, diurutkan 1, 2, 3, ...
 * Hanya boleh dipanggil dari Server Component (memakai fs).
 */
export function getGalleryImages(folder: string): readonly string[] {
  const directory = path.join(process.cwd(), "public", "images", folder);

  try {
    return fs
      .readdirSync(directory)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/images/${folder}/${encodeURIComponent(file)}`);
  } catch {
    return [];
  }
}

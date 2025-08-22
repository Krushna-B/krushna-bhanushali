import fg from "fast-glob";
import sharp from "sharp";
import { basename, extname, join } from "path";
import { mkdir } from "fs/promises";

const W = 1600, H = 1000;                  // 16:10 target canvas
const OUT = "public/projects/processed";   // output folder (served by Next)

await mkdir(OUT, { recursive: true });
const files = await fg(["public/projects/**/*.{png,jpg,jpeg,webp}"]);

for (const file of files) {
  const name = basename(file, extname(file));
  const out = join(OUT, `${name}.webp`);

  // pad to 16:10 (no crop), center, transparent padding
  await sharp(file)
    .rotate() // auto-orient
    .resize(W, H, {
      fit: "contain",                   // NO CROP
      background: { r: 0, g: 0, b: 0, alpha: 0 }, // transparent letterbox
    })
    .webp({ quality: 82 })
    .toFile(out);

  console.log("→", out);
}

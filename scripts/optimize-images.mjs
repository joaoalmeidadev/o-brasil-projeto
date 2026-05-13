import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public/images');

async function process(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const base = file.slice(0, -ext.length);
  const meta = await sharp(file).metadata();
  let pipeline = sharp(file);
  let resized = false;
  if (meta.width > 1600) {
    pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
    resized = true;
  }
  const buf = await pipeline.png({ quality: 85, compressionLevel: 9 }).toBuffer();
  fs.writeFileSync(file, buf);
  await sharp(file).webp({ quality: 82 }).toFile(`${base}.webp`);
  await sharp(file).avif({ quality: 65 }).toFile(`${base}.avif`);
  const s = fs.statSync(file).size;
  const w = fs.statSync(`${base}.webp`).size;
  const a = fs.statSync(`${base}.avif`).size;
  console.log(
    `${path.relative(ROOT, file).padEnd(34)} ${meta.width}x${meta.height}${resized ? '→1600' : ''}  png=${(s / 1024).toFixed(0)}KB  webp=${(w / 1024).toFixed(0)}KB  avif=${(a / 1024).toFixed(0)}KB`,
  );
}

async function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else await process(p);
  }
}

await walk(ROOT);

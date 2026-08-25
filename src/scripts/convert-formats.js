import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(scriptDir, '../assets/images');
const outputDir = path.join(scriptDir, '../assets/images/optimized');

if (!fs.existsSync(inputDir)) {
  throw new Error(`Input directory does not exist: ${inputDir}`);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.jpeg') {
    const name = path.parse(file).name;
    const inputPath = path.join(inputDir, file);

    // 1. Exportar a WebP (ancho máx 2048px, calidad 80%)
    sharp(inputPath)
      .resize({ width: 2048, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${name}.webp`));

    // 2. Exportar a AVIF (ancho máx 2048px, calidad 75%)
    sharp(inputPath)
      .resize({ width: 2048, withoutEnlargement: true })
      .avif({ quality: 80 })
      .toFile(path.join(outputDir, `${name}.avif`));
  }
});
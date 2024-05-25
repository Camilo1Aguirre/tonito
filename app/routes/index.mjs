// ./app/routes/index.mjs

import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathRouter = __dirname;

const removeExtension = (fileName) => {
  return fileName.split('.').shift();
};

(async () => {
  try {
    const files = await fs.readdir(pathRouter);
    files.forEach(async (file) => {
      const fileWithOutExt = removeExtension(file);
      const skip = ['index'].includes(fileWithOutExt);
      if (!skip) {
        const module = await import(`./${fileWithOutExt}.mjs`);
        router.use(`/${fileWithOutExt}`, module.default);
        console.log('-------->', file);
      }
    });
  } catch (error) {
    console.error('Error leyendo directorio:', error);
  }
})();

export default router;

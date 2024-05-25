import express from 'express';
import {
  getAllStyles,
  createStyle,
  getStyleById,
  updateStyleById,
  deleteStyleById,
} from '../controllers/style.mjs';

const router = express.Router();

// Ruta: /Styles GET
router.get('/', getAllStyles);
// Ruta: /Styles POST
router.post('/', createStyle);
// Ruta: /Styles/:id GET
router.get('/:id', getStyleById);
// Ruta: /Styles/:id PUT
router.put('/:id', updateStyleById);
// Ruta: /Styles/:id DELETE
router.delete('/:id', deleteStyleById);

export default router;

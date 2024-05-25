import express from 'express';
import {
  getAllPicks,
  createPick,
  getPickById,
  updatePickById,
  deletePickById,
} from '../controllers/pick.mjs';

const router = express.Router();

// Ruta: /Picks GET
router.get('/', getAllPicks);
// Ruta: /Picks POST
router.post('/', createPick);
// Ruta: /Picks/:id GET
router.get('/:id', getPickById);
// Ruta: /Picks/:id PUT
router.put('/:id', updatePickById);
// Ruta: /Picks/:id DELETE
router.delete('/:id', deletePickById);

export default router;

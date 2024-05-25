import express from 'express';
import {
  getAllCoaches,
  createCoach,
  getCoachById,
  updateCoachById,
  deleteCoachById,
} from '../controllers/coach.mjs';

const router = express.Router();

// Ruta: /Coachs GET
router.get('/', getAllCoaches);
// Ruta: /Coachs POST
router.post('/', createCoach);
// Ruta: /Coachs/:id GET
router.get('/:id', getCoachById);
// Ruta: /Coachs/:id PUT
router.put('/:id', updateCoachById);
// Ruta: /Coachs/:id DELETE
router.delete('/:id', deleteCoachById);

export default router;

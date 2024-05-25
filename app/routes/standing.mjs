import express from 'express';
import {
  getAllStandings,
  createStanding,
  getStandingById,
  updateStandingById,
  deleteStandingById,
} from '../controllers/standing.mjs';

const router = express.Router();

// Ruta: /Standings GET
router.get('/', getAllStandings);
// Ruta: /Standings POST
router.post('/', createStanding);
// Ruta: /Standings/:id GET
router.get('/:id', getStandingById);
// Ruta: /Standings/:id PUT
router.put('/:id', updateStandingById);
// Ruta: /Standings/:id DELETE
router.delete('/:id', deleteStandingById);

export default router;

import express from 'express';
import {
  getAllTeams,
  createTeam,
  getTeamById,
  updateTeamById,
  deleteTeamById,
} from '../controllers/team.mjs';

const router = express.Router();

// Ruta: /Teams POST
router.post('/', createTeam);
// Ruta: /Teams GET
router.get('/', getAllTeams);
// Ruta: /Teams/:id GET
router.get('/:id', getTeamById);
// Ruta: /Teams/:id PUT
router.put('/:id', updateTeamById);
// Ruta: /Teams/:id DELETE
router.delete('/:id', deleteTeamById);

export default router;

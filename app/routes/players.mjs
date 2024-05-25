import express from 'express';
import {
  getAllPlayers,
  createPlayer,
  getPlayerById,
  updatePlayerById,
  deletePlayerById,
} from '../controllers/player.mjs';

const router = express.Router();

// Ruta: /Players GET
router.get('/', getAllPlayers);
// Ruta: /Players POST
router.post('/', createPlayer);
// Ruta: /Players/:id GET
router.get('/:id', getPlayerById);
// Ruta: /Players/:id PUT
router.put('/:id', updatePlayerById);
// Ruta: /Players/:id DELETE
router.delete('/:id', deletePlayerById);

export default router;

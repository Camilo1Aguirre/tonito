import express from 'express';
import {
  getAllGamesUser,
  createGameUser,
  getGameUserById,
  updateGameUserById,
  deleteGameUserById,
} from '../controllers/gameUser.mjs';

const router = express.Router();

// Ruta: /GameUsers GET
router.get('/', getAllGamesUser);
// Ruta: /GameUsers POST
router.post('/', createGameUser);
// Ruta: /GameUsers/:id GET
router.get('/:id', getGameUserById);
// Ruta: /GameUsers/:id PUT
router.put('/:id', updateGameUserById);
// Ruta: /GameUsers/:id DELETE
router.delete('/:id', deleteGameUserById);

export default router;

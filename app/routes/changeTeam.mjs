import express from 'express';
import { changeTeam } from '../controllers/controllerMethods/changeTeam.mjs';

const router = express.Router();

// Ruta para actualizar el ID del equipo de un jugador por su ID
router.put('/:playerId', changeTeam);

export default router;

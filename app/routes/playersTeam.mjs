import express from 'express';
import { playersTeam } from '../controllers/controllerMethods/playersTeam.mjs';

const router = express.Router();
router.get('/:team', playersTeam);

export default router;

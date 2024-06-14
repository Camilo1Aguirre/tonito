import express from 'express';
import { nameTeam } from '../controllers/controllerMethods/nameTeam.mjs';

const router = express.Router();
router.get('/', nameTeam);

export default router;

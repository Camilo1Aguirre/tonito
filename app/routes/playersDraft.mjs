import express from 'express';
import { playersDraft } from '../controllers/controllerMethods/playersDraft.mjs';

const router = express.Router();
router.get('/', playersDraft);

export default router;

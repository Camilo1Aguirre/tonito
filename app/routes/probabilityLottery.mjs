import express from 'express';
import { probabilityLottery } from '../controllers/controllerMethods/probabilityLottery.mjs';

const router = express.Router();
router.get('/', probabilityLottery);

export default router;

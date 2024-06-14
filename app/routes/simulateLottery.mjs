import express from 'express';
import { simulateLottery } from '../controllers/controllerMethods/simulateLoterry.mjs';

const router = express.Router();
router.get('/', simulateLottery);

export default router;

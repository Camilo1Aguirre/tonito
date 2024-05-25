import express from 'express';
import {
  getAllLotterys,
  createLottery,
  getLotteryById,
  updateLotteryById,
  deleteLotteryById,
} from '../controllers/lottery.mjs';

const router = express.Router();

// Ruta: /Lotterys GET
router.get('/', getAllLotterys);
// Ruta: /Lotterys POST
router.post('/', createLottery);
// Ruta: /Lotterys/:id GET
router.get('/:id', getLotteryById);
// Ruta: /Lotterys/:id PUT
router.put('/:id', updateLotteryById);
// Ruta: /Lotterys/:id DELETE
router.delete('/:id', deleteLotteryById);

export default router;

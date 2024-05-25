import LotteryModel from '../models/lottery.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllLotterys = async (req, res) => {
  await getAllItems(LotteryModel, req, res);
};

export const createLottery = async (req, res) => {
  await createItem(LotteryModel, req, res);
};

export const getLotteryById = async (req, res) => {
  await getItemById(LotteryModel, req, res);
};

export const updateLotteryById = async (req, res) => {
  await updateItemById(LotteryModel, req, res);
};

export const deleteLotteryById = async (req, res) => {
  await deleteItemById(LotteryModel, req, res);
};

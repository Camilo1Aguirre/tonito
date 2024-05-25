import GameUserModel from '../models/gameUser.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllGamesUser = async (req, res) => {
  await getAllItems(GameUserModel, req, res);
};

export const createGameUser = async (req, res) => {
  await createItem(GameUserModel, req, res);
};

export const getGameUserById = async (req, res) => {
  await getItemById(GameUserModel, req, res);
};

export const updateGameUserById = async (req, res) => {
  await updateItemById(GameUserModel, req, res);
};

export const deleteGameUserById = async (req, res) => {
  await deleteItemById(GameUserModel, req, res);
};

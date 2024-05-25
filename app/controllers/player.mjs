import PlayerModel from '../models/player.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllPlayers = async (req, res) => {
  await getAllItems(PlayerModel, req, res);
};

export const createPlayer = async (req, res) => {
  await createItem(PlayerModel, req, res);
};

export const getPlayerById = async (req, res) => {
  await getItemById(PlayerModel, req, res);
};

export const updatePlayerById = async (req, res) => {
  await updateItemById(PlayerModel, req, res);
};

export const deletePlayerById = async (req, res) => {
  await deleteItemById(PlayerModel, req, res);
};

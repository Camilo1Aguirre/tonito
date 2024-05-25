import PickModel from '../models/pick.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllPicks = async (req, res) => {
  await getAllItems(PickModel, req, res);
};

export const createPick = async (req, res) => {
  await createItem(PickModel, req, res);
};

export const getPickById = async (req, res) => {
  await getItemById(PickModel, req, res);
};

export const updatePickById = async (req, res) => {
  await updateItemById(PickModel, req, res);
};

export const deletePickById = async (req, res) => {
  await deleteItemById(PickModel, req, res);
};

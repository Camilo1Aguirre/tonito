import StyleModel from '../models/style.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllStyles = async (req, res) => {
  await getAllItems(StyleModel, req, res);
};

export const createStyle = async (req, res) => {
  await createItem(StyleModel, req, res);
};

export const getStyleById = async (req, res) => {
  await getItemById(StyleModel, req, res);
};

export const updateStyleById = async (req, res) => {
  await updateItemById(StyleModel, req, res);
};

export const deleteStyleById = async (req, res) => {
  await deleteItemById(StyleModel, req, res);
};

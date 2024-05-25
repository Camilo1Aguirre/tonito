import StandingModel from '../models/user.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllUsers = async (req, res) => {
  await getAllItems(StandingModel, req, res);
};

export const createUser = async (req, res) => {
  await createItem(StandingModel, req, res);
};

export const getUserById = async (req, res) => {
  await getItemById(StandingModel, req, res);
};

export const updateUserById = async (req, res) => {
  await updateItemById(StandingModel, req, res);
};

export const deleteUserById = async (req, res) => {
  await deleteItemById(StandingModel, req, res);
};

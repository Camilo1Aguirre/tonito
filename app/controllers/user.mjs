import UserModel from '../models/user.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllUsers = async (req, res) => {
  await getAllItems(UserModel, req, res);
};

export const createUser = async (req, res) => {
  await createItem(UserModel, req, res);
};

export const getUserById = async (req, res) => {
  await getItemById(UserModel, req, res);
};

export const updateUserById = async (req, res) => {
  await updateItemById(UserModel, req, res);
};

export const deleteUserById = async (req, res) => {
  await deleteItemById(UserModel, req, res);
};

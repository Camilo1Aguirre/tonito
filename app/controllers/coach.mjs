import CoachModel from '../models/coach.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllCoaches = async (req, res) => {
  await getAllItems(CoachModel, req, res);
};

export const createCoach = async (req, res) => {
  await createItem(CoachModel, req, res);
};

export const getCoachById = async (req, res) => {
  await getItemById(CoachModel, req, res);
};

export const updateCoachById = async (req, res) => {
  await updateItemById(CoachModel, req, res);
};

export const deleteCoachById = async (req, res) => {
  await deleteItemById(CoachModel, req, res);
};

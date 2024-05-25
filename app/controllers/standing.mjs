import StandingModel from '../models/standing.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllStandings = async (req, res) => {
  await getAllItems(StandingModel, req, res);
};

export const createStanding = async (req, res) => {
  await createItem(StandingModel, req, res);
};

export const getStandingById = async (req, res) => {
  await getItemById(StandingModel, req, res);
};

export const updateStandingById = async (req, res) => {
  await updateItemById(StandingModel, req, res);
};

export const deleteStandingById = async (req, res) => {
  await deleteItemById(StandingModel, req, res);
};

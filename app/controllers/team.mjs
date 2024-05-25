import TeamModel from '../models/team.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllTeams = async (req, res) => {
  await getAllItems(TeamModel, req, res);
};

export const createTeam = async (req, res) => {
  await createItem(TeamModel, req, res);
};

export const getTeamById = async (req, res) => {
  await getItemById(TeamModel, req, res);
};

export const updateTeamById = async (req, res) => {
  await updateItemById(TeamModel, req, res);
};

export const deleteTeamById = async (req, res) => {
  await deleteItemById(TeamModel, req, res);
};

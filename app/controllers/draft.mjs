import DraftModel from '../models/draft.mjs';
import { getAllItems } from './controllerMethods/getAllItems.mjs';
import { createItem } from './controllerMethods/createItem.mjs';
import { getItemById } from './controllerMethods/getItemById.mjs';
import { updateItemById } from './controllerMethods/updateItembyId.mjs';
import { deleteItemById } from './controllerMethods/deleteItemById.mjs';

export const getAllDrafts = async (req, res) => {
  await getAllItems(DraftModel, req, res);
};

export const createDraft = async (req, res) => {
  await createItem(DraftModel, req, res);
};

export const getDraftById = async (req, res) => {
  await getItemById(DraftModel, req, res);
};

export const updateDraftById = async (req, res) => {
  await updateItemById(DraftModel, req, res);
};

export const deleteDraftById = async (req, res) => {
  await deleteItemById(DraftModel, req, res);
};

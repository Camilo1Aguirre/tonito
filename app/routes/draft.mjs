import express from 'express';
import {
  getAllDrafts,
  createDraft,
  getDraftById,
  updateDraftById,
  deleteDraftById,
} from '../controllers/draft.mjs';

const router = express.Router();

// Ruta: /Drafts GET
router.get('/', getAllDrafts);
// Ruta: /Drafts POST
router.post('/', createDraft);
// Ruta: /Drafts/:id GET
router.get('/:id', getDraftById);
// Ruta: /Drafts/:id PUT
router.put('/:id', updateDraftById);
// Ruta: /Drafts/:id DELETE
router.delete('/:id', deleteDraftById);

export default router;

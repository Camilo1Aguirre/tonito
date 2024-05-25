import express from 'express';
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/user.mjs';

const router = express.Router();

// Ruta: /users GET
router.get('/', getAllUsers);
// Ruta: /users POST
router.post('/', createUser);
// Ruta: /users/:id GET
router.get('/:id', getUserById);
// Ruta: /users/:id PUT
router.put('/:id', updateUserById);
// Ruta: /users/:id DELETE
router.delete('/:id', deleteUserById);

export default router;

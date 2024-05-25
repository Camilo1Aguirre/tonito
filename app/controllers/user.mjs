import UserModel from '../models/user.mjs';

// Obtener DATA de USUARIOS
export const getAllUsers = async (req, res) => {
  try {
    const query = req.query;
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
    };
    const users = await UserModel.paginate(query, options);
    res.send({ items: users });
  } catch (err) {
    console.error('Error en el servidor:', err);
    res.status(500).send('Error en el servidor');
  }
};

// Insertar DATA de USUARIOS
export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await UserModel.create(userData);
    res.status(201).send({ data: newUser });
  } catch (err) {
    console.error('Error en el servidor al insertar datos:', err);
    res.status(500).send('Error en el servidor al insertar datos');
  }
};

// Obtener un único USUARIO
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.send({ data: user });
  } catch (err) {
    console.error('Error en el servidor al obtener datos:', err);
    res.status(500).send('Error en el servidor al obtener datos');
  }
};

// Actualizar un único USUARIO
export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(id, userData, { new: true });
    if (!updatedUser) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.send({ data: updatedUser });
  } catch (err) {
    console.error('Error en el servidor al actualizar datos:', err);
    res.status(500).send('Error en el servidor al actualizar datos');
  }
};

// Eliminar un único USUARIO
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.send({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    console.error('Error en el servidor al eliminar datos:', err);
    res.status(500).send('Error en el servidor al eliminar datos');
  }
};

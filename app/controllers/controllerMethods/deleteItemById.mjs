export const deleteItemById = async (Model, req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Model.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).send('Elemento no encontrado');
    }
    res.send({ message: 'Elemento eliminado correctamente' });
  } catch (err) {
    console.error('Error en el servidor al eliminar datos:', err);
    res.status(500).send('Error en el servidor al eliminar datos');
  }
};

export const updateItemById = async (Model, req, res) => {
  try {
    const { id } = req.params;
    const itemData = req.body;
    const updatedItem = await Model.findByIdAndUpdate(id, itemData, { new: true });
    if (!updatedItem) {
      return res.status(404).send('Elemento no encontrado');
    }
    res.send({ data: updatedItem });
  } catch (err) {
    console.error('Error en el servidor al actualizar datos:', err);
    res.status(500).send('Error en el servidor al actualizar datos');
  }
};

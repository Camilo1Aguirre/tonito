export const getItemById = async (Model, req, res) => {
  try {
    const { id } = req.params;
    const item = await Model.findById(id);
    if (!item) {
      return res.status(404).send('Elemento no encontrado');
    }
    res.send({ data: item });
  } catch (err) {
    console.error('Error en el servidor al obtener datos:', err);
    res.status(500).send('Error en el servidor al obtener datos');
  }
};

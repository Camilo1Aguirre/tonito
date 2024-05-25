export const createItem = async (Model, req, res) => {
  try {
    const itemData = req.body;
    const newItem = await Model.create(itemData);
    res.status(201).send({ data: newItem });
  } catch (err) {
    console.error('Error en el servidor al insertar datos:', err);
    res.status(500).send('Error en el servidor al insertar datos');
  }
};

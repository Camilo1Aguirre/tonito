export const getAllItems = async (Model, req, res) => {
  try {
    const query = req.query;
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
    };
    const items = await Model.paginate(query, options);
    res.send({ items });
  } catch (err) {
    console.error('Error en el servidor:', err);
    res.status(500).send('Error en el servidor');
  }
};

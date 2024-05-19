const model = require("../models/user");

// Obtener DATA de USUARIOS
exports.getData = async (req, res) => {
  try {
    const query = req.query;
    const docs = await model.find(query);
    res.send({ docs });
  } catch (err) {
    res.status(500).send("Error en el servidor");
  }
};

// Insertar DATA de USUARIOS
exports.insertData = async (req, res) => {
  try {
    const data = req.body;
    const doc = await model.create(data);
    res.status(201).send({ data: doc });
  } catch (err) {
    res.status(500).send("Error en el servidor al insertar datos");
  }
};

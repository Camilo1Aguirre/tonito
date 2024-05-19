const model = require("../models/user");

// Obtener DATA de USUARIOS
exports.getData = (req, res) => {
  // Suponiendo que 'query' es un parámetro enviado en la solicitud (req)
  const query = req.query;

  model
    .find(query)
    .then((docs) => {
      // Cambiado 'result' a 'docs'
      res.send({
        docs: docs, // Cambiado 'docs' a 'docs'
      });
    })
    .catch((err) => {
      res.status(500).send("Error en el servidor"); // Respondiendo con un error 500
    });
};

// Insertar DATA de USUARIOS
exports.insertData = (req, res) => {
  const data = req.body;
  res.send({ data });
};

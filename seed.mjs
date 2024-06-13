import mongoose from 'mongoose';
import LotteryModel from './app/models/lottery.mjs';
import StandingModel from './app/models/standing.mjs';

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/tonito', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Función para calcular las probabilidades
const calculateProbabilities = async () => {
  // Obtener los equipos en las posiciones 15 a 30
  const standings = await StandingModel.find({ position: { $gte: 15, $lte: 30 } }).sort({
    position: 1,
  });
  const totalPositions = standings.length;

  // Calcular el total inverso para las probabilidades
  const totalInversePositions = standings.reduce(
    (sum, standing) => sum + (31 - standing.position),
    0,
  );

  // Crear un arreglo de probabilidades
  const probabilities = standings.map((standing) => {
    const probability = (31 - standing.position) / totalInversePositions;
    return { idStandings: standing._id, probability };
  });

  // Guardar las probabilidades en la colección de lotería
  await LotteryModel.deleteMany({}); // Limpiar colección de lotería existente
  await LotteryModel.insertMany(probabilities);

  console.log('Probabilidades calculadas y guardadas en la base de datos.');
};

// Ejecutar la función de cálculo de probabilidades
calculateProbabilities().then(() => mongoose.disconnect());

import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB from './config/db.mjs';
import bodyParser from 'body-parser';
import routes from './app/routes/index.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware para analizar el cuerpo de las solicitudes
app.use(
  bodyParser.json({
    limit: '20mb',
  }),
);

app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true,
  }),
);

// Rutas
app.use('/api/1.0/', routes);

// Conexión a la BD
connectDB();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('La aplicación está en línea por el puerto', PORT);
});

import mongoose from 'mongoose';

const connectDB = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI);

  mongoose.connection.on('error', (err) => {
    console.error('Error de conexión a la base de datos:', err);
  });

  mongoose.connection.once('open', () => {
    console.log('¡Conexión exitosa a la base de datos!');
  });
};

export default connectDB;

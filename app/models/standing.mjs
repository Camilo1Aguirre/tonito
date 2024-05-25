import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const standingSchema = new Schema(
  {
    idteam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      unique: true,
      required: true,
    },
    balanceWins: {
      type: Number,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// Agregar paginación
standingSchema.plugin(mongoosePaginate);

// Definición del modelo
const StandingModel = model('Standing', standingSchema);

export default StandingModel;

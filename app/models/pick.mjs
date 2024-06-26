import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const pickSchema = new Schema(
  {
    idTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    round: {
      type: Number,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    selection: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// Agregar paginación
pickSchema.plugin(mongoosePaginate);

// Definición del modelo
const PickModel = model('Pick', pickSchema);

export default PickModel;

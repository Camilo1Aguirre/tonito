import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const playerSchema = new Schema(
  {
    idTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    idStyle: {
      type: Schema.Types.ObjectId,
      ref: 'Style',
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 64,
    },
    position: {
      type: String,
      required: true,
      maxlength: 5,
    },
    med: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    contractLength: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    rating: {
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
playerSchema.plugin(mongoosePaginate);

// Definición del modelo
const PlayerModel = model('Player', playerSchema);

export default PlayerModel;

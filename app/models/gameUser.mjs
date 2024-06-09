import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const gameUserSchema = new Schema(
  {
    idUser: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Referencia al modelo User
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 24,
    },
    team: {
      type: String,
      required: true,
      maxlength: 24,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// Agregar paginación
gameUserSchema.plugin(mongoosePaginate);

// Definición del modelo
const GameUserModel = model('GameUser', gameUserSchema);

export default GameUserModel;

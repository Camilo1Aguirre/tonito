import { Schema, model } from 'mongoose';
import mongosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const draftSchema = new Schema(
  {
    idPlayer: {
      type: Schema.Types.ObjectId,
      ref: 'Player',
      required: true,
    },
    position: {
      type: String,
      required: true,
      maxlength: 5,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// Agregar paginación
draftSchema.plugin(mongosePaginate);

// Definición del modelo
const DraftModel = model('Draft', draftSchema);

export default DraftModel;

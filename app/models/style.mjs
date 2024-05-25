import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const styleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    type: {
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
styleSchema.plugin(mongoosePaginate);

// Definición del modelo
const StyleModel = model('Style', styleSchema);

export default StyleModel;

import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const coachSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// Agregar paginación
coachSchema.plugin(mongoosePaginate);

// Definición del modelo
const CoachModel = model('Coach', coachSchema);

export default CoachModel;

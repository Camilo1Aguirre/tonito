import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const teamSchema = new Schema(
  {
    idFinance: {
      type: Schema.Types.ObjectId,
      ref: 'Finance',
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 24,
    },
    idCoach: {
      type: Schema.Types.ObjectId,
      ref: 'Coach',
      required: true,
    },
    conference: {
      type: Boolean,
      required: true,
    },
    division: {
      type: String,
      required: true,
      maxlength: 24,
    },
    wins: {
      type: Number,
      required: true,
    },
    loses: {
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
teamSchema.plugin(mongoosePaginate);

// Definición del modelo
const TeamModel = model('Team', teamSchema);

export default TeamModel;

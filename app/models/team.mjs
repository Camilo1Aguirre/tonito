import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 24,
    },
    idCoach: {
      type: Schema.Types.ObjectId,
      ref: 'Coach',
      required: true,
      unique: true,
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
      default: 0,
    },
    loses: {
      type: Number,
      default: 0,
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

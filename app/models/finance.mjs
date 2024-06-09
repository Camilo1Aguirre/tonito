import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const financeScheme = new Schema(
  {
    idTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    budget: {
      type: Number,
      default: 0,
    },
    expenses: {
      type: Number,
      default: 0,
    },
    salarycap: {
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
financeScheme.plugin(mongoosePaginate);

// Definición del modelo
const FinanceModel = model('Finance', financeScheme);

export default FinanceModel;

import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const lotterySchema = new Schema(
  {
    idStandings: {
      type: Schema.Types.ObjectId,
      ref: 'Standing',
      required: true,
    },
    probability: {
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
lotterySchema.plugin(mongoosePaginate);

// Definición del modelo
const LotteryModel = model('Lottery', lotterySchema);

export default LotteryModel;

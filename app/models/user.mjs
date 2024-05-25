import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definición del esquema
const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
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
userSchema.plugin(mongoosePaginate);

// Definición del modelo
const UserModel = model('User', userSchema);

export default UserModel;

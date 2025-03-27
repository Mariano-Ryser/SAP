import mongoose from 'mongoose';
const { Schema } = mongoose;

const comentarSchema = new Schema({
  titulo: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, default: 0 },
  deleted: { type: Boolean, default: false }
}, { timestamps: true });

export const Comentar = mongoose.model('Comentar', comentarSchema);
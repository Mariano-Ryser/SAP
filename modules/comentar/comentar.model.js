const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentarSchema = new Schema({
  titulo: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, default: 0 },  // Nuevo campo para likes
  deleted: { type: Boolean, default: false },
}, { timestamps: true });

const Comentar = mongoose.model('Comentar', comentarSchema);
module.exports = Comentar;
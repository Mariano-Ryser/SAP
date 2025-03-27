import mongoose from 'mongoose';

const notiSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  text: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  mesCreacion: { type: String },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

const Noti = mongoose.model('Noti', notiSchema);

export default Noti;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticiaSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: false },
  publicId: { type: String, default: '' },
  fuente: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  actualizacion: { type: String, default: () => new Date().toLocaleString() },
  secciones: [{
    subtitulo: String, required: false,
    contenido: String, required: false,
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Noticia', noticiaSchema);



import mongoose from 'mongoose';

const preguntaSchema = new mongoose.Schema({
  pregunta: { type: String, required: true },
  opciones: { type: [String], required: true },
  respuestaCorrecta: { type: String, required: true },
  categoria: {
    type: String,
    enum: ["Ciencia", "Historia", "Geografía", "Arte", "Deporte", "Literatura", "Entretenimiento"],
    required: true
  },
  dificultad: { 
    type: String, 
    enum: ["fácil", "medio", "difícil"], 
    required: true 
  },
  deleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Pregunta", preguntaSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preguntaSchema = new Schema({
  pregunta: { type: String, required: true },
  opciones: { type: [String], required: true },
  respuestaCorrecta: { type: String, required: true },
  categoria: {
    type: String,
    enum: ["Ciencia", "Historia", "Geografía", "Arte", "Deporte", "Literatura", "Entretenimiento"],
    required: true,
  },
  dificultad: { type: String, enum: ["fácil", "medio", "difícil"], required: true },
}, { timestamps: true });

const Pregunta = mongoose.model("Pregunta", preguntaSchema);
module.exports = Pregunta;
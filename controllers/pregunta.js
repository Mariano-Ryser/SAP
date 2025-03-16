const Pregunta = require("../models/pregunta");

const getPreguntas = async (req, res) => {
  const { categoria, dificultad } = req.query; // Filtros opcionales
  const filtro = {};

  if (categoria) filtro.categoria = categoria;
  if (dificultad) filtro.dificultad = dificultad;

  try {
    const preguntas = await Pregunta.find(filtro);
    res.status(200).json({ preguntas });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener preguntas" });
  }
};

const createPregunta = async (req, res) => {
  try {
    const nuevaPregunta = new Pregunta(req.body);
    await nuevaPregunta.save();
    res.status(201).json({ pregunta: nuevaPregunta });
  } catch (error) {
    res.status(500).json({ error: "Error al crear pregunta" });
  }
};

module.exports = { getPreguntas, createPregunta };
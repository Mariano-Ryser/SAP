import Pregunta from './pregunta.model.js';

// Obtener preguntas
export const getPreguntas = async (req, res) => {
  const { categoria, dificultad } = req.query;
  const filtro = {};

  if (categoria) filtro.categoria = categoria;
  if (dificultad) filtro.dificultad = dificultad;

  try {
    const preguntas = await Pregunta.find(filtro);
    res.status(200).json({ preguntas });
  } catch (error) {
    console.error("Error al obtener preguntas:", error);
    res.status(500).json({ error: "Error al obtener preguntas" });
  }
};

// Crear pregunta
export const createPregunta = async (req, res) => {
  try {
    const nuevaPregunta = new Pregunta(req.body);
    await nuevaPregunta.save();
    res.status(201).json({ pregunta: nuevaPregunta });
  } catch (error) {
    console.error("Error al crear pregunta:", error);
    res.status(500).json({ error: "Error al crear pregunta" });
  }
};

// Eliminar pregunta (soft delete)
export const deletePregunta = async (req, res) => {
  try {
    const { id } = req.params;
    await Pregunta.findByIdAndUpdate(id, { deleted: true });
    console.log(`Pregunta eliminada (soft delete): ${id}`);
    res.status(200).json({ ok: true, message: 'Pregunta eliminada con éxito!' });
  } catch (error) {
    console.error("Error al eliminar pregunta:", error);
    res.status(500).json({ ok: false, error: "Error al eliminar pregunta" });
  }
};
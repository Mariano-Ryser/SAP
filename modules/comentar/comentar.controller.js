import { Comentar } from './comentar.model.js';

export const getComentars = async (req, res) => {
  try {
    console.log("Recibo petición de comentarios");
    
    // Opción 1: Orden descendente directo
    const comentars = await Comentar.find({deleted: false})
      .sort({_id: -1})  // Orden descendente
      .limit(155);
    
    // Opción 2: Si necesitas lógica más compleja
    // const allComentars = await Comentar.find({deleted: false}).sort({_id: 1});
    // const comentars = allComentars.slice().reverse().slice(0, 155);
    
    res.status(200).json({ comentars });
  } catch (error) {
    console.error("Error al obtener comentarios:", error);
    res.status(500).json({ error: "Error al obtener comentarios" });
  }
};

export const createComentar = async (req, res) => {
  try {
    const newComentar = new Comentar(req.body);
    const comentar = await newComentar.save();
    console.log(comentar);
    res.status(201).json({ ok: true, comentar });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: 'Error al crear comentario' });
  }
};

export const deleteComentar = async (req, res) => {
  const { id } = req.params;
  await Comentar.findByIdAndUpdate(id, { deleted: true });
  res.status(200).json({ ok: true, message: 'Comentario eliminado con exito!' });
  console.log({ id });
};

export const likeComentar = async (req, res) => {
  const { id } = req.params;
  try {
    const comentarioActualizado = await Comentar.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    
    if (!comentarioActualizado) {
      return res.status(404).json({ ok: false, message: 'Comentario no encontrado' });
    }
    
    res.status(200).json({ ok: true, comentario: comentarioActualizado });
  } catch (error) {
    console.error('Error al agregar like:', error);
    res.status(500).json({ ok: false, message: 'Error al agregar like' });
  }
}; 
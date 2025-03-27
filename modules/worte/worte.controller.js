const Worte = require('./worte.model');

// Obtener todas las palabras no eliminadas
const getWortes = async (req, res) => {
  console.log("recibo peticion")
  const wortes =  (await Worte.find({deleted: false , gelernt: false }).sort({_id: 1})).reverse().slice(0,214);
  res.status(200).json({wortes})
};


// Crear una nueva palabra
const createWorte = async (req, res) => {
  try {
    const newWorte = new Worte(req.body);
    await newWorte.save();
    console.log("✅ Palabra agregada:", newWorte);
    res.status(201).json({ ok: true, data: newWorte });
  } catch (error) {
    console.error("❌ Error al agregar palabra:", error);
    res.status(500).json({ ok: false, message: "Error al agregar palabra" });
  }
};

// Eliminar palabra (soft delete)
const deleteWorte = async (req, res) =>{
  const { id } = req.params
  await Worte.findByIdAndUpdate(id, {
      deleted: true,
  })

  res.status(200).json({ok:true, message: 'Palabra eliminada con exito!'})
  console.log({ id })
}

// Agregar like a una palabra
const likeWorte = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWorte = await Worte.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedWorte) {
      return res.status(404).json({ ok: false, message: "Palabra no encontrada" });
    }
    console.log(`❤️ Like agregado a la palabra ${updatedWorte.palabra}`);
    res.status(200).json({ ok: true, data: updatedWorte });
  } catch (error) {
    console.error("❌ Error al agregar like:", error);
    res.status(500).json({ ok: false, message: "Error al agregar like" });
  }
};

module.exports = { getWortes, createWorte, deleteWorte, likeWorte };

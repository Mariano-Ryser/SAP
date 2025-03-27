import Worte from './worte.model.js';

// Obtener palabras no aprendidas
export const getWortes = async (req, res) => {
    try {
        const wortes = (await Worte.find({ deleted: false, gelernt: false })
                          .sort({ _id: 1 }))
                          .reverse()
                          .slice(0, 214);
        res.status(200).json({ wortes });
    } catch (error) {
        console.error("Error al obtener palabras:", error);
        res.status(500).json({ error: "Error al obtener palabras" });
    }
};

// Crear nueva palabra
export const createWorte = async (req, res) => {
    try {
        const newWorte = new Worte(req.body);
        await newWorte.save();
        console.log("✅ Palabra agregada:", newWorte.palabra);
        res.status(201).json({ ok: true, data: newWorte });
    } catch (error) {
        console.error("❌ Error al agregar palabra:", error);
        res.status(500).json({ ok: false, message: "Error al agregar palabra" });
    }
};

// Eliminar palabra (soft delete)
export const deleteWorte = async (req, res) => {
    try {
        const { id } = req.params;
        await Worte.findByIdAndUpdate(id, { deleted: true });
        console.log(`🗑️ Palabra eliminada (ID: ${id})`);
        res.status(200).json({ ok: true, message: 'Palabra eliminada con éxito!' });
    } catch (error) {
        console.error("❌ Error al eliminar palabra:", error);
        res.status(500).json({ ok: false, error: "Error al eliminar palabra" });
    }
};

// Dar like a palabra
export const likeWorte = async (req, res) => {
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
        
        console.log(`❤️ Like agregado a: ${updatedWorte.palabra}`);
        res.status(200).json({ ok: true, data: updatedWorte });
    } catch (error) {
        console.error("❌ Error al agregar like:", error);
        res.status(500).json({ ok: false, message: "Error al agregar like" });
    }
};
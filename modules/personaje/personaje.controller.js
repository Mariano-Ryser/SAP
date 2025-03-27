import Personaje from './personaje.model.js';

// Obtener personajes
export const getPersonajes = async (req, res) => {
    try {
        const sort = -1;
        const personajes = await Personaje.find({deleted: false}).sort({_id: sort});
        res.status(200).json({ personajes });
    } catch (error) {
        console.error("Error al obtener personajes:", error);
        res.status(500).json({ error: "Error al obtener personajes" });
    }
};

// Crear personaje
export const createPersonaje = async (req, res) => {
    try {
        if(!req.body.name) {
            return res.status(400).json({
                ok: false,
                message: 'El nombre es obligatorio'
            });
        }

        const newPersonaje = new Personaje(req.body);
        const personaje = await newPersonaje.save();
        console.log(personaje);
        res.status(201).json({ ok: true, personaje });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, error: "Error al crear personaje" });
    }
};

// Eliminar personaje (soft delete)
export const deletePersonaje = async (req, res) => {
    try {
        const { id } = req.params;
        await Personaje.findByIdAndUpdate(id, { deleted: true });
        console.log({ id });
        res.status(200).json({ ok: true, message: 'Personaje eliminado con éxito!' });
    } catch (error) {
        console.error("Error al eliminar personaje:", error);
        res.status(500).json({ ok: false, error: "Error al eliminar personaje" });
    }
};
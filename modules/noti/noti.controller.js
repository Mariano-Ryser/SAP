import Noti from './noti.model.js';

export const getNotis = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const notis = await Noti.find({deleted: false})
      .sort({createdAt: -1})
      .skip(skip)
      .limit(limit);

    const total = await Noti.countDocuments({deleted: false});
    const hasMore = total > (page * limit);

    res.status(200).json({
      notis,
      pagination: {
        page,
        limit,
        total,
        hasMore
      }
    });
  } catch (error) {
    console.error("Error al obtener notificaciones:", error);
    res.status(500).json({error: "Error al obtener notificaciones"});
  }
};

export const createNoti = async (req, res) => {
  try {
    const newNoti = new Noti(req.body);
    const noti = await newNoti.save();
    console.log(noti);
    res.status(201).json({ok: true, noti});
  } catch (err) {
    console.error(err);
    res.status(500).json({ok: false, error: "Error al crear notificación"});
  }
};

export const deleteNoti = async (req, res) => {
  const { id } = req.params;
  await Noti.findByIdAndUpdate(id, { deleted: true });
  res.status(200).json({ok: true, message: 'Noti eliminado con éxito!'});
  console.log({ id });
};

export const likeNoti = async (req, res) => {
  const { id } = req.params;
  try {
    const notiActualizado = await Noti.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    
    if (!notiActualizado) {
      return res.status(404).json({ ok: false, message: 'Noti no encontrado' });
    }
    
    console.log(`❤️ Like agregado a la nota "${notiActualizado.titulo}"`);
    res.status(200).json({ ok: true, noti: notiActualizado });
  } catch (error) {
    console.error('Error al agregar like:', error);
    res.status(500).json({ ok: false, message: 'Error al agregar like' });
  }
};
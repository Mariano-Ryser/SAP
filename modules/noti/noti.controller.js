//modules/noti/noti.controller.js
const Noti = require('./noti.model')


const getNotis = async (req, res) => {
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
}

const createNoti = (req, res) => {
    const newNoti = new Noti(req.body)
    newNoti
    .save()
    .then( (noti) => {
      res.status(201).json({ok: true, noti})
      console.log(noti)
      console.log(noti.titulo)
       }).catch((err) => console.log(err))
      }

const deleteNoti = async (req, res) =>{
        const { id } = req.params
        await Noti.findByIdAndUpdate(id, {
            deleted: true,
        })

        res.status(200).json({ok:true, message: 'Notii eliminado con exito!'})
        console.log({ id })
     }

const likeNoti = async (req, res) => {
        const { id } = req.params;
        try {
          // Encuentra el comentario y aumenta los likes en 1
          const notiActualizado = await Noti.findByIdAndUpdate(
            id,
            { $inc: { likes: + 1 } },
            { new: true } // Devuelve el comentario actualizado
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

module.exports = {
        getNotis,
        createNoti,
        deleteNoti,
        likeNoti,
     }

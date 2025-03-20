const Noti = require('../models/noti')

//Obtener Notis
const getNotis = async (req, res) => { 
  const notis =  (await Noti.find({deleted: false}).sort({_id: 1})).reverse().slice(0,2);
    res.status(200).json({notis})
    console.log("Notas fetched con Exito !")
}
//Create Noti
const createNoti = (req, res) => {
    const newNoti = new Noti(req.body)
    newNoti
    .save().catch((err) => console.log(err))}

//Delete Noti
const deleteNoti = async (req, res) =>{
        const { id } = req.params
        await Noti.findByIdAndUpdate(id, {
            deleted: true,
        })

        res.status(200).json({ok:true, message: 'Notiio eliminado con exito!'})
        console.log({ id })
     }
//Dar like a una nota
const likeNoti = async (req, res) => {
        const { id } = req.params;
        try {
          // Encuentra el comentario y aumenta los likes en 1
          const notiActualizado = await Noti.findByIdAndUpdate(
            id,
            { $inc: { likes: +1 } },
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


//Exportar funciones
module.exports = {
        getNotis,
        createNoti,
        deleteNoti,
        likeNoti,
     }

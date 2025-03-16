const Noti = require('../models/noti')

const getNotis = async (req, res) => { 
  console.log("recibo peticion")
  const notis =  (await Noti.find({deleted: false}).sort({_id: 1})).reverse().slice(0,155);

      
        //Aqui Solo seran los textos que empiezen con Ba
        // const notis =  (await Noti.find({ text: /^Ba/ }))
        
        // Aqui son las palabras que empiezen con "A" o con "B" o con "M"
        // const notis =  (await Noti.find({ text: /^[ABM]/ })) 
        
        // Aqui son las Textos que en cualquier lugar contengan la palabra "pajarito", el "/i" significa que puede ser con letra grande
        // const notis =  (await Noti.find({ text: /pajarito/i })) 
        
        // LLamando a funcion que remplaza palabras..
      
        
    //Noti.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res}))
    // res.status(200).json({ok:true, data: notis, count: notis.length})
    res.status(200).json({notis})

    

}

const createNoti = (req, res) => {
    const newNoti = new Noti(req.body)
    newNoti

    .save().catch((err) => console.log(err))
     }
     
const deleteNoti = async (req, res) =>{
        const { id } = req.params
        await Noti.findByIdAndUpdate(id, {
            deleted: true,
        })

        res.status(200).json({ok:true, message: 'Notiio eliminado con exito!'})
        console.log({ id })
     }

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

module.exports = {
        getNotis,
        createNoti,
        deleteNoti,
        likeNoti,
     }

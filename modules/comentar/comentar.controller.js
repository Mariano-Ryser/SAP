const Comentar = require('./comentar.model')

const getComentars = async (req, res) => { 
  console.log("recibo peticion")
  const comentars =  (await Comentar.find({deleted: false}).sort({_id: 1})).reverse().slice(0,155);
    //Comentar.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res}))
    // res.status(200).json({ok:true, data: comentars, count: comentars.length})
    res.status(200).json({comentars})
}
const createComentar = (req, res) => {
    const newComentar = new Comentar(req.body)
    newComentar
    .save()
    .then( (comentar) => {
             res.status(201).json({ok: true, comentar})
             console.log(comentar)
             console.log(comentar.titulo)     
              }).catch((err) => console.log(err))
     }  
const deleteComentar = async (req, res) =>{
        const { id } = req.params
        await Comentar.findByIdAndUpdate(id, {
            deleted: true,
        })

        res.status(200).json({ok:true, message: 'Comentario eliminado con exito!'})
        console.log({ id })
     }
     // Controlador para agregar likes
const likeComentar = async (req, res) => {
  const { id } = req.params;

  try {
    // Encuentra el comentario y aumenta los likes en 1
    const comentarioActualizado = await Comentar.findByIdAndUpdate(
      id,
      { $inc: { likes: + 1 } },
      { new: true } // Devuelve el comentario actualizado
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

module.exports = {
        getComentars,
        createComentar,
        deleteComentar,
        likeComentar,  // Exportamos el nuevo controlador
     }

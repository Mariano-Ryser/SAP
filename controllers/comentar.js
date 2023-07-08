const Comentar = require('../models/comentar')


const fs = require('fs')


const getComentars = async (req, res) => {
    const comentars = await (await Comentar.find({deleted: false}).sort({_id:1})).slice(-65).reverse()
    // Comentar.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res}))
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
          
             fs.appendFile('mensajes.txt', comentar.titulo, (error) =>{
                if(error) throw error;
                console.log("Archivo creado correctamente")
            })
               
              })
             .catch((err) => console.log(err))
     }
     
 const deleteComentar = async (req, res) =>{
        const { id } = req.params
        await Comentar.findByIdAndUpdate(id, {
            deleted: true,
        })
        res.status(200).json({ok:true, message: 'Comentario eliminado con exito!'})
        console.log({ id })
     }

     module.exports = {
        getComentars,
        createComentar,
        deleteComentar,
     }
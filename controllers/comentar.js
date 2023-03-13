const Comentar = require('../models/comentar')

const getComentars = async (req, res) => {
    const comentars = await (await Comentar.find({deleted: false}).sort({_id:1})).slice(-10).reverse()
    // Comentar.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res}))
    // res.status(200).json({ok:true, data: comentars, count: comentars.length})
    res.status(200).json({comentars})
    }

const createComentar = (req, res) => {
    // if(!req.body.titulo){
    //     res.status(400).json({
    //         ok:false,
    //         message:'El campo comentar es obligatorio'
    //     })
    //     return
    // }
    // if(!req.body.text){
    //     res.status(400).json({
    //         ok:false,
    //         message:'El campo comentar es obligatorio'
    //     })
    //     return
    // }
    // if(!req.body.author){
    //     res.status(400).json({
    //         ok:false,
    //         message:'El campo comentar es obligatorio'
    //     })
    //     return
    // }
        const newComentar = new Comentar(req.body)
         newComentar
             .save()
             .then( (comentar) => {
             res.status(201).json({ok: true, comentar})
             console.log(comentar)
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
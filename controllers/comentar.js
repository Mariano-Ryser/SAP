const Comentar = require('../models/comentar')

const getComentars = async (req, res) => {
    const comentars = await Comentar.find({deleted: false}).sort({_id:-1}) 
    // res.status(200).json({ok:true, data: comentars, count: comentars.length})
    res.status(200).json({comentars})
    }

const createComentar = (req, res) => {
    if(!req.body.text){
        res.status(400).json({
            ok:false,
            message:'El campo comentar del producto es obligatorio'
        })
        return
    }
        const newComentar = new Comentar(req.body)
         newComentar
             .save()
             .then( (comentar) => {
             res.status(201).json({ok: true, comentar})
             console.log(comentar)
              })
             .catch((err) => console.log(err))
            // next()
     }

 const deleteComentar = async (req, res) =>{
        const { id } = req.params

        await Comentar.findByIdAndUpdate(id, {
            deleted: true,
        })
        res.status(200).json({ok:true, message: 'Comentar eliminado con exito!'})
        console.log({ id })
     }

     module.exports = {
        getComentars,
        createComentar,
        deleteComentar
     }
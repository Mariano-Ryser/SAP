const Personaje = require('./personaje.model')

//Obtener Personajes
const getPersonajes = async (req, res) => {
    sort=-1;
    const personajes = await Personaje.find({deleted: false}).sort({_id:`${sort}`}) 
    // res.status(200).json({ok:true, data: products, count: products.length})
    res.status(200).json({personajes})
    }
//Create Personaje
const createPersonaje = (req, res) => {
    if(!req.body.name){
        res.status(400).json({
            ok:false,
            message:'El campo es obligatorio forro!'
        })
        return
    }

const newPersonaje = new Personaje(req.body)
         newPersonaje
             .save().then( (personaje) => {
             res.status(201).json({ok: true, personaje})
             console.log(personaje)
              })
             .catch((err) => console.log(err))
            // next()
     }
//Delete Personaje
const deletePersonaje = async (req, res) =>{
    const { id } = req.params

    await Personaje.findByIdAndUpdate(id, {
        deleted: true,
    })
    res.status(200).json({ok:true, message: 'Personaje eliminado con exito!'})
    console.log({ id })
}

//Exportar funciones
     module.exports = {
        getPersonajes,
        createPersonaje,
        deletePersonaje
     }

 
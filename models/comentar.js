// requerimos mongoose

const mongoose = require('mongoose')



const comentarSchema = mongoose.Schema({
    titulo:{type: String, required: true},
    text: {type: String, required: true},
    author: {type: String, required: true},
    deleted: {type: Boolean, default: false},
    mesCreacion: {type: String, },
},


{ timestamps: true })


//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN

const Comentar = mongoose.model('Comentar', comentarSchema,)

    //Exportamos modulo 
    module.exports = Comentar 
    
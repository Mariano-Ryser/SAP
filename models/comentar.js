const mongoose = require('mongoose')

// // CREAMOS EL ESQUEMA DEL BOXCOMENTAR LA BASE DE DATOS EN MONGO
const comentarSchema = mongoose.Schema({
    text: {type: String, required: true},
},
{ timestamps: true })

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const Comentar = mongoose.model('Comentar', comentarSchema,)


module.exports = Comentar 
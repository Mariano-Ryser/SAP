const mongoose = require('mongoose')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const personajeSchema = mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    age: Number, // <-- if(365) + 1
    email: {type: String,required: true},
    city: {type: String,required: true},
    description: {type: String,required: true},
    deleted: {type: Boolean, default: false},
    },

{ timestamps: true })

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const Personaje = mongoose.model('Personaje', personajeSchema,)  

//EXPORTACION DE MODULO
module.exports = Personaje

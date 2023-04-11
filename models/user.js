const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const UserSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    password: {type: string, required: true },
},
{ timestamps: true })


//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const User = mongoose.model('User', productSchema,)  


//EXPORTACION DE MODULO
module.exports = Product

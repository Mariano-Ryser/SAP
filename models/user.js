const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const UserSchema = mongoose.Schema({
   firstname:String


   

},
{ timestamps: true })


//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const User = mongoose.model('User', userSchema,)  


//EXPORTACION DE MODULO
module.exports = User

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const UserSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: [true, "Email is required"],
       
    },
      fullName:{
        type: String,
        required: [true, "Full name is required"],
        minLength: [4, "Full name should be atleast 4 characters long"],
        maxLength: [30, "Full name should be less than 30 characters"]

      } ,
      password:{
        type:String,
        required: [true, "password is required"],
        select:false,
      } 

},
{ timestamps: true })


//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const User = mongoose.model('User', userSchema,)  


//EXPORTACION DE MODULO
module.exports = User

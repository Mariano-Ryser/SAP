const mongoose = require('mongoose')

// // CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
},
{ timestamps: true })


//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const Product = mongoose.model('Product', productSchema,)  


//EXPORTACION DE MODULO
module.exports = Product

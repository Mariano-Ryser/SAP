const mongoose = require('mongoose')

// // CREAMOS EL ESQUEMA DE LA BASE DE DATOS EN MONGO
const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
},
{ timestamps: true })

const Product = mongoose.model('Product', productSchema,)  //ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN

module.exports = Product
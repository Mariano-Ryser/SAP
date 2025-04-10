const mongoose = require('mongoose')

// CREAMOS EL ESQUEMA DEL PRODUCTO LA BASE DE DATOS EN MONGO
const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: { type: mongoose.Types.Decimal128, required: true },
    category: {type: String, required: true},
    supplier: {type: String, required: true},
    description: {type: String, required: false},
    lugarDeVenta: { type: String, required: true },
    marca: {type: String, required: true},
    publicId: { type: String, default: '' },
    imagen: { type: String, required: false },
    deleted: {type: Boolean, default: false},
},
{ timestamps: true })

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN
const Product = mongoose.model('Product', productSchema)  
//EXPORTACION DE MODULO
module.exports = Product
// requerimos mongoose
const mongoose = require('mongoose')

const comentarSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    mesCreacion: { type: String },
    likes: { type: Number, default: 0 },  // Nuevo campo para contar "Me gusta"
    likedBy: { type: [String], default: [] }  // Opcional: lista de usuarios que dieron "Me gusta"
}, { timestamps: true });

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN

const Comentar = mongoose.model('Comentar', comentarSchema,)

    //Exportamos modulo 
    module.exports = Comentar 
    
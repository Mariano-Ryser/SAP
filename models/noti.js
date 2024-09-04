// requerimos mongoose
const mongoose = require('mongoose')

const notiSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    text: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    mesCreacion: { type: String },
    likes: { type: Number, default: 0 },  // Nuevo campo para contar "Me gusta"
    likedBy: { type: [String], default: [] }  // Opcional: lista de usuarios que dieron "Me gusta"
}, { timestamps: true });

//ALMACENAMOS EN UNA CONSTANTE EL MODELADO DEL ALMACEN

const Noti = mongoose.model('Noti', notiSchema,)

    //Exportamos modulo 
    module.exports = Noti 
    
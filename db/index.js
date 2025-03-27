import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno PRIMERO
dotenv.config();

mongoose.set('strictQuery', true);

const PORT = process.env.PORT;
const dbConnect = (app) => {
    // Conexión con MongoDB Atlas
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then((result) => {
        const server = app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
        
        // Manejo de errores del servidor
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.error(`Error: El puerto ${PORT} ya está en uso.`);
            } else {
                console.error('Error al iniciar el servidor:', err);
            }
        });
        
        // Mensajes de conexión exitosa
        setTimeout(() => {
            console.log("Conexión exitosa a MongoDB.../db/index.js");
        }, 800);

        setTimeout(() => {
            console.log("...");
        }, 100);

        /*
        // Ejemplo de actualización masiva (descomentar si es necesario)
        // Comentar.updateMany({}, {$set: {deleted: false}}).then(res => console.log({res}))
        
        // ¡No usar esta función! Error en Database Delete
        // Comentar.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res}))
        */
    })
    .catch((err) => {
        console.error("Error de conexión a MongoDB. Posible desconexión de internet!", err);
        process.exit(1); // Salir del proceso con error
    });
};

export default dbConnect;
require('dotenv').config(); // Cargar variables de entorno
const mongoose = require('mongoose');
const Comentar = require('../models/comentar'); // Asegúrate de que el path sea correcto

mongoose.set('strictQuery', true)
// Conexión a MongoDB usando la misma URI que en tu proyecto
const mongoURI = `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB...'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Datos de ejemplo con estructura completa
const comentarios = [
  { titulo: "Increíble trabajo", text: "¡Felicidades por todo el esfuerzo que has puesto! Sigue así.", author: "Carlos", likes: 8, deleted: false },
 { titulo: "Excelente trabajo", text: "Cada día demuestras que lo mejor está por venir. ¡Sigue así!", author: "Héctor", likes: 10, deleted: false }
];

// Función para poblar la base de datos
const seedDB = async () => {
  try {
    await Comentar.deleteMany({}); // Borra los comentarios previos (opcional)
    await Comentar.insertMany(comentarios); // Inserta los nuevos comentarios
    console.log('🌱 Base de datos poblada con éxito 🚀');
  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
  } finally {
    mongoose.connection.close(); // Cierra la conexión a MongoDB
  }
};

// Ejecutar el script
seedDB();
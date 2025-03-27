require('dotenv').config();
const mongoose = require('mongoose');
const Worte = require('../models/worte'); // Asegúrate de que la ruta al modelo sea correcta

const mongoURI = `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB...'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

const updateSchema = async () => {
  try {
    // Agrega el campo "aprendida" a todos los documentos si no existe
    const result = await Worte.updateMany(
      { gelernt: { $exists: false } }, // Solo actualiza documentos que no tengan "aprendida"
      { $set: { gelernt: false } } // Agrega "aprendida: false"
    );

    console.log(`✅ Se actualizaron ${result.modifiedCount} documentos con el campo "aprendida" 🚀`);
  } catch (error) {
    console.error('❌ Error al actualizar la base de datos:', error);
  } finally {
    mongoose.connection.close();
  }
};

updateSchema();
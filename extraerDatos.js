require('dotenv').config(); // Cargar variables de entorno
const mongoose = require('mongoose');
const fs = require('fs');
const Comentar = require('./modules/comentar/comentar.model'); // Asegúrate de que el path sea correcto

// Configuración de la conexión a MongoDB
const mongoURI = `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);

// Conectar a la base de datos
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB...'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Función para exportar los comentarios a un archivo .txt
async function exportarComentarios() {
  try {
    // Obtener todos los comentarios de la base de datos y excluir el _id
    const comentarios = (await Comentar.find({}, { _id: 0, __v: 0 })).reverse();

    // Función para formatear los objetos sin comillas en las claves
    const formatoPersonalizado = comentarios.map(comentario => {
      return `{
  titulo: "${comentario.titulo}",
  text: "${comentario.text}",
  author: "${comentario.author}",
  likes: ${comentario.likes},
  deleted: ${comentario.deleted}
}`;
    }).join(',\n\n'); // Separador entre objetos

    // Guardar el contenido formateado en un archivo .txt
    fs.writeFileSync('comentarios.txt', `[${formatoPersonalizado}]`);

    console.log('✅ Los datos han sido guardados en comentarios.txt');
  } catch (error) {
    console.error('❌ Error al obtener los comentarios:', error);
  } finally {
    mongoose.connection.close(); // Cerrar la conexión a MongoDB
  }
}

// Ejecutar el script para exportar los comentarios
exportarComentarios();
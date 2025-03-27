require('dotenv').config();
const mongoose = require("mongoose");
const Pregunta = require("../models/pregunta"); // Asegúrate de que la ruta sea correcta

const mongoURI = `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB...'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Datos de ejemplo
const preguntas = [
  {
    pregunta: "¿Cuál es el planeta más cercano al Sol?",
    opciones: ["Tierra", "Venus", "Mercurio", "Marte"],
    respuestaCorrecta: "Mercurio",
    categoria: "Ciencia",
    dificultad: "fácil",
  },
  {
    pregunta: "¿Quién pintó la Mona Lisa?",
    opciones: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    respuestaCorrecta: "Leonardo da Vinci",
    categoria: "Arte",
    dificultad: "fácil",
  },
  {
    pregunta: "¿Cuál es el río más largo del mundo?",
    opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    respuestaCorrecta: "Amazonas",
    categoria: "Geografía",
    dificultad: "medio",
  },
  // Agrega más preguntas con categorías y dificultades...
];

// Función para agregar las preguntas a la base de datos
const seedPreguntas = async () => {
  try {
    await Pregunta.deleteMany({}); // Elimina todas las preguntas existentes
    await Pregunta.insertMany(preguntas); // Inserta las nuevas preguntas
    console.log("Preguntas agregadas exitosamente!");
  } catch (error) {
    console.error("Error al agregar preguntas:", error);
  } finally {
    mongoose.connection.close(); // Cierra la conexión a la base de datos
  }
};

// Ejecuta el semillero
seedPreguntas();
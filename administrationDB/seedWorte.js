require('dotenv').config();
const mongoose = require('mongoose');
const Worte = require('../models/worte');

const mongoURI = `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB...'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

const palabrasAleman = [{
  palabra: "Bewusstsein",
  significado: "Conciencia, conocimiento",
  ejemplo1: "Das Bewusstsein für Umweltthemen wächst. (Awareness of environmental issues is growing)",
  ejemplo2: "Sein Bewusstsein für die Probleme der Gesellschaft ist bemerkenswert. (His awareness of society's problems is remarkable)",
  ejemplo3: "undefined",
  deleted: false,
  likes: 0
},
];

const seedDB = async () => {
  try {
    await Worte.deleteMany({});
    await Worte.insertMany(palabrasAleman);
    console.log('🌱 Base de datos de palabras poblada con éxito 🚀');
  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
  } finally {
    mongoose.connection.close();
  }
};
// Ejecuta el semillero
seedDB();
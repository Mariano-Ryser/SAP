const mongoose = require('mongoose')

const dbConnect = (app) => {
// // // CONECCION CON LA BASE DE DATOS MONGO DB MONGOSE!
mongoose.connect(
    `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then( (result) => {
        app.listen(PORT, () => {
            console.log(`servidor escuchando en puerto ${PORT}`)
        })
        console.log("Conexion exitosa, mongo db")
    })
     .catch((err) => console.log(err))

}
module.exports = dbConnect

const PORT = process.env.PORT


// console.log({module})
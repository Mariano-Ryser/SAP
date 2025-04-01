const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const dbConnect = (app) => {
    // // // CONECCION CON LA BASE DE DATOS, MONGO DB MONGOSE!
    mongoose.connect(
        `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
          }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
              console.error(`Error: El puerto ${PORT} ya está en uso.`);
            } else {
              console.error('Error al iniciar el servidor:', err);
            }
          });
        
        setTimeout(()=>{
            console.log("conexion exitosa a mongoDB.../db/index.js")
            },800);

        setTimeout(()=>{
                console.log("...")
                },100);

    
        //Agregamos a products o Comentarios la propiedad (deleted:false) con mongoo-
        //Comentar.updateMany({}, {$set:{deleted: false}}).then(res => console.log({res}))
        

         // dont use this function!! error in Database Delete please...
        // Change all deleted Value "true" for deleted "False"   
         //Comentar.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res})) 
    })
     .catch((err) => console.log("error error!! Posible desconexion de internet!",err))
}
module.exports = dbConnect

const PORT = process.env.PORT


//  console.log({module})





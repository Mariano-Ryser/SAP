const mongoose = require('mongoose')



const dbConnect = (app) => {
// // // CONECCION CON LA BASE DE DATOS, MONGO DB MONGOSE!
mongoose.connect(
    `mongodb+srv://MR-2291:${process.env.MONGO_DB_PASS}@cluster0.brhpx.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`servidor escuchando en puerto ${PORT}`)
        })
        
     
        setTimeout(()=>{
            console.log("conexion exitosa a mongoDB...")
            },1200);

        setTimeout(()=>{
                console.log("...")
                },2000);

    
        
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




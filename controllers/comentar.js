const Comentar = require('../models/comentar')
// const fs = require('fs')

// async function eliminarComentariosConPajarito(req, res) {
//     const comentars =  (await Comentar.deleteMany({ text: /pajarito/i }))
// }

// FUNCIONES AUTOMATIZADAS ACTUALIZANDO Y MODIFICANDO BASE DE DATOS

async function updateComentariosNegativos(req, res) {
    try {
        // Define un objeto que mapea palabras a sus reemplazos
        const reemplazos = {
          'pelotudo': '(censured)',
          'gil': '(censured)',
          'idiota': '(censured)',
          'boludo': '(censured)',
          'sopenco': '(censured)',
          'nabo': '(censured)',
          'mierda': '(censured)',
          'tonto': '(censured)',
          'mogolico': '(censured)'
          // Agrega más palabras y sus reemplazos aquí si es necesario
        };
    
        // Encuentra todos los comentarios que contienen cualquiera de las palabras del objeto "reemplazos"
        const comentariosConPalabras = await Comentar.find({
          titulo: { $regex: new RegExp(Object.keys(reemplazos).join('|'), 'gi') },
          text: { $regex: new RegExp(Object.keys(reemplazos).join('|'), 'gi') },
          author: { $regex: new RegExp(Object.keys(reemplazos).join('|'), 'gi') },
        });
    
        // Prepara las operaciones de actualización
        const operacionesDeActualizacion = comentariosConPalabras.map(comentario => {

          let tituloActualizado = comentario.titulo
          let textoActualizado = comentario.text
          let authorActualizado = comentario.author
          // Itera a través del objeto de reemplazos y realiza los reemplazos
          for (const palabra in reemplazos) {
            tituloActualizado = tituloActualizado.replace(new RegExp(palabra, 'gi'), reemplazos[palabra])
            textoActualizado = textoActualizado.replace(new RegExp(palabra, 'gi'), reemplazos[palabra])
            authorActualizado = authorActualizado.replace(new RegExp(palabra, 'gi'), reemplazos[palabra]);
          }
          return {
            updateOne: {
              filter: { _id: comentario._id },
              update: { $set: { titulo: tituloActualizado, text: textoActualizado, author: authorActualizado} },
             
            },
          };
        });
    
        // Ejecuta las operaciones de actualización en lotes
        const resultado = await Comentar.bulkWrite(operacionesDeActualizacion);
    
        // Imprime la cantidad de documentos actualizados
        console.log(`Se actualizaron ${resultado.modifiedCount} documentos.`);
    
        // Envía una respuesta adecuada al cliente si es una API
        res.status(200).send(`Se actualizaron ${resultado.modifiedCount} documentos.`);
      } catch (error) {
        console.error('No se han encontrado palabras para modificar');
        // Maneja el error apropiadamente, por ejemplo, enviando una respuesta de error al cliente si es una API.
      }
  }

// async function updateComentariosConPajarito(req, res) {
//     try {
//         // Define un objeto que mapea palabras a sus reemplazos
//         const reemplazos = {
//           'pajarito': 'elefante',
//           'sandia': 'melocoton',
//           'nube': 'sol',
//           'arboles': 'flores'
//           // Agrega más palabras y sus reemplazos aquí si es necesario
//         };
    
//         // Encuentra todos los comentarios que contienen cualquiera de las palabras del objeto reemplazos
//         const comentariosConPalabras = await Comentar.find({
//           text: { $regex: new RegExp(Object.keys(reemplazos).join('|'), 'gi') },
//         });
    
//         // Prepara las operaciones de actualización
//         const operacionesDeActualizacion = comentariosConPalabras.map(comentario => {
//           let textoActualizado = comentario.text;
//           // Itera a través del objeto de reemplazos y realiza los reemplazos
//           for (const palabra in reemplazos) {
//             textoActualizado = textoActualizado.replace(new RegExp(palabra, 'gi'), reemplazos[palabra]);
//           }
//           return {
//             updateOne: {
//               filter: { _id: comentario._id },
//               update: { $set: { text: textoActualizado } },
//             },
//           };
//         });
    
//         // Ejecuta las operaciones de actualización en lotes
//         const resultado = await Comentar.bulkWrite(operacionesDeActualizacion);
    
//         // Imprime la cantidad de documentos actualizados
//         console.log(`Se actualizaron ${resultado.modifiedCount} documentos.`);
    
//         // Envía una respuesta adecuada al cliente si es una API
//         res.status(200).send(`Se actualizaron ${resultado.modifiedCount} documentos.`);
//       } catch (error) {
//         console.error('Error al actualizar comentarios:', error);
//         // Maneja el error apropiadamente, por ejemplo, enviando una respuesta de error al cliente si es una API.
//       }
     
//   }
  



const getComentars = async (req, res) => { 
  console.log("recibo peticion")
  const comentars =  (await Comentar.find({deleted: false}).sort({_id: 1})).reverse().slice(0,155);
  updateComentariosNegativos()
      
        //Aqui Solo seran los textos que empiezen con Ba
        // const comentars =  (await Comentar.find({ text: /^Ba/ }))
        
        // Aqui son las palabras que empiezen con "A" o con "B" o con "M"
        // const comentars =  (await Comentar.find({ text: /^[ABM]/ })) 
        
        // Aqui son las Textos que en cualquier lugar contengan la palabra "pajarito", el "/i" significa que puede ser con letra grande
        // const comentars =  (await Comentar.find({ text: /pajarito/i })) 
        
        // LLamando a funcion que remplaza palabras..
      
        
    //Comentar.update({deleted: "true"}, {$set: {deleted: "false"}}).then(res => console.log({res}))
    // res.status(200).json({ok:true, data: comentars, count: comentars.length})
    res.status(200).json({comentars})

    

}

const createComentar = (req, res) => {
    const newComentar = new Comentar(req.body)
    newComentar

    .save()
    .then(updateComentariosNegativos())
    // .then(updateComentariosConPajarito())
    .then( (comentar) => {
             res.status(201).json({ok: true, comentar})
             console.log(comentar)
             console.log(comentar.titulo)

            //  FILE SYSTEM
            //  fs.appendFile('mensajes.js', comentar.titulo, (error) =>{
            //     if(error) throw error;
            //     console.log("Archivo creado correctamente")
            // })
               
              })
              
             .catch((err) => console.log(err))
     }
     
const deleteComentar = async (req, res) =>{
        const { id } = req.params
        await Comentar.findByIdAndUpdate(id, {
            deleted: true,
        })

        res.status(200).json({ok:true, message: 'Comentario eliminado con exito!'})
        console.log({ id })
     }

module.exports = {
        getComentars,
        createComentar,
        deleteComentar,
     }

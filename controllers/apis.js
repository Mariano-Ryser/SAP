const meteoros = require('../apis/meteoros.json')
const fs = require('fs');

const mongoose = require('mongoose')

// app.get('/api/v1/meteoros', (req,res) => {
//     res.json(meteoros)
//     console.log(meteoros)
//   })

let requestCount = 0;

// Cargar el valor anterior del contador desde el archivo (si existe)

// fs.readFile('request_count.txt', 'utf8', (err, data) => {
//     if (!err) {
//       requestCount = parseInt(data);
//     }
//   });

const getApis = async (req, res) => {
    // res.status(200).json(meteoros)
    res.send(meteoros).json

    requestCount++;

  // Guardar el nuevo valor del contador en el archivo
  // fs.writeFile('request_count.txt', requestCount.toString(), (err) => {
  //   if (err) {
  //     console.error('Error al guardar el valor del contador en el archivo.');
  //   }
  // });

  console.log('se han echo: ', requestCount , " Peticiones");

}

module.exports = {
    getApis,
 }
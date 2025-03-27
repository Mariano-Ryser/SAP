const fs = require('fs');
const path = require('path');

// Ruta de la carpeta donde están los archivos
const folderPath = './models'; // Cambia la ruta según tu proyecto

// Leer todos los archivos de la carpeta
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error leyendo la carpeta:', err);
    return;
  }

  files.forEach((file) => {
    // Verifica que sea un archivo .js y que NO tenga ya .routes
    if (file.endsWith('.js') && !file.includes('.model')) {
      const oldPath = path.join(folderPath, file);
      const fileNameWithoutExt = path.basename(file, '.js');
      const newFileName = `${fileNameWithoutExt}.model.js`;
      const newPath = path.join(folderPath, newFileName);

      // Renombra el archivo
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renombrando ${file}:`, err);
        } else {
          console.log(`✅ ${file} renombrado a ${newFileName}`);
        }
      });
    }
  });
});
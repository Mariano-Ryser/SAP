require('dotenv').config();
const cloudinary  = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dgkidoifi',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
    
});

(async function() {
    const results = await cloudinary.uploader.upload('./images/oja.png')
    console.log(results)

    const url = cloudinary.url(results.public_id, {
        transformation:[
            {
                quality:'auto',
                fetch_format:'auto',
            },
            {
                width: 300, // Ancho deseado
                height: 300, // Alto deseado
                crop:'fill',
                gravity:'auto'
                
            },
        ]
    })
    console.log(url)
})();
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

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

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
},
 { timestamps: true }
)
const Product = mongoose.model('Product', productSchema,)

 app.use(express.json())


 app.post('/api/v1/products', async (req, res, next) => {
 console.log("Peticion recibida ")
 console.log({ body: req.body })

 const newProduct = new Product(req.body)

 await newProduct
 .save()
 .then( result => {
     res.status(201).json({ok: true})
 })
 .catch((err) => console.log(err))

//  next()
 } )

app.use(express.static(path.join(__dirname, 'public'))) 

const PORT = process.env.PORT


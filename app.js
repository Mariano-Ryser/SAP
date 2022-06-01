require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
console.log("Peticion recibida ")

res.send("<h1>App!</h1>")
} )

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
    
})
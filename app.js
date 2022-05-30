const express = require('express')

const app = express()

app.get('/', (req, res) => {
console.log("Peticion recibida ")

res.send("<h1>App!</h1>")
} )

app.listen(4000, () => {
    console.log("Servidor escichando en puerto 4000")
})
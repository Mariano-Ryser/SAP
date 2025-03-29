const express = require("express");
const { buscarPalabras } = require("./palabra.controller");

const router = express.Router();

router.get("/buscar", buscarPalabras);

module.exports = router;
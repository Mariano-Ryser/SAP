const express = require("express");
const router = express.Router();
const preguntaController = require("./pregunta.controller");

router.get("/", preguntaController.getPreguntas);
router.post("/", preguntaController.createPregunta);

module.exports = router;
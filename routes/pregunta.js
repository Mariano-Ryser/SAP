const express = require("express");
const router = express.Router();
const preguntaController = require("../controllers/pregunta");

router.get("/", preguntaController.getPreguntas);
router.post("/", preguntaController.createPregunta);

module.exports = router;
const express = require('express')
const usuariosControladores = require('../controller/usuarios.Controller')

const router = express.Router()

// Coloque rutas mas especificas
router.post('/creardesempleado', usuariosControladores.nuevoDesempleado);
router.post('/crearempresa', usuariosControladores.nuevaEmpresa);

module.exports = router
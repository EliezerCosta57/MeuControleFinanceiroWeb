const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// POST /api/usuarios
router.post('/', usuarioController.criar);

// GET /api/usuarios
router.get('/', usuarioController.listar);

module.exports = router;

const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

// GET /api/transacoes → listar todas
router.get('/', transacaoController.listar);

// POST /api/transacoes → criar nova
router.post('/', transacaoController.criar);

// DELETE /api/transacoes/:id → deletar pelo id
router.delete('/:id', transacaoController.deletar);

module.exports = router;

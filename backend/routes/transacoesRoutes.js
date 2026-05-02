const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

// Quando acessar GET /api/transacoes, chama a função listar
router.get('/', transacaoController.listar);

// Quando acessar POST /api/transacoes, chama a função criar
router.post('/', transacaoController.criar);

// Quando acessar DELETE /api/transacoes/1, chama a função deletar
router.delete('/:id', transacaoController.deletar);

module.exports = router;
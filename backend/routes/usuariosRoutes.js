const express = require('express');
const router = express.Router();
const connection = require('../database/conexao'); // importa sua conexão

// Rota para cadastrar usuário
router.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  connection.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
    }
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: result.insertId });
  });
});

// Rota para listar usuários
router.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      return res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
    res.json(results);
  });
});

module.exports = router;

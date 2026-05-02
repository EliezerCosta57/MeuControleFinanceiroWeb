// servidor/server.js

// funcao apenas de executar o express, nada muito complexo
const express = require('express');
const cors = require('cors');
const transacoesRoutes = require('./routes/transacoesRoutes');

const app = express();
const PORT = 3000;

// Middlewares básicos
app.use(cors()); // Permite que o Front-end comunique com o Back-end
app.use(express.json()); // Permite que o servidor entenda requisições com corpo em JSON
app.use('/api/transacoes', transacoesRoutes);

// Rota de teste
app.get('/api/status', (req, res) => {
    res.json({ mensagem: 'Servidor de Controle Financeiro rodando perfeitamente!' });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
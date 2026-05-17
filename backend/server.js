require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

// rotas
const testeRoutes = require('./routes/testeroutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes'); // nome correto do arquivo

// registro das rotas
app.use('/api', testeRoutes);
app.use('/api', movimentacaoRoutes);
app.use('/api', usuariosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

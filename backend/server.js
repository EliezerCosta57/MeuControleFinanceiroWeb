require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

// rotas
const testeRoutes = require('./routes/testeroutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');

// registro
app.use('/api', testeRoutes);
app.use('/api', movimentacaoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  
  ssl: {
    rejectUnauthorized: false   // ← Temporariamente desabilitado para teste
  },
  
  connectTimeout: 60000,   // 60 segundos
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar:', err.code, '-', err.message);
    return;
  }
  
  console.log('✅ Conexão com Aiven realizada com SUCESSO!');
  console.log(`Banco: ${process.env.DB_NAME}`);
  console.log(`Usuário: ${process.env.DB_USER}`);
});

module.exports = connection;
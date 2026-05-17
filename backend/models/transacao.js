<<<<<<< HEAD
// Simulando um banco de dados com uma lista (Array)
let transacoes = [
  //  { id: 1, descricao: 'Salário', valor: 5000, tipo: 'receita', data: '2026-05-01' },
   // { id: 2, descricao: 'Conta de Luz', valor: 150, tipo: 'despesa', data: '2026-05-05' } - dados aleatorios para teste
];
=======
const conexao = require('../database/conexao');
>>>>>>> feature/conexao-banco-dados

class Transacao {

    static listarTodas(callback) {
        conexao.query('SELECT * FROM movimentacoes', callback);
    }

    static criar(transacao, callback) {
        const { descricao, valor, tipo, data } = transacao;

        const sql = `
            INSERT INTO movimentacoes (descricao, valor, tipo, data)
            VALUES (?, ?, ?, ?)
        `;

        conexao.query(sql, [descricao, valor, tipo, data], callback);
    }

    static deletar(id, callback) {
        conexao.query(
            'DELETE FROM movimentacoes WHERE id = ?',
            [id],
            callback
        );
    }
}

module.exports = Transacao;
const conexao = require('../database/conexao');

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

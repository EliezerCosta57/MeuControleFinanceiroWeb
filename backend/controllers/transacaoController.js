/*
O que vai ter: Arquivos como TransacaoController.js.

Para que serve: Quando o Front-end pedir para salvar uma despesa, o Controller é quem vai validar se o valor não é negativo,
se a descrição foi preenchida, e depois mandar o Model salvar no banco. Ele também será responsável por calcular o saldo
total (somando receitas e subtraindo despesas) antes de enviar para a tela de Dashboard.
*/
const Transacao = require('../models/transacao');

const transacaoController = {

    listar: (req, res) => {
        Transacao.listarTodas((erro, resultados) => {
            if (erro) {
                return res.status(500).json({ erro: 'Erro ao buscar dados' });
            }

            const saldo = resultados.reduce((acumulador, transacao) => {
                return transacao.tipo === 'receita' 
                    ? acumulador + transacao.valor 
                    : acumulador - transacao.valor;
            }, 0);

            res.json({ saldo, transacoes: resultados });
        });
    },

    criar: (req, res) => {
        const { descricao, valor, tipo, data } = req.body;

        if (!descricao || valor == null || !tipo) {
            return res.status(400).json({ erro: 'Dados obrigatórios' });
        }

        Transacao.criar(
            {
                descricao,
                valor: Number(valor),
                tipo,
                data: data || new Date().toISOString().split('T')[0]
            },
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ erro: err.message });
                }

                res.status(201).json({
                    mensagem: 'Salvo no banco!',
                    id: result.insertId
                });
            }
        );
    },

    deletar: (req, res) => {
        const { id } = req.params;

        Transacao.deletar(id, (erro) => {
            if (erro) {
                return res.status(500).json({ erro: 'Erro ao deletar' });
            }

            res.json({ mensagem: 'Deletado com sucesso' });
        });
    }
};

module.exports = transacaoController;
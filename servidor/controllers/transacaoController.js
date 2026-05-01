/*
O que vai ter: Arquivos como TransacaoController.js.

Para que serve: Quando o Front-end pedir para salvar uma despesa, o Controller é quem vai validar se o valor não é negativo,
se a descrição foi preenchida, e depois mandar o Model salvar no banco. Ele também será responsável por calcular o saldo
total (somando receitas e subtraindo despesas) antes de enviar para a tela de Dashboard.
*/
const Transacao = require('../models/transacao');

const transacaoController = {
    // Função para listar e calcular o saldo total
    listar: (req, res) => {
        const transacoes = Transacao.listarTodas();
        
        // Calcula o saldo: soma as receitas e subtrai as despesas
        const saldo = transacoes.reduce((acumulador, transacao) => {
            return transacao.tipo === 'receita' 
                ? acumulador + transacao.valor 
                : acumulador - transacao.valor;
        }, 0);

        res.json({ saldo, transacoes });
    },

    // Função para cadastrar nova despesa ou receita
    criar: (req, res) => {
        const { descricao, valor, tipo, data } = req.body;
        
        // Validação: não deixa salvar se faltar informação
        if (!descricao || !valor || !tipo) {
            return res.status(400).json({ erro: 'Descrição, valor e tipo são obrigatórios.' });
        }

        const novaTransacao = Transacao.criar({ 
            descricao, 
            valor: Number(valor), 
            tipo, 
            // Se não enviar data, pega a data de hoje
            data: data || new Date().toISOString().split('T')[0] 
        });

        res.status(201).json({ mensagem: 'Transação criada com sucesso', transacao: novaTransacao });
    },

    // Função para deletar
    deletar: (req, res) => {
        const { id } = req.params;
        const deletada = Transacao.deletar(id);
        
        if (deletada) {
            res.json({ mensagem: 'Transação deletada.', deletada });
        } else {
            res.status(404).json({ erro: 'Transação não encontrada.' });
        }
    }
};

module.exports = transacaoController;
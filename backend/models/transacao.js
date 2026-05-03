// Simulando um banco de dados com uma lista (Array)
let transacoes = [
  //  { id: 1, descricao: 'Salário', valor: 5000, tipo: 'receita', data: '2026-05-01' },
   // { id: 2, descricao: 'Conta de Luz', valor: 150, tipo: 'despesa', data: '2026-05-05' } - dados aleatorios para teste
];

class Transacao {
    // Retorna todos os registros
    static listarTodas() {
        return transacoes;
    }

    // Salva um novo registro
    static criar(novaTransacao) {
        // Gera um ID sequencial
        const id = transacoes.length > 0 ? transacoes[transacoes.length - 1].id + 1 : 1;
        const transacaoComId = { id, ...novaTransacao };
        
        transacoes.push(transacaoComId);
        return transacaoComId;
    }

    // Apaga um registro pelo ID
    static deletar(id) {
        const index = transacoes.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            const deletada = transacoes.splice(index, 1);
            return deletada[0];
        }
        return null;
    }
}

module.exports = Transacao;
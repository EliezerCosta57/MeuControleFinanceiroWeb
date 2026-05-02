const API_URL = 'http://localhost:3000/api';

export async function listarTransacoes() {
  const resposta = await fetch(`${API_URL}/transacoes`);

  if (!resposta.ok) {
    throw new Error('Erro ao buscar transações');
  }

  return resposta.json();
}

export async function criarTransacao(transacao) {
  const resposta = await fetch(`${API_URL}/transacoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transacao)
  });

  if (!resposta.ok) {
    throw new Error('Erro ao criar transação');
  }

  return resposta.json();
}

export async function deletarTransacao(id) {
  const resposta = await fetch(`${API_URL}/transacoes/${id}`, {
    method: 'DELETE'
  });

  if (!resposta.ok) {
    throw new Error('Erro ao deletar transação');
  }

  return resposta.json();
}

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Movimentacoes() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    carregarMovimentacoes();
  }, []);

  function carregarMovimentacoes() {
    const lista = JSON.parse(localStorage.getItem("movimentacoes")) || [];
    setDados(lista);
  }

  function excluir(index) {
    const confirmar = confirm("Deseja excluir esta movimentação?");

    if (!confirmar) {
      return;
    }

    const novaLista = dados.filter((_, i) => i !== index);

    localStorage.setItem("movimentacoes", JSON.stringify(novaLista));
    setDados(novaLista);
  }

  return (
    <div className="tela">
      <div className="card">
        <h1>Movimentações</h1>

        {dados.length === 0 ? (
          <p>Nenhuma movimentação cadastrada</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {dados.map((item, index) => (
                <tr key={index}>
                  <td>{item.tipo}</td>
                  <td>{item.descricao}</td>
                  <td>R$ {item.valor}</td>
                  <td>{item.data}</td>
                  <td>
                    <button onClick={() => excluir(index)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Link to="/dashboard">Voltar</Link>
      </div>
    </div>
  );
}

export default Movimentacoes;
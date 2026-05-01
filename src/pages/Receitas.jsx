import { Link } from "react-router-dom";

function Receitas() {
  function salvar(e) {
    e.preventDefault();

    const descricao = e.target.descricao.value;
    const valor = parseFloat(e.target.valor.value);

    const nova = {
      tipo: "receita",
      descricao,
      valor,
      data: new Date().toLocaleDateString()
    };

    const lista = JSON.parse(localStorage.getItem("movimentacoes")) || [];
    lista.push(nova);

    localStorage.setItem("movimentacoes", JSON.stringify(lista));

    alert("Receita salva!");
    e.target.reset();
  }

  return (
    <div className="tela">
      <div className="card">
        <h1>Receitas</h1>

        <form onSubmit={salvar}>
          <input name="descricao" placeholder="Descrição" required />
          <input name="valor" type="number" placeholder="Valor" required />

          <button type="submit">Salvar</button>
        </form>

        <Link to="/dashboard">Voltar</Link>
      </div>
    </div>
  );
}

export default Receitas;
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("movimentacoes")) || [];

    let totalReceitas = 0;
    let totalDespesas = 0;

    dados.forEach((item) => {
      if (item.tipo === "receita") {
        totalReceitas += item.valor;
      } else {
        totalDespesas += item.valor;
      }
    });

    setReceitas(totalReceitas);
    setDespesas(totalDespesas);
  }, []);

  const saldo = receitas - despesas;

  return (
    <div className="tela">
      <div className="card">
        <h1>Dashboard</h1>

        <div className="resumo">
          <div>
            <h3>Receitas</h3>
            <p>R$ {receitas}</p>
          </div>

          <div>
            <h3>Despesas</h3>
            <p>R$ {despesas}</p>
          </div>

          <div>
            <h3>Saldo</h3>
            <p>R$ {saldo}</p>
          </div>
        </div>

        <nav className="menu">
          <Link to="/receitas">Receitas</Link>
          <Link to="/despesas">Despesas</Link>
          <Link to="/movimentacoes">Movimentações</Link>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
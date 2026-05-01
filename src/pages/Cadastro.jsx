import { Link } from "react-router-dom";
import "../styles/global.css";

function Cadastro() {
  return (
    <div className="tela">
      <div className="card">
        <h1>Cadastro</h1>

        <form>
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome" />

          <label>E-mail:</label>
          <input type="email" placeholder="Digite seu e-mail" />

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" />

          <button type="submit">Cadastrar</button>
        </form>

        <p>
          Já tem conta? <Link to="/">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
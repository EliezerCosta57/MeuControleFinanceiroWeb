import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  function entrar(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    if (email === "" || senha === "") {
      alert("Preencha e-mail e senha.");
      return;
    }

    // Simulando login
    navigate("/dashboard");
  }

  return (
    <div className="tela-login">
      <h1>MEU CONTROLE</h1>
      <p>FINANCEIRO</p>

      <div className="caixa-login">
        <h2>ENTRAR</h2>

        <form onSubmit={entrar}>
          <label>E-mail:</label>
          <input type="email" name="email" />

          <label>Senha:</label>
          <input type="password" name="senha" />

          <button type="submit">Entrar</button>
        </form>

        <Link to="/cadastro">Criar conta</Link>
      </div>
    </div>
  );
}

export default Login;
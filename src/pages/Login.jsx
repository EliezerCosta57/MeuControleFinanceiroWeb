import "../styles/login.css";

function Login() {
  function entrar(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    if (email === "" || senha === "") {
      alert("Preencha e-mail e senha.");
      return;
    }

    alert("Login enviado com sucesso!");
  }

  return (
    <div className="tela-login">
      <h1>MEU CONTROLE</h1>
      <p>FINANCEIRO</p>

      <div className="caixa-login">
        <h2>ENTRAR</h2>

        <form onSubmit={entrar}>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
          />

          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
          />

          <button type="submit">Entrar</button>
        </form>

        <a href="#">Criar conta</a>
      </div>
    </div>
  );
}

export default Login;
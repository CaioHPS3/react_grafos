import Header from "../layout/Header";
import Container from "../layout/Container";
import "../css/Signup.css";

const Signup = () => {
  return (
    <>
      <Header />
      <Container>
      <div className="geral">
          
          <div className="containeer">

            <div className="cabeçario">
              <h2>Fazer Cadastro</h2>
            </div>

            <form id="form" className="form" action="file:///home/caiohps/eng-projeto/react_grafos/src/pages/teste..txt " method="POST" >
              <div className="form-control">
                <label for="username">Nome de usuário</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Digite seu nome de usuário..."
                />
                <i className="fas fa-exclamation-circle"></i>
                <i className="fas fa-check-circle"></i>
                <small>Mensagem de erro</small>
              </div>

              <div className="form-control">
                <label for="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha..."
                />
                <i className="fas fa-exclamation-circle"></i>
                <i className="fas fa-check-circle"></i>
                <small>Mensagem de erro</small>
              </div>

              <button type="submit">Cadastrar</button>
            </form>
          </div>

          <script
            src="https://kit.fontawesome.com/f9e19193d6.js"
            crossorigin="anonymous"
          ></script>

          <script src="./scripts.js"></script>
        </div>
      </Container>
    </>
  );
};

export default Signup;
import Header from "../layout/Header";
import Container from "../layout/Container";
import "../css/Login.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { allStates } from "../main";
import api from "../services/api"
import Helmet from 'react-helmet'

const Login = () => {
  const [userCreated, setCreation] = useState(false);
  const [user, setUser] = useState();
  const [nameUseState, setNameUseState] = useState("");
  const [passwordUseState, setPasswordUseState] = useState("");

  const userState = allStates((state) => state.userLogged);
  const setUserState = allStates((state) => state.setUserState);

  let formulario

  if (userState === false) {
    formulario = (
      <>
        <div className="signup-forms">
        <h1>LOGIN</h1>
          <TextField
            type="text"
            id="outlined-basic"
            label="Nome de Usuario ..."
            variant="outlined"
            defaultValue={nameUseState}
            onChange={(e) => {
              setNameUseState(e.target.value);
            }}
          />

          <TextField
            type="password"
            id="outlined-basic"
            label="Digite sua senha ..."
            variant="outlined"
            defaultValue={passwordUseState}
            onChange={(e) => {
              setPasswordUseState(e.target.value);
            }}
          />

          <Button
            onClick={() => {
              handleSubmit();
            }}
            variant="outlined"
          >
            Entrar
          </Button>
        </div>
      </>
    );
  } else {
    formulario = (
      <>
        <p>Você está logado.</p>
      </>
    );
  }

  const handleSubmit = () => {
    setUserState();
    api
      .post("/api/users/login", {
        userName: nameUseState,
        password: passwordUseState,
      })
      .then((response) => setUser(response.data) )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

console.log(user)


  return (
    <>
      <Helmet title="Login" />
      <Header />
      <Container>
        {formulario}
      </Container>
    </>
  );
};

export default Login;

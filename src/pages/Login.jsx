import Header from "../layout/Header";
import Container from "../layout/Container";
import "../css/Login.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [userCreated, setCreation] = useState(false);
  const [nameUseState, setNameUseState] = useState("");
  const [emailUseState, setEmailUseState] = useState("");
  const [passwordUseState, setPasswordUseState] = useState("");

  return (
    <>
      <Header />
      <Container>
        <h1>LOGIN</h1>
        <div className="signup-forms">
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
              setCreation(true);
            }}
            variant="outlined"
          >
            Entrar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Login;

import Header from "../layout/Header";
import Container from "../layout/Container";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import "../css/Signup.css";
import api from "../services/api";
import { useEffect } from "react";

const Signup = () => {

  const [userCreated, setCreation] = useState(false);
  const [nameUseState, setNameUseState] = useState("");
  const [passwordUseState, setPasswordUseState] = useState("");

  let userInfo;

  if (userCreated === true) {
    userInfo = (
      <>
        <h6>User created</h6>
        <p>Name: {nameUseState}</p>
        <p>Password: {passwordUseState}</p>
      </>
    );
  } else {
    userInfo = (
      <>
        <p>User not created</p>
      </>
    );
  }

  const handleSubmit = () => {

    setCreation(true)
    
    api
      .post("/api/users/signup",{
          userName: nameUseState,
          password: passwordUseState
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }

  return (
    <>
      <Header />
      <Container>
        <h1>CADASTRO</h1>
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
              handleSubmit()
            }}
            variant="outlined"
          >
            CADASTRAR
          </Button>

          {userInfo}
        </div>
      </Container>
    </>
  );
};

export default Signup;

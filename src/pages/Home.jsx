import Header from "../layout/Header";
import Container from "../layout/Container";
import api from "../services/api";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api
      .get("/api/notes/notes")
      .then((response) => setNotes(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <Helmet title="Home" />
      <Header />
      <Container>
        {notes.map((elements, index) => (
          <div key={index}>
            <p>Nome: {elements?.noteName}</p>
            <p>Conteudo: {elements?.noteContent}</p>
            <button>Salvar</button>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Home;

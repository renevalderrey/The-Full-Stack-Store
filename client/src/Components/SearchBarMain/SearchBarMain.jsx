import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import searchBarName from "../../Redux/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import stl from "./SearchBarMain.module.css";
import Container from "react-bootstrap/Container";

export default function SearchBarMain() {
  const dispatch = useDispatch();
  const [buscados, setBuscados] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setBuscados(e.target.value);
    // console.log(buscados)

    // console.log(Filtrados)
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchBarName(buscados));
    navigate("/products");
  };

  return (
    <>
      <Container>
        <form>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleChange}
              placeholder="¿Que estas buscando hoy?"
            />
            <button className={stl.boton} onClick={handleClick}>
              Buscar
            </button>
          </InputGroup>
        </form>
      </Container>
    </>
  );
}

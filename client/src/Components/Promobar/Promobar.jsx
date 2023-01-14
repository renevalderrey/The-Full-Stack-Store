import React from "react";
import stl from "./Promobar.module.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Promobar() {
  return (
    <Container fluid="xxl">
      <Link to="/form">
        <div className={stl.container}>
          <div className={stl.title}>!Crea un nuevo producto aqui!</div>
        </div>
      </Link>
    </Container>
  );
}

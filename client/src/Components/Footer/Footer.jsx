import React from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={stl.container}>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              ¿Cómo comprar?
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Historial de pedidos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Configurador de PC
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Preguntas frecuentes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Quiénes somos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Condiciones generales
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Aviso de privacidad
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              ¿Quieres ser proveedor?
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/">
              Únete a nuestro equipo
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>2023 The Fullstack Store</div>
      </div>
    </>
  );
}

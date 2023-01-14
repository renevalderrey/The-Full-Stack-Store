import React from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./NavbarMain.module.css";
import Container from "react-bootstrap/Container";

export default function NavbarHeader() {
  return (
    <>
      <Container fluid="xxl">
        <div className={stl.container}>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Promociones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Nuevos productos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Hardware
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                PC Gamers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
               Software
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
              Home office
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Energia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Punto de venta
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Seguridad y vigilancia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Telecomunicaciones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Hogar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Software
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} href="/products">
                Home office
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </div>
      </Container>
    </>
  );
}

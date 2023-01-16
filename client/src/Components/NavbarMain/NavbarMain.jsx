import React from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./NavbarMain.module.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

export default function NavbarHeader() {
  const navigate = useNavigate();

  const onClickProducts = () =>{
    navigate("/products")
  }
  return (
    <>
      <Container fluid="xxl">
        <div className={stl.container}>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link className={stl.colors} onClick={onClickProducts}>
                Promociones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} onClick={onClickProducts}>
                Nuevos productos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} onClick={onClickProducts}>
                Hardware
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} onClick={onClickProducts}>
                PC Gamers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} onClick={onClickProducts}>
               Software
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={stl.colors} onClick={onClickProducts}>
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

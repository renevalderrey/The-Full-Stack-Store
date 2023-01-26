import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Image, Row, Col, Button } from "react-bootstrap";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";

export default function Header() {
  const navigate = useNavigate();
  const handleCart = () => {
    localStorage.getItem("cart")
    navigate("/cart");
  };
  return (
    <>
      <Container className="mt-3">
        <Navbar
          style={{
            backgroundColor: "var(--background-color)",
            backdropFilter: "blur(5px)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
            zIndex: "1",
          }}
          expand="lg"
          className="rounded-4"
        >
          <Container>
            <Col xs={2} className="p-3">
              <Navbar.Brand href="/">
                <Image fluid alt="logo" src="/tfss.svg" width="150" />
              </Navbar.Brand>
            </Col>
            <Col xs={8}>
              <Row className="mt-1">
                <SearchBarMain />
              </Row>
              <Row>
                <NavbarHeader />
              </Row>
            </Col>
            <Col xs={2}>
              <Button
                variant="outline-warning"
                onClick={handleCart}
                style={{
                  border: "var(--border)",
                  color: "var(--text-color)",
                  fontSize: "42px",
                  width: "84px",
                  height: "84px",
                }}
              >
                <i className="bi bi-cart2"></i>
              </Button>
            </Col>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

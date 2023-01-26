import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
          border: "var(--border)",
          boxShadow: "var(--box-shadow)",
        }}
        expand="lg"
      >
        <Navbar className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link
                href="/"
                style={{
                  color: "var(--text-color)",
                }}
              >
                ¿Cómo comprar?
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <h5 style={{ color: "var(--text-color)" }}>2023 The Fullstack Store</h5>
      </Container>
    </>
  );
}

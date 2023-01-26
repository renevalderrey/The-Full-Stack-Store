
import React from "react";
import { Container, Card, Figure, Navbar, Row, Image } from "react-bootstrap";

export default function Promobar() {
  return (
    <>
      <Container className="mt-3 ">
        <Figure.Image
          src="./image/promo1.png"
          style={{
            backgroundColor: "rgba(33, 37, 41,0.5)",
            backdropFilter: "blur(5px)",
            border: "var(--border)",
            boxShadow: "var(--box-shadow)",
          }}
          className="rounded-4"
        />
      </Container>
    </>
  );
}
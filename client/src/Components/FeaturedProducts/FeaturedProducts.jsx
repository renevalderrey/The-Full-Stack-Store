import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import { Container, Row } from "react-bootstrap";

export default function FeaturedProducts() {
  const num = 1;

  return (
    <>
      <Container className="mt-3">
        <h1 style={{ color: "#fff" }}>Productos Destacados</h1>

        <Row>
          <CardFeaturedProducts num={num + 7} />
          <CardFeaturedProducts num={num + 14} />
          <CardFeaturedProducts num={num + 21} />
          <CardFeaturedProducts num={num + 28} />
          {/* <CardFeaturedProducts num={num + 35} />
          <CardFeaturedProducts num={num + 42} />
          <CardFeaturedProducts num={num + 49} />
          <CardFeaturedProducts num={num + 56} />
          <CardFeaturedProducts num={num + 63} />
          <CardFeaturedProducts num={num + 70} /> */}
        </Row>
      </Container>
    </>
  );
}

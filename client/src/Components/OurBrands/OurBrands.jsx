import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function OurBrands() {
  return (
    <>
      <h1 style={{ color: "#fff" }}>
        ¡En Fullstack Store encuentra las mejores marcas!
      </h1>
      <Container
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
          border: "var(--border)",
          boxShadow: "var(--box-shadow)",
        }}
        expand="lg"
        className="rounded-4 m-3"
      >
        <Row>
          <Col>
            <Link>
              <Card.Img
                style={{ width: "10rem", border: "none" }}
                variant="top"
                src="./image/New Project.png"
              />
            </Link>
          </Col>
          <Col>
            <Link>
              <Card.Img
                style={{ width: "10rem", border: "none" }}
                variant="top"
                src="./image/New Project1.png"
              />
            </Link>
          </Col>
          <Col>
            <Link>
              <Card.Img
                style={{ width: "10rem", border: "none" }}
                variant="top"
                src="./image/New Project2.png"
              />
            </Link>
          </Col>
          <Col>
            <Link>
              <Card.Img
                style={{ width: "10rem", border: "none" }}
                variant="top"
                src="./image/New Project3.png"
              />
            </Link>
          </Col>
          <Col>
            <Link>
              <Card.Img
                style={{ width: "10rem", border: "none" }}
                variant="top"
                src="./image/New Project4.png"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

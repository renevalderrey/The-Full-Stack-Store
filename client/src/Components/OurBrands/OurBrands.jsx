import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import stl from "./OurBrands.module.css";

export default function OurBrands() {
  return (
    <>
      <h1>¡En Fullstack Store encuentra las mejores marcas!</h1>
      <div className={stl.container}>
        <Link className={stl.format}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src="./image/New Project.png" />
          </Card>
        </Link>
        <Link className={stl.format}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src="./image/New Project1.png" />
          </Card>
        </Link>
        <Link className={stl.format}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src="./image/New Project2.png" />
          </Card>
        </Link>
        <Link className={stl.format}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src="./image/New Project3.png" />
          </Card>
        </Link>
        <Link className={stl.format}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src="./image/New Project4.png" />
          </Card>
        </Link>
        <Link className={stl.format}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src="./image/New Project5.png" />
          </Card>
        </Link>
      </div>
    </>
  );
}

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
//CardFeaturedCategories es una card que se usa en la pagina principal linki al detalle del producto card title tarjetas de video card img src="./image/tdv(1).webp"

export default function CardFeaturedCategories() {
  return (
    <>
      <Link>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/carcasas.png" />
          <Card.Body>
            <Card.Title>Carcasas</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

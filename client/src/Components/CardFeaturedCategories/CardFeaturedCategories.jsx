import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import stl from "./CardFeaturedCategories.module.css";

//CardFeaturedCategories es una card que se usa en la pagina principal linki al detalle del producto card title tarjetas de video card img src="./image/tdv(1).webp"

export default function CardFeaturedCategories() {
  return (
    <div className={stl.container}>
      <Card style={{ width: "18rem" }} className={stl.card}>
        <img className={stl.img} variant="top" src="./image/carcasas.png" />

        <h3 className={stl.title}>Carcasas</h3>
      </Card>
    </div>
  );
}

import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import stl from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const num = 1;
  return (
    <>
      <h1>Productos destacados de hoy</h1>
      <div className={stl.container}>
        {/* productos destacados de hoy */}
        <CardFeaturedProducts num={num + 7} />
        <CardFeaturedProducts num={num + 14} />
        <CardFeaturedProducts num={num + 35} />
        <CardFeaturedProducts num={num + 63} />
      </div>
    </>
  );
}

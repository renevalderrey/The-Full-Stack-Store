import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import stl from "./FeaturedCategories.module.css";

export default function FeaturedCategories() {
  return (
    <>
      <h1>Categorias destacadas</h1>
      <div className={stl.container}>
        <div className={stl.format}>
          <CardFeaturedCategories />
        </div>
        <div className={stl.format}>
          <CardFeaturedCategories />
        </div>
        <div className={stl.format}>
          <CardFeaturedCategories />
        </div>
        <div className={stl.format}>
          <CardFeaturedCategories />
        </div>
      </div>
    </>
  );
}

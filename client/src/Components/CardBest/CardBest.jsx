import * as React from "react";
import stl from "./CardBest.module.css";

export default function CardBest() {
  return (
    <>
      <div className={stl.container}>
        <div className={stl.title}>¡Somos tu mejor opcion!</div>
        <div className={stl.content}>
          <div className={stl.text}>* Mas de 40000 productos.</div>
          <div className={stl.text}>* Compras y envios seguros.</div>
          <div className={stl.text}>* Comparte y revisa opiniones.</div>
        </div>
        <button className={stl.button}>Conocer más</button>
      </div>
    </>
  );
}

import * as React from "react";
import stl from "./CardAccountCheck.module.css";

export default function CardAccountCheck() {
  return (
    <>
      <div className={stl.container}>
        <div className={stl.title}>¿Ya tienes cuenta?</div>
        <div className={stl.content}>
          <div className={stl.text}>* Crea listas de favoritos.</div>
          <div className={stl.text}>
            * Envios faciles con tu libreta de direcciones.
          </div>
          <div className={stl.text}>
            * Escribe preguntas y opiniones de productos.
          </div>
        </div>
        <button className={stl.button}>Registrarme</button>
      </div>
    </>
  );
}

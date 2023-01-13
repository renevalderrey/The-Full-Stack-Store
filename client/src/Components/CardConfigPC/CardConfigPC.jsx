import * as React from "react";
import stl from "./CardConfigPC.module.css";

export default function CardConfigPC() {
  return (
    <>
      <div className={stl.container}>
        <img
          src="./image/pc-build-bd.jpg"
          alt="PC Gamer"
          className={stl.image}
        />
      </div>
    </>
  );
}

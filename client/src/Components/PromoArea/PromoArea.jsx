import React from "react";
import CardBest from "../CardBest/CardBest";
import CardAccountCheck from "../CardAccountCheck/CardAccountCheck";
import Carousel from "../Carousel/Carousel";
import CardConfigPC from "../CardConfigPC/CardConfigPC";
import CardJobs from "../CardJobs/CardJobs";
import stl from "./PromoArea.module.css";

export default function PromoArea() {
  return (
    <>
      <div className={stl.container}>
        {/* <div className={stl.left}>
          <CardBest />
          <CardAccountCheck />
        </div> */}
        <div className={stl.center}>
          <Carousel />
        </div>
        {/* <div className={stl.right}>
          <CardConfigPC />
          <CardJobs />
        </div> */}
      </div>
    </>
  );
}

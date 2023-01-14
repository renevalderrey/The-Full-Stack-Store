import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import stl from "./CardFeaturedProducts.module.css";
import React, { useState } from "react";
import Checkbox from "../CheckBox/CheckBox";

export default function CardFeaturedProducts2({ num }) {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.allProducts);
  const [oneProduct, setOneProduct] = useState(Products[num]);

  const handleClick = () => {
    dispatch(getDetail(oneProduct._id));
  };

  return (
    <>
      <div className={stl.gridContainer}>
        <div className={stl.item1}>%7</div>
        <div className={stl.item2}>
          <Link to={`/product/${oneProduct._id}`} onClick={handleClick}>
            <img src={oneProduct.image} className={stl.prodImg} />
          </Link>
        </div>
        <div className={stl.item3}>{oneProduct.name}</div>
        <div className={stl.item4}>
          {oneProduct.description}...
        </div>
        <div className={stl.item5}>sku: XXX-XXXXXX</div>
        <div className={stl.item6}>${oneProduct.price}</div>
        <div className={stl.item7}>
          <button
            style={{
              width: "105px",
              height: "35px",
              backgroundColor: "orangered",
              color: "white",
              fontWeight: "500",
              borderRadius: "7px",
              border: "none",
            }}
          >
            Añadir
          </button>
        </div>
        <div className={stl.item8}>
          ${oneProduct.price - oneProduct.price * 0.07}
        </div>
        <div className={stl.item9}>$ envio $500</div>
        <div className={stl.item10}>Disponibles: {oneProduct.quantity}</div>
        <div className={stl.item11}>
          <Checkbox />
        </div>
      </div>
    </>
  );
}

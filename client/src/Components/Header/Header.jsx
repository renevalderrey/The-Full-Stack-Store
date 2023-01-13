import React from "react";
import Logo from "../../Image/TFSS.png";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import stl from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={stl.container}>
        <div className={stl.containerAux}>
          <div className={stl.containerLogo}>
            <Link to={"/"}>
              <img src={Logo} alt="logo" className={stl.logo} />
            </Link>
          </div>
          <div className={stl.containerBars}>
            <div className={stl.auxContainer}>
              <SearchBarMain />
            </div>
            <div className={stl.auxContainer}>
              <NavbarHeader />
            </div>
          </div>
          <div className={stl.containerShopCart}>
            <Link to={"/login"}>
              <img
                src="./image/shopping-cart.svg"
                alt="Carrito de compras"
                className={stl.carrito}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Logo from "../../Image/TFSS.png";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import stl from "./Header.module.css";
import { Link,useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Header() {
  const navigate = useNavigate()
  const handleCart=()=>{
    navigate("/cart")
  }
  return (
    <>
      <Container fluid="xxl">
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
              <button className={stl.button}onClick={handleCart}>
              <i className="bi bi-cart2"></i>
                {/* Cart */}
              </button>
              Cart
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

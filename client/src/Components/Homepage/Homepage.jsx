import React from "react";
import Promobar from "../Promobar/Promobar";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Carousel from "../Carousel/Carousel";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import OurBrands from "../OurBrands/OurBrands";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/action";
import stl from "./Homepage.module.css";

export default function Homepage() {
  const Products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    !Products.length && dispatch(getProducts());
  }, [dispatch, Products]);

  return (
    <>
      {/* simbolo de carga mientras carga la pagina bootstrap  */}
      {!Products.length ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <div>
            <Promobar />
            <Header />
            <NavbarMain />
            <div className={stl.containerBody}>
              <Carousel />
              <FeaturedProducts />
              <OurBrands />
              <FeaturedCategories />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

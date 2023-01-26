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
import { getCategories, getProducts } from "../../Redux/action";
import Container from "react-bootstrap/Container";

export default function Homepage() {
  const Products = useSelector((state) => state.products);
  const category = useSelector((state)=> state.category)

  const dispatch = useDispatch();

  useEffect(() => {
    !Products.length && dispatch(getProducts());
    !category.length && dispatch(getCategories())

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
          <Promobar />
          <Header />
          <NavbarMain />
          <Container>
            <Carousel />
            <FeaturedProducts />
            <OurBrands />
            <FeaturedCategories />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import s from "./ProductDetail.module.css";
import Paypal from "../Paypal/Papypal";
import Rating_Coments from "../Rating_Coments/Rating_Coments"

const ProductDetail = () => {
  const details = useSelector(state => state.detail)
  console.log(details)
  
  return (
    <>
      <Header />
      <NavbarMain />
      {details &&
        <>
          <Card className={s.card}>
            <Card.Img variant="top" src={details.image} className={s.img} />
            <Card.Body>
              <Card.Text>
                {details.name}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card className={s.cardbody}>
            <Card.Body>
              <p>{details.description}</p>
              <p>{details.price}</p>
              <h2>{details.calification}</h2>
            </Card.Body>
          </Card>
          <div className={s.div}>
            <Rating_Coments id={(details._id)} />
          </div>
          <Paypal price={details.price} />
        </>
      }
      <Footer />
    </>
  );
};

export default ProductDetail;

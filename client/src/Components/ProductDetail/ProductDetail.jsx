import React, { useEffect } from "react";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RatingComents from "../RatingComents/RatingComents";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import MostrarComentarios from "../MostrarComentarios/MostrarComentarios";
import { getDetail } from "../../Redux/action";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);

  const handleAddCart = (product) => {
    let itemInCart = cartNew.find(ele => ele._id === product._id)
    let pepe = cartNew
    if (itemInCart) {
      pepe?.map(item => item._id === product._id ? { ...item, qty: item.qty += 1 } : item)
      setCartNew(pepe)
      console.log(pepe)
      localStorage.setItem("cart", JSON.stringify(pepe))
    } else {
      product.qty = 1
      pepe = [...pepe, product]
      setCartNew(pepe)
      localStorage.setItem("cart", JSON.stringify(pepe))
    }
  }

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  return (
    <>
      <Header />
      <NavbarMain />
      {details && (
        <>
          <Container
            style={{
              backgroundColor: "var(--background-color)",
              backdropFilter: "blur(5px)",
              border: "var(--border)",
              boxShadow: "var(--box-shadow)",
            }}
            className="rounded-4 mt-5 mb-5 p-3"
          >
            <Row>
              <Col>
                <Image
                  fluid
                  rounded
                  src={details.image}
                  style={{
                    objectFit: "contain",
                    marginTop: "14px",
                    width: "16rem",
                    height: "16rem",
                    border: "var(--border)",
                    background: "#fff",
                  }}
                  className="m-3"
                />
              </Col>
              <Col xs lg="7">
                <Row
                  className="mt-4"
                  style={{
                    color: "var(--text-color)",
                    fontSize: "21px",
                    height: "35px",
                    overflow: "auto",
                  }}
                >
                  {details.name}
                </Row>
                <Row
                  style={{
                    color: "#fff",
                    fontSize: "21px",
                    height: "35px",
                    overflow: "auto",
                  }}
                >
                  Marca: {details.brand}
                </Row>
                <Row
                  className="mb-3 p-4"
                  style={{
                    color: "var(--text-color)0",
                    textAlign: "justify",
                    height: "140px",
                    overflow: "auto",
                  }}
                >
                  {details.description}
                </Row>
                <Row
                  className="mt-1"
                  style={{
                    color: "#fff",
                    fontSize: "17px",
                    overflow: "auto",
                  }}
                >
                  Unidades disponibles: {details.quantity}
                </Row>
              </Col>

              <Col
                xs={2}
                className="mt-3"
                style={{
                  color: "#fff",
                  fontSize: "28px",
                  height: "49px",
                  textAlign: "end",
                }}
              >
                $ {details.price}
                <Button
                  className="mb-3"
                  variant="outline-warning"
                  onClick={() => handleAddCart(details)}
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                >
                  Agregar al Carrito
                </Button>
              </Col>
            </Row>
          </Container>
          <div>
            <RatingComents id={details._id} />
          </div>
          <div>
            <MostrarComentarios id={details._id} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;

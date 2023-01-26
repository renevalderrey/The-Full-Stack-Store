import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putUser } from "../../Redux/action";
import Paypal from "../Paypal/Papypal";
import s from "./Cart.module.css";
import Header from "../Header/Header";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import NavbarMain from "../NavbarMain/NavbarMain";

export default function Cart() {
  const cart1 = useSelector((state) => state.cart);
  const newCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(newCart));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const idLocal = localStorage.getItem("id");

  const addOneProduct = (product) => {
    setCount(count + 1);
    let pepe = cart;
    pepe?.map((item) =>
      item._id === product._id ? { ...item, qty: (item.qty += 1) } : item
    );
    setCart(pepe);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const restOneProduct = (product) => {
    setCount(count - 1);
    let pepe = cart;
    if (product.qty === 1) return;
    else {
      pepe?.map((item) =>
        item._id === product._id ? { ...item, qty: (item.qty -= 1) } : item
      );
      setCart(pepe);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (product) => {
    let pepe = cart.filter((ele) => ele._id !== product._id);
    if (pepe.length === 0) setTotal(0);
    setCart(pepe);
    localStorage.setItem("cart", JSON.stringify(pepe));
  };

  const cleanCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    setTotal(0);
  };

  const handlePageProducts = () => {
    navigate("/products");
  };
  const totalApagar = () => {
    let prod = cart.map((ele) => ele.price * ele.qty);
    prod = prod.reduce((acc, curr) => {
      acc += curr;
      return acc;
    });
    setTotal(prod);
  };
  const HandleBack = () => {
    if (!idLocal) {
      return alert("Debes loguearte");
    } else {
      dispatch(putUser(idLocal, cart));
    }
  };
  useEffect(() => {
    cart.length < cart1.length && setCart(cart1);
    cart?.length && totalApagar();
  }, [cart, newCart, count, total]);

  return (
    <div>
      <Header />
      <NavbarMain />
      {cart?.items?.length === 0 ? (
        <div>
          <h1 className="mt-3" style={{ color: "#fff" }}>
            El carrito esta vacio
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="mt-3" style={{ color: "#fff" }}>
            Tus productos
          </h1>

          <Container>
            <Card
              style={{
                backgroundColor: "var(--background-color)",
                backdropFilter: "blur(5px)",
                border: "var(--border)",
                boxShadow: "var(--box-shadow)",
              }}
              className="rounded-4  mt-3 mb-3 p-5"
            >
              {cart?.map((e, i) => (
                <Card.Body
                  key={i}
                  style={{ border: "var(--border)" }}
                  className="rounded-4 mb-5"
                >
                  <Row>
                    <Col>
                      <Card.Img
                        src={e.image}
                        style={{
                          objectFit: "contain",
                          margin: "14px",
                          width: "17rem",
                          height: "17rem",
                          border: "var(--border)",
                          background: "#fff",
                          padding: "7px",
                        }}
                      />
                    </Col>
                    <Col xs lg="6">
                      <Row
                        className="mt-4"
                        style={{
                          color: "var(--text-color)",
                          fontSize: "21px",
                          height: "35px",
                          overflow: "auto",
                        }}
                      >
                        {e.name}
                      </Row>
                      <Row
                        style={{
                          color: "#fff",
                          fontSize: "21px",
                          height: "35px",
                          overflow: "auto",
                        }}
                      >
                        Marca: {e.brand}
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
                        {e.description}
                      </Row>
                    </Col>
                    <Col xs={2} className="m-3">
                      <Row
                        className="mt-3"
                        style={{
                          height: "70px",
                        }}
                      >
                        <Card.Text
                          style={{
                            color: "#fff",
                            fontSize: "35px",
                          }}
                        >
                          Cant: {e.qty}
                        </Card.Text>
                      </Row>
                      <Row>
                        <Col>
                          <Button
                            variant="outline-warning"
                            style={{
                              border: "var(--border)",
                              color: "var(--text-color)",
                              fontSize: "14px",
                              textWeight: "bold",
                            }}
                            onClick={() => restOneProduct(e)}
                          >
                            -
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-warning"
                            style={{
                              border: "var(--border)",
                              color: "var(--text-color)",
                              fontSize: "14px",
                              textWeight: "bold",
                            }}
                            onClick={() => addOneProduct(e)}
                          >
                            +
                          </Button>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Card.Text
                          style={{
                            color: "#fff",
                            fontSize: "35px",
                            height: "70px",
                          }}
                        >
                          $ {e.price}
                        </Card.Text>
                      </Row>
                      <Row
                        className="mt-3"
                        style={{
                          height: "35px",
                        }}
                      >
                        <Button
                          variant="outline-warning"
                          style={{
                            border: "var(--border)",
                            color: "var(--text-color)",
                          }}
                          onClick={() => deleteProduct(e)}
                        >
                          Eliminar
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              ))}
              <h2
                style={{
                  color: "#fff",
                }}
              >
                Total: ${total}
              </h2>
            </Card>
          </Container>
        </div>
      )}
      <Container
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
          border: "var(--border)",
          boxShadow: "var(--box-shadow)",
        }}
        className="rounded-4  mt-5 mb-5"
      >
        <Button
          onClick={handlePageProducts}
          variant="outline-warning"
          style={{
            height: "40px",
            border: "var(--border)",
            color: "var(--text-color)",
            backdropFilter: "blur(5px)",
          }}
          className="m-3"
        >
          Volver a productos
        </Button>
        <Button
          onClick={cleanCart}
          variant="outline-warning"
          style={{
            height: "40px",
            border: "var(--border)",
            color: "var(--text-color)",
            backdropFilter: "blur(5px)",
          }}
          className="m-3"
        >
          Limpiar carrito
        </Button>
        {!idLocal ? (
          <Button
            onClick={HandleBack}
            variant="outline-warning"
            style={{
              border: "var(--border)",
              color: "var(--text-color)",
              backdropFilter: "blur(5px)",
            }}
            className="m-3"
          >
            COMPRAR
          </Button>
        ) : (
          <Paypal className={s.paypal} price={total} />
        )}
      </Container>
    </div>
  );
}

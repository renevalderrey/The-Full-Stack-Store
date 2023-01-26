//componente de productos que se renderisa en pageProducts solo 20 productos por pagina
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import { Container, Card, Button, Row, Image } from "react-bootstrap";

export default function Productos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(21);
  const [paginas, setPaginas] = useState([]);
  const cart = localStorage.getItem("cart");
  const [cartNew, setCartNew] = useState([]);
  let pages = [];

  useSelector((state) => state.getDetail);

  useEffect(() => {
    setMaxPage(Math.ceil(products.length / 21));
    if (maxPage > 1) {
      for (let i = 1; i < maxPage; i++) {
        pages.push(i);
      }
      setPaginas(pages);
    } else setPaginas(pages);
  }, [products, page, maxPage, num1, num2, JSON.stringify(cart), cartNew]);
  function handleNextPage() {
    if (num2 >= maxPage * 21) {
      return num1, num2;
    } else {
      setNum1(num1 + 21);
      setNum2(num2 + 21);
    }
  }

  function handlePrevPage() {
    if (num1 == 0) {
      return num1, num2;
    } else {
      setNum1(num1 - 21);
      setNum2(num2 - 21);
    }
  }
  const handleDetail = (e) => {
    dispatch(getDetail(e));
    navigate(`/product/${e}`);
  };
  const handleChangePagePerNum = (e) => {
    let n = e.target.value * 20;
    if (e.target.value == 1) {
      return setNum1(0), setNum2(20);
    } else setNum1(n);
    setNum2(n + 20);
  };
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
  };
  return (
    <Container>
      {/* paginacion */}

      <Container className="m-3">
        {/* botones de paginacion bootstrap */}

        <Button
          onClick={handlePrevPage}
          variant="outline-warning"
          style={{ border: "var(--border)", color: "var(--text-color)" }}
          className="m-1"
        >
          Anterior
        </Button>
        {paginas.length > 1 &&
          paginas.map((e, i) => (
            <Button
              key={i}
              value={e}
              onClick={handleChangePagePerNum}
              variant="outline-warning"
              style={{ border: "var(--border)", color: "var(--text-color)" }}
              className="m-1"
            >
              {e}
            </Button>
          ))}
        <Button
          onClick={handleNextPage}
          variant="outline-warning"
          style={{ border: "var(--border)", color: "var(--text-color)" }}
          className="m-1"
        >
          Siguiente
        </Button>
      </Container>

      {/* body de cards */}

      <Row>
        {/* mensaje de carga mientras se renderiza los productos */}

        {products.length === 0 ? (
          <h1
            style={{
              color: "#ff3c00",
            }}
          >
            No hay productos con este Filtro
          </h1>
        ) : null}
        {/* //map para renderizar los productos */}

        {/* card */}

        {products?.slice(num1, num2)?.map((product) => {
          return (
            <Card
              style={{
                width: "19rem",
                backgroundColor: "var(--background-color)",
                backdropFilter: "blur(5px)",
                border: "var(--border)",
                boxShadow: "var(--box-shadow)",
              }}
              expand="lg"
              className="rounded-4 m-2"
              key={product._id}
            >
              <Card.Body>
                <Image
                  fluid
                  rounded
                  className="mb-3"
                  src={product.image}
                  alt={product.name}
                  style={{
                    objectFit: "contain",
                    marginTop: "14px",
                    width: "16rem",
                    height: "16rem",
                    border: "var(--border)",
                    background: "#fff",
                    padding: "7px",
                  }}
                />

                <Card.Title
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  {product.name.slice(0, 30)}
                </Card.Title>
                {/* //descricion con caracteres limitados a 100 */}
                <Card.Text
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  {product.description.slice(0, 30)}...
                </Card.Text>
                <Card.Text
                  style={{
                    color: "#fff",
                  }}
                >
                  ${product.price}
                </Card.Text>
                {/* usar getDetail para detalles del producto */}
                <Button
                  variant="outline-warning"
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                  // value={product._id}
                  onClick={() => handleDetail(product._id)}
                >
                  Ver detalles
                </Button>
                <Button
                  className="mt-3"
                  variant="outline-warning"
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                  value={product._id}
                  onClick={() => handleAddCart(product)}
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}

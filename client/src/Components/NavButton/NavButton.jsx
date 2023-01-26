import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterProductsCategory } from "../../Redux/action";
import { Container, Nav } from "react-bootstrap";

export default function NavButton({ prop }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterProductsCategory(prop.name));
    navigate("/products");
  };

  return (
    <Container>
      <Nav.Link onClick={handleClick} style={{ color: "#fff" }}>
        {prop.name}
      </Nav.Link>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import ModalSign from "../ModalSign/ModalSign";
import {
  Container,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Nav,
  Button,
} from "react-bootstrap";
import LightMode from "../LightMode/LightMode";

export default function NavbarHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const idLocalStorge = localStorage.getItem("id")
  const userLocalStorage = localStorage.getItem("admin")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    localStorage.removeItem("user")
    navigate("/");
    window.location.reload();
  };

  const onClickAdmin = () => {
    navigate("/admin");
  }

  const onClickProfile = () => {
    navigate("/profile");
  };

  const onClickFavorites = () => {
    navigate("/favorites");
  };

  return (
    <>
      <Container fluid>
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <LightMode />
          </Nav.Item>
          {userLocalStorage?.length === 4 ? (
            <Nav.Item>
              <Button
                className="m-1"
                href="/admin"
                variant="outline-warning"
                style={{
                  border: "var(--border)",
                  color: "var(--text-color)",
                }}
              >
                <i className="bi bi-star "></i> Admin
              </Button>
            </Nav.Item>
          ) : (<></>)}
          {!idLocalStorge ? (
            <>
              <Nav.Item>
                <Button
                  className="m-1"
                  variant="outline-warning"
                  onClick={handleShow}
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                >
                  <i className="bi bi-box-arrow-in-right "></i> Ingresar
                </Button>
              </Nav.Item>
            </>
          ) : (
            <>
              <ButtonGroup>
                <DropdownButton
                  className="m-1"
                  as={ButtonGroup}
                  title="Mi cuenta"
                  id="bg-nested-dropdown"
                  variant="outline-warning"
                  style={{
                    backgroundColor: "var(--background-color)",
                    backdropFilter: "blur(5px)",
                    border: "var(--border)",
                    color: "var(--text-color)",
                    height: "38px",
                  }}
                >
                  <Dropdown.Item
                    eventKey="1"
                    onClick={onClickFavorites}
                    style={{
                      backgroundColor: "var(--background-color)",
                      border: "var(--border)",
                      color: "var(--text-color)",
                    }}
                  >
                    Favoritos
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={onClickProfile}
                    style={{
                      backgroundColor: "var(--background-color)",
                      border: "var(--border)",
                      color: "var(--text-color)",
                    }}
                  >
                    Mi perfil
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={signOut}
                    style={{
                      backgroundColor: "var(--background-color)",
                      border: "var(--border)",
                      color: "var(--text-color)",
                    }}
                  >
                    Cerrar sesión
                  </Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </>
          )}
        </Nav>
      </Container>
      <ModalSign show={show} handleClose={handleClose} />
    </>
  );
}
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./NavbarHeader.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";

export default function NavbarHeader() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const user = useSelector((state) => state.user);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    window.location.reload();
  };

  return (
    <>
      <Container fluid="xxl">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/favorites">
              Favoritos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/compare">
              Comparar
            </Nav.Link>
          </Nav.Item>
          {user.length === 0 ? (
            <>
              <Nav.Item>
                <Nav.Link className={stl.colors} onClick={handleShow2}>
                  Registrarse
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={stl.colors} onClick={handleShow}>
                  Ingresar
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Nav.Link className={stl.colors}>Cart</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={stl.colors} onClick={signOut}>
                  Log Out
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
      <ModalLogin show={show} handleClose={handleClose} />
      <ModalRegister show={show2} handleClose={handleClose2} />
    </>
  );
}

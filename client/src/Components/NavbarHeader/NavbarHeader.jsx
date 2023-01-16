import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./NavbarHeader.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

export default function NavbarHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const user = useSelector((state) => state.user);
  const logged = useSelector(state => state.logged);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    navigate("/")
    window.location.reload();
  };

  const onClickProfile = () => {
    navigate("/profile")
  }

  const onClickFavorites = () => {
    navigate("/favorites")
  }

  return (
    <>
      <Container fluid="xxl">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link className={stl.colors} href="/compare">
              Comparar
            </Nav.Link>
          </Nav.Item>
          {user.length === 0 && logged === false ? (
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
              <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Usuario" id="bg-nested-dropdown" >
                  <Dropdown.Item eventKey="1" onClick={onClickFavorites}>Favoritos</Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={onClickProfile}>Mi perfil</Dropdown.Item>
                  <Dropdown.Item eventKey="3" onClick={signOut}>Cerrar sesión</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </>
          )}
        </Nav>
      </Container>
      <ModalLogin show={show} handleClose={handleClose} />
      <ModalRegister show={show2} handleClose={handleClose2} />
    </>
  );
}

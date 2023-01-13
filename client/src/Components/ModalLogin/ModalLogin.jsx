import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Google from "../Google/Google";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../../Redux/action";
import stl from "./ModalLogin.module.css";

const ModalLogin = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const sign = {
      email: email,
      password: password,
    };
    dispatch(signIn(sign));
    setEmail("");
    setPassword("");
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-8" controlId="formBasicEmail">
            <div>
              <Form.Label>
                Email
                <Form.Control
                  type="email"
                  {...register("name", { required: true })}
                  onChange={emailChangeHandler}
                  value={email}
                />
                {errors.name?.type === "required" && <p>Email is required </p>}
              </Form.Label>
            </div>
            <Form.Label>
              Contraseña
              <Form.Control
                type="password"
                {...register("password", { required: true })}
                onChange={passwordChangeHandler}
                value={password}
              />
              {errors.name?.type === "required" && <p>Password is required </p>}
            </Form.Label>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className={stl.boton2} onClick={handleClose} type="submit">
            Iniciar sesión
          </button>
          <button className={stl.boton} onClick={handleClose}>
            Cancelar
          </button>
        </Modal.Footer>
        <div>
          <Google />
        </div>
      </Form>
    </Modal>
  );
};

export default ModalLogin;

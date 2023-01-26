import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../../Redux/action";
import { Form, Modal, Nav, Button } from "react-bootstrap";

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
    <Form
      fluid
      className="m-1"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backdropFilter: "blur(5px)",
        border: "var(--border)",
        width: "490px",
      }}
    >
      <Modal.Header
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Modal.Title
          style={{
            color: "var(--clr-7-R)",
          }}
        >
          Inicia sesión
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <div>
            <Form.Label
              style={{
                color: "var(--text-color)",
              }}
            >
              Email
              <Form.Control
                type="email"
                {...register("name", { required: true })}
                onChange={emailChangeHandler}
                value={email}
                style={{
                  border: "var(--border)",
                }}
              />
              {errors.name?.type === "required" && (
                <p
                  style={{
                    color: "var(--text-color)",
                  }}
                >
                  No ingresaste tu email
                </p>
              )}
            </Form.Label>
          </div>
          <Form.Label
            style={{
              color: "var(--text-color)",
            }}
          >
            Contraseña
            <Form.Control
              type="password"
              {...register("password", { required: true })}
              onChange={passwordChangeHandler}
              value={password}
              style={{
                border: "var(--border)",
              }}
            />
            {errors.name?.type === "required" && (
              <p
                style={{
                  color: "var(--text-color)",
                }}
              >
                No ingresaste tu contraseña
              </p>
            )}
          </Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Nav.Item>
          <Nav.Link
            href="/home"
            style={{
              color: "#ffc800",
            }}
            className="m-2"
          >
            Olvidé mi contraseña
          </Nav.Link>
        </Nav.Item>
        <Button
          onClick={handleClose}
          type="submit"
          variant="outline-warning"
          style={{
            border: "1px solid #ff3c00",
            color: "var(--clr-7-R)",
            width: "170px",
          }}
          className="m-1"
        >
          Iniciar sesión
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default ModalLogin;
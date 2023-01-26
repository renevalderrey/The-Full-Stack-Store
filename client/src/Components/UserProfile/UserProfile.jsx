import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, putUser, logOut } from "../../Redux/action";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Footer from "../Footer/Footer";
import { Container, Button, Form } from "react-bootstrap";

export default function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const theUser = users.filter((u) => u.email === user.email);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(theUser[0]._id);
  console.log(user);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

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

  const onSubmit = async () => {
    const sign = {
      email: email,
      password: password,
    };
    await dispatch(putUser(theUser[0]._id, sign));
    await dispatch(logOut());
    setEmail("");
    setPassword("");
    alert("Se ha modificado correctamente");
    navigate("/");
  };

  return (
    <>
      <Header />
      <NavbarMain />
      <Container
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
          border: "var(--border)",
          boxShadow: "var(--box-shadow)",
        }}
        className="rounded-4 mt-5 mb-5 p-3"
      >
        {user && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.length > 0 ? user[0].email : user.email}
                {...register("name", { required: true })}
                onChange={emailChangeHandler}
                value={email}
                style={{
                  border: "var(--border)",
                  color: "var(--text-color)",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="*****"
                {...register("password", { required: true })}
                onChange={passwordChangeHandler}
                value={password}
                style={{
                  border: "var(--border)",
                  color: "var(--text-color)",
                }}
              />
            </Form.Group>
            <Form.Text
              style={{
                color: "#fff",
              }}
            >
              Si modifica sus datos, deberá iniciar sesión nuevamente.
            </Form.Text>
            <div>
              <Button
                variant="outline-warning"
                type="submit"
                className="m-5"
                style={{
                  border: "var(--border)",
                  color: "var(--text-color)",
                }}
              >
                Modificar
              </Button>
              <Link to="/">
                <Button
                  variant="outline-warning"
                  className="m-5"
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                >
                  Regresar
                </Button>
              </Link>
            </div>
          </Form>
        )}
      </Container>
    </>
  );
}

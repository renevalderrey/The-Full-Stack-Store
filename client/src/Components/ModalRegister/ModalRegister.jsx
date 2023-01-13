import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Google from '../Google/Google';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "../../Redux/action";

const ModalRegister = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        const sign = {
            email: email,
            password: password
        }
        dispatch(signUp(sign));
        setEmail("")
        setPassword("")
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar sesión</Modal.Title>
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
                    <Google />
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose} type="submit">
                        Registrarse
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalRegister;
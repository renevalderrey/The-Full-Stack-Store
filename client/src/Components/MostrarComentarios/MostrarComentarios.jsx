//tomar comentarios de la base de datos y mostrarlos en el componente MostrarComentarios por cada producto por id

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComents } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

export default function MostrarComentarios({ id }) {
    const dispatch = useDispatch();
    const coments = useSelector((state) => state.coments);
    const [coment, setComent] = useState({ _id: id });

    useEffect(() => {
        dispatch(getComents(id));
    }, [dispatch]);

    return (
        <Container
            style={{
                backgroundColor: "rgba(33, 37, 41,0.5)",
                backdropFilter: "blur(5px)",
                border: "1px solid #fff",
                boxShadow: "0 0 7px #fff",
            }}
            expand="lg"
            className="rounded-4"
        >
            <h5
                style={{
                    color: "#ff3c00",
                }}
                className="mt-3"
            >
                Comentarios
            </h5>
            <Row className="justify-content-md-center">
                <Col>
                    {coments && coments.map((coment) => (
                        <div key={coment._id}>
                            <p>{coment.coments}</p>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}


//mostrar comentarios
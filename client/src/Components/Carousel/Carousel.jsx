import React from "react";
import Carousel from "react-bootstrap/Carousel";
import stl from "./Carousel.module.css";
import Container from "react-bootstrap/Container";

export default function CarouselMain() {
  return (
    <>
      <Container fluid="xxl">
        <div className={stl.container}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image/carousel (1).png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image/carousel (2).png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image/carousel (3).png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}

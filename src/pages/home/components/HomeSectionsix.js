import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Images from "./Images";
import hallone from "../images/hall-img-one.jpg";
import halltwo from "../images/hall-img-two.jpg";
import MainLayOut from "../../../LayOut/MainLayOut";
import { useContext } from "react";
import { ThemeContext } from "../Home";
function HomeSectionsix() {
  const { products } = useContext(ThemeContext);

  return (
    <>
      <MainLayOut>
        <Container>
          <div className="home_sec_6 my-2 my-md-5">
            <Row>
              <Col md={6} data-aos="fade-left" data-aos-duration="3000">
                <Images link={hallone} styles="img-fluid" alt="hall-pic" />
              </Col>
              <Col md={6} data-aos="fade-right" data-aos-duration="3000">
                <Images
                  link={halltwo}
                  styles="img-fluid pt-3 pt-md-0"
                  alt="hall-pic"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </MainLayOut>
    </>
  );
}

export default HomeSectionsix;

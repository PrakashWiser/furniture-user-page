import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainLayOut from "./Layout/Mainlayout";
import Images from "./Images";
import home1 from "../images/home-sec-8-1.jpg";
import home2 from "../images/home-sec-8-2.jpg";
import home3 from "../images/home-sec-8-3.jpg";
import home4 from "../images/home-sec-8-4.jpg";
import home5 from "../images/home-sec-8-5.jpg";
import home6 from "../images/home-sec-8-6.jpg";
import { Link } from "react-router-dom";
function HomeSectioneight() {
  return (
    <>
      <MainLayOut styles="home_sec_8">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <div>
                <h5>Instagram Shop</h5>
                <p>
                  Tag @miniture in your Instagram photos for a chance to be
                  featured here.
                </p>
                <Link
                  to="https://www.instagram.com/itzprakash_2503/"
                  className="rounded-pill border border-1 py-1 px-3"
                >
                  Visit Our Instagram
                </Link>
              </div>
            </Col>
            <Col md={8}>
              <div className="position-relative py-3 py-md-0">
                <ul className="d-flex gap-4 ">
                  <li>
                    <Images link={home1} styles="img-fluid" />
                  </li>
                  <li>
                    <Images link={home2} styles="img-fluid" />
                  </li>
                  <li>
                    <Images link={home3} styles="img-fluid " />
                  </li>
                </ul>
                <ul className="d-flex gap-4">
                  <li>
                    <Images link={home4} styles="img-fluid" />
                  </li>
                  <li className="postion_type">
                    <Images link={home6} styles="img-fluid " />
                  </li>
                  <li>
                    <Images link={home5} styles="img-fluid" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </MainLayOut>
    </>
  );
}

export default HomeSectioneight;

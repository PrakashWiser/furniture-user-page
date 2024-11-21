import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainLayOut from "./Layout/Mainlayout";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Home";
import Images from "./Images";

function HomeSectionthree() {
  const navigate = useNavigate();
  const { products } = useContext(ThemeContext);
  const [productss, setProductss] = useState([]);
  const [title, setTitle] = useState("Chairs");

  const GitUrl =
    "https://raw.githubusercontent.com/prakashwiser/User-page-furniture/refs/heads/main/src/pages/home/images/";

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.listingType === "chair"
    );
    setProductss(filteredProducts);
  }, [products]);

  const handleClick = (id) => {
    navigate(`/ProductsPage/${id}`);
  };

  useEffect(() => {
    if (productss.length === 0) {
      setTitle("No Chairs Available");
    } else {
      setTitle("Chairs");
    }
  }, [productss]);

  return (
    <MainLayOut>
      <Container>
        <div className="d-flex justify-content-center categories">
          <h3>{title}</h3>
        </div>

        <Row>
          {productss.map((item) => (
            <Col key={item.id} md={6} lg={3}>
              <div
                className="home_sec_3 pt-3 pt-lg-0"
                onClick={() => handleClick(item.id)}
              >
                <div
                  className="image-container"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="3000"
                >
                  <Images
                    link={GitUrl + item.image}
                    styles="img-fluid"
                    alt={item.name}
                  />
                  {item.sale && <span className="sale-tag">{item.sale}</span>}
                  {item.stack && (
                    <span className="out-of-stock">{item.stack}</span>
                  )}
                </div>

                <p>{item.name}</p>
                <label>{item.price}</label>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayOut>
  );
}

export default HomeSectionthree;

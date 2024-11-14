import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainLayOut from "../../../LayOut/MainLayOut";
import { useNavigate } from "react-router-dom";
import chair1 from "../images/chear-1.jpeg";
import chair2 from "../images/chear-2.jpeg";
import chair3 from "../images/chear-3.jpeg";
import chair4 from "../images/chear-4.jpeg";
import chair5 from "../images/chear-5.jpeg";
import chair6 from "../images/chear-6.jpeg";
import chair7 from "../images/chear-7.jpeg";
import chair8 from "../images/chear-9.jpeg";
import Images from "./Images";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../Home";
function HomeSectionthree() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("Kitchen");

  const objData = [
    {
      id: 0,
      img: chair1,
      name: "Natural Wood Dining Chair",
      price: "$299.99",
      category: "Kitchen",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 1,
      img: chair2,
      name: "Paolo Black Wood Dining Chair",
      price: "$139.99",
      category: "Living Room",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 2,
      img: chair3,
      name: "Ana Grey Dining Chair",
      price: "$299.99",
      category: "Living Room",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 3,
      img: chair4,
      name: "Curved Back Dining Chair",
      price: "$129.99",
      sale: "SALE!",
      category: "Bedroom",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 4,
      img: chair5,
      name: "Top-Grain Leather Dining Chair",
      price: "$129.99-$299.99",
      sale: "SALE!",
      category: "Kitchen",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 5,
      img: chair6,
      name: "Camille Taupe Italian Dining Chair",
      price: "$139.99",
      category: "Kitchen",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 6,
      img: chair7,
      name: "Pali Black Hardwood Dining Chair",
      price: "$139.99",
      stack: "Out of stock",
      category: "Bedroom",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 7,
      img: chair8,
      name: "Paolo Natural Wood Dining Chair",
      price: "$229.99",
      category: "Living Room",
      icons: [<FaRegHeart />, <FiSearch />],
    },
  ];

  const [products, setProducts] = useState(objData);

  const handleClick = (id) => {
    navigate(`/ProductsPage/${id}`);
  };

  const filterProductsByCategory = (category) => {
    if (category === "all") {
      setProducts(objData);
    } else {
      const filteredProducts = objData.filter(
        (item) => item.category === category
      );
      setProducts(filteredProducts);
    }
  };

  const toggleCategory = (category) => {
    setCategory(category);
    filterProductsByCategory(category);
  };

  return (
    <MainLayOut>
      <Container>
        <div className="d-flex justify-content-center categories">
          <h3>
            You are in{" "}
            <span onClick={() => setIsActive((prev) => !prev)}>
              {category} <IoIosArrowDown />
            </span>
          </h3>

          {isActive && (
            <ul className="categories_list">
              <li onClick={() => toggleCategory("Kitchen")}>Kitchen</li>
              <li onClick={() => toggleCategory("Living Room")}>Living Room</li>
              <li onClick={() => toggleCategory("Bedroom")}>Bedroom</li>
              <li onClick={() => toggleCategory("all")}>All</li>
            </ul>
          )}
        </div>

        <Row>
          {products.map((item) => (
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
                  <Images link={item.img} styles="img-fluid" alt={item.name} />
                  {item.sale && <span className="sale-tag">{item.sale}</span>}
                  {item.stack && (
                    <span className="out-of-stock">{item.stack}</span>
                  )}
                </div>

                <p>{item.name}</p>
                <label>{item.price}</label>

                {item.icons && (
                  <div className="icons-container">
                    {item.icons.map((icon, index) => (
                      <span key={index} className="icon">
                        {icon}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayOut>
  );
}

export default HomeSectionthree;

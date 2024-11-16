import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainLayOut from "../../../Layout/MainLayOut";
import { GiShoppingCart } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoFootballOutline } from "react-icons/io5";
import { GrAtm } from "react-icons/gr";
import { useContext } from "react";
import { ThemeContext } from "../Home";
function HomeSectionseven() {
  const { products } = useContext(ThemeContext);

  const ObjData = [
    {
      icon: <GiShoppingCart />,
      title: "Free Shipping",
      order: "Free Shipping for orders",
    },
    {
      icon: <RiMoneyDollarCircleFill />,
      title: "Money Guarantee",
      order: "Within 30 days",
    },
    {
      icon: <IoFootballOutline />,
      title: "Online Support",
      order: "24 hours a day, 7 days a week",
    },
    {
      icon: <GrAtm />,
      title: "Flexible Payment",
      order: "Pay with Multiple Credit Cards",
    },
  ];

  return (
    <MainLayOut>
      <Container>
        <Row className="my-3 my-lg-5">
          {ObjData.map((items, index) => (
            <Col key={index} md={4} lg={3}> 
              <div className="d-flex justify-md-content-center gap-3 home_sec_7">
                <span className="sociel_icon">{items.icon}</span>
                <ul>
                  <li>{items.title}</li>
                  <span>{items.order}</span>
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayOut>
  );
}

export default HomeSectionseven;

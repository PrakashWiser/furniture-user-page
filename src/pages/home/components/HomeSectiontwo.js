import Carousel from "react-bootstrap/Carousel";
import MainLayOut from "./Layout/Mainlayout";
import { Container, Row, Col } from "react-bootstrap";
import Images from "./Images";
import liveroom from "../images/live-room.jpg";
import bedroom from "../images/bad-room.jpg";
import kichenroow from "../images/kichen-room.jpg";
import kidroom from "../images/kids-rrom.jpg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Home";

function HomeSectiontwo() {
  const { products } = useContext(ThemeContext);
  const [banner, setBanner] = useState([]);
  const GitUrl =
    "https://raw.githubusercontent.com/prakashwiser/User-page-furniture/refs/heads/main/src/pages/home/images/";

  useEffect(() => {
    let Filter = products.filter((item) => item.listingType === "others");
    setBanner(Filter);
    }, [products]);

  return (
    <MainLayOut>
      <Container>
        <div
          className="Home_sec_2"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Carousel data-bs-theme="dark" indicators={false}>
            {banner.map((items, index) => (
              <Carousel.Item key={index}>
                <Images
                  link={GitUrl + items.image}
                  styles="img-fluid"
                  alt={`slide-img-${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div
          className="my-3 my-md-5 demo_img"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Row>
            <Col md={4}>
              <Images link={liveroom} styles="img-fluid" alt="live_room" />
            </Col>
            <Col md={4} className="my-2 my-md-0">
              <Images link={bedroom} styles="img-fluid" alt="bedroom" />
            </Col>
            <Col md={4}>
              <Images link={kichenroow} styles="w-100" alt="kitchen_room" />
              <Images link={kidroom} styles="w-100 py-2" alt="kid_room" />
            </Col>
          </Row>
        </div>
      </Container>
    </MainLayOut>
  );
}

export default HomeSectiontwo;

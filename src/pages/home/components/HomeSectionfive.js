import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Container } from "react-bootstrap";
import MainLayOut from "../../../Layout/MainLayOut";
import Images from "./Images";
import { useContext } from "react";
import { ThemeContext } from "../Home";
export default function HomeSectionfive() {
  const { products } = useContext(ThemeContext);
  const [productss, setProductss] = useState([]);
  const GitUrl =
    "https://raw.githubusercontent.com/prakashwiser/User-page-furniture/refs/heads/main/src/pages/home/images/";

  useEffect(() => {
    let Filter = products.filter((item) => item.listingType === "Bedroom");
    setProductss(Filter);
  }, [products]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/ProductsPage/${id}`);
  };

  return (
    <MainLayOut>
      <Container>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {productss.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="home_sec_3 pt-3 pt-lg-0"
                onClick={() => handleClick(item.id)}
              >
                <div
                  className="image-container"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <Images
                    link={GitUrl + item.image}
                    styles="img-fluid"
                    alt={item.name}
                  />
                </div>
                <p>{item.name}</p>
                <label>{item.price}</label>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </MainLayOut>
  );
}

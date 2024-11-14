import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import badone from "../images/bad-1.jpeg";
import badtwo from "../images/bad-2.jpeg";
import badthree from "../images/bad-3.jpeg";
import badfour from "../images/bad-4.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Container } from "react-bootstrap";
import MainLayOut from "../../../LayOut/MainLayOut";
import Images from "./Images";
import { useContext } from "react";
import { ThemeContext } from "../Home";
export default function HomeSectionfive() {
  const { products } = useContext(ThemeContext);
  const ArrayData = [
    {
      id: 8,
      img: badone,
      name: "Wells Renew Vegan Leather Chair",
      price: "$299.99",
      category: "Kitchen",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 9,
      img: badtwo,
      name: "Axis 2-Piece Sectional Sofa",
      price: "$499.99",
      category: "Living Room",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 10,
      img: badthree,
      name: "Medoc Swivel Chair",
      price: "$199.99",
      category: "Living Room",
      icons: [<FaRegHeart />, <FiSearch />],
    },
    {
      id: 11,
      img: badfour,
      name: "Polly Sand Brown Accent Chair",
      price: "$150.99",
      category: "Living Room",
      icons: [<FaRegHeart />, <FiSearch />],
    },
  ];

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
          {ArrayData.map((item) => (
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
                  <Images link={item.img} styles="img-fluid" alt={item.name} />
                  {item.sale && <span className="sale-tag">{item.sale}</span>}
                  {item.stack && (
                    <span className="out-of-stock">{item.stack}</span>
                  )}
                </div>
                <p>{item.name}</p>
                <label>{item.price}</label>
                <div className="icons-container">
                  {item.icons.map((icon, index) => (
                    <span key={index} className="icon">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </MainLayOut>
  );
}

import React from "react";
import MainLayOut from "./Layout/Mainlayout";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
function HomeSectionone() {
  const handleShopNowClick = () => {
    toast.success("Welcome to the Shop! Explore our latest collection.");
  };

  return (
    <>
      <MainLayOut>
        <Container>
          <div
            className="Home_sec_1 text_color my-2 my-md-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className="inter">Elevate Your Lifestyle</h2>
            <h2>with Our Furniture</h2>
            <ul>
              <li className="d-lg-flex gap-3 align-items-center">
                <h2>Creations</h2>
                <Button onClick={handleShopNowClick} className="text-white" variant="warning">
                  Shop Now
                </Button>
              </li>
            </ul>
          </div>
        </Container>
      </MainLayOut>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default HomeSectionone;

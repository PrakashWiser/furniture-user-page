import React, { useState, useEffect } from "react";
import MainLayOut from "../../../Layout/MainLayOut";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../Home";
const videoUrl =
  "https://www.youtube.com/embed/yDgFcEzaCQ0?si=uhyoIL3sHUSquc-5";

function HomeSectionfour() {
  const { products } = useContext(ThemeContext);

  const [time, setTime] = useState({
    day: new Date().getDay(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        day: now.getDay(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  const HandleClick = () => {
    toast.warning(`currently not available Coming Soon`);
  };
  return (
    <>
      <MainLayOut styles="pt-md-5 home_sec_4">
        <Container>
          <div className="shop">
            <Link className="rounded-pill border border-1 py-3 px-5">
              Shop all Products
            </Link>
          </div>
          <Row className="py-5">
            <Col md={6}>
              <VideoPlayer url={videoUrl} />
            </Col>
            <Col md={6}>
              <div
                className="limited_time d-flex  flex-column justify-content-center align-items-center text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <span>limited time only</span>
                <h3 className=" fw600">The living room event up to 30% off</h3>
                <p>
                  Striking the perfect balance between comfort and modern style,
                  Gather is clean-lined and current.
                </p>
                {/* <ul className="d-flex gap-2 gap-md-5 justify-content-center">
                  <li className="rounded-circle border border-secondary">
                    {" "}
                    {time.day}
                  </li>

                  <li className="rounded-circle border border-secondary">
                    {" "}
                    {time.hours}
                  </li>
                  <li className="rounded-circle border border-secondary">
                    {" "}
                    {time.minutes}
                  </li>
                  <li className="rounded-circle border border-secondary">
                    {" "}
                    {time.seconds}
                  </li>
                </ul> */}
                <Link
                  onClick={() => HandleClick()}
                  className="rounded-pill border border-1 py-3 px-5 mt-4 fw600"
                >
                  Shop the Sale
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
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
      </MainLayOut>
    </>
  );
}

export default HomeSectionfour;

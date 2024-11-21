import React, { useState } from "react";
import MainLayOut from "./Layout/Mainlayout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { toast, ToastContainer } from "react-toastify";

const videoUrl = "https://www.youtube.com/watch?v=yDgFcEzaCQ0";

function HomeSectionfour() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <MainLayOut styles="pt-md-5 home_sec_4">
        <Container>
          <div className="shop">
            <Link
              className="rounded-pill border border-1 py-3 px-5"
              onClick={() => setIsPlaying((pre) => !pre)}
            >
              Shop Our Event
            </Link>
          </div>
          <Row className="py-5">
            <Col md={6}>
              <VideoPlayer url={videoUrl} isPlaying={isPlaying} />
            </Col>
            <Col md={6}>
              <div
                className="limited_time d-flex flex-column justify-content-center align-items-center text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <span>limited time only</span>
                <h3 className="fw600">The living room event up to 30% off</h3>
                <p>
                  Striking the perfect balance between comfort and modern style,
                  Gather is clean-lined and current.
                </p>
                <Link
                  onClick={() =>
                    toast.warning("Currently not available. Coming Soon")
                  }
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

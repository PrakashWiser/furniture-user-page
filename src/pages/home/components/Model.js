import React from "react";
import { Modal } from "react-bootstrap";
import Images from "./Images";
import model from "../images/mode-2.jpg";
import { MdOutlineDangerous } from "react-icons/md";

function Model({ showmodel, setShowmodel }) {
  const handleCloseModal = () => setShowmodel(false);

  return (
    <>
      <Modal
        className="postion-relative model_pic"
        show={showmodel}
        onHide={handleCloseModal}
      >
        <Images link={model} styles="img-fluid" alt="model-pic" />
        <MdOutlineDangerous
          className="danger_iocn"
          onClick={handleCloseModal}
        />
      </Modal>
    </>
  );
}

export default Model;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import MainLayOut from "./Layout/Mainlayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import objData from "./ObjData";
const ProductPage = () => {
  const { id } = useParams();

  const selectedChair = objData.find((chair) => chair.id === parseInt(id));
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    const productInCart = cartItems.find(
      (item) => item.id === selectedChair.id
    );
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === selectedChair.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...selectedChair, quantity: 1 }]);
    }

    toast.success(`${selectedChair.name} added to cart!`);
  };

  const handleRemoveFromCart = (id) => {
    const productInCart = cartItems.find((item) => item.id === id);
    if (productInCart.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const handleIconClick = () => {
    setShowCart(true);
  };

  return (
    <MainLayOut>
      <Container className="pt-5">
        <Row>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Images link={selectedChair.img} styles="img-fluid" />
          </Col>
          <Col lg={6}>
            <h3>{selectedChair.name}</h3>
            <h5>{selectedChair.price}</h5>
            <p>{selectedChair.description}</p>
            <div>
              <p>
                <strong>Color:</strong> {selectedChair.color}
              </p>
              <p>
                <strong>Material:</strong> {selectedChair.material}
              </p>
              <p>
                <strong>Dimensions:</strong> {selectedChair.dimensions}
              </p>
              <p>
                <strong>Rating:</strong> {selectedChair.rating} / 5
              </p>
              <p>
                <strong>Category:</strong> {selectedChair.Categories}
              </p>
              <p>
                <strong>feature:</strong> {selectedChair.feature}
              </p>
            </div>
            <div className="d-flex gap-3 my-4">
              <Button className="bg-success border-0" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button className="bg-warning border-0" onClick={handleIconClick}>
                {selectedChair.icon}
              </Button>
            </div>
            <span>{selectedChair.bio}</span>
          </Col>
        </Row>
      </Container>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      <Offcanvas
        show={showCart}
        onHide={() => setShowCart(false)}
        placement="end"
        className="offcanvas-end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </MainLayOut>
  );
};

export default ProductPage;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import chair1 from "../images/chear-1.jpeg";
import chair2 from "../images/chear-2.jpeg";
import chair3 from "../images/chear-3.jpeg";
import chair4 from "../images/chear-4.jpeg";
import chair5 from "../images/chear-5.jpeg";
import chair6 from "../images/chear-6.jpeg";
import chair7 from "../images/chear-7.jpeg";
import chair8 from "../images/chear-8.jpeg";
import badone from "../images/bad-1.jpeg";
import badtwo from "../images/bad-2.jpeg";
import badthree from "../images/bad-3.jpeg";
import badfour from "../images/bad-4.jpeg";
import { FiPlusCircle, FiMinusCircle, FiChevronDown } from "react-icons/fi";
import Images from "./Images";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import MainLayOut from "../../../LayOut/MainLayOut";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const { id } = useParams();

  const objData = [
    {
      id: 0,
      img: chair1,
      name: "Natural Wood Dining Chair",
      price: "$299.99",
      Categories: "Dining Chair, Dining Room",
      tags: "clean, deco, furniture, m1, product, woocommerce",
      description:
        "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
    },
    {
      id: 1,
      img: chair2,
      name: "Paolo Black Wood Dining Chair",
      price: "$139.99",
      Categories: "Dining Chair, Dining Room",
      tags: "black, wood, dining, modern",
      description:
        "A sleek and modern dining chair crafted from high-quality black wood, perfect for any dining room setting.",
    },
    {
      id: 2,
      img: chair3,
      name: "Classic Leather Dining Chair",
      price: "$179.99",
      Categories: "Dining Chair, Leather, Dining Room",
      tags: "classic, leather, dining, luxurious, modern",
      description:
        "A sophisticated dining chair with a comfortable leather seat and a stylish wooden frame. Ideal for modern dining rooms.",
    },
    {
      id: 3,
      img: chair4,
      name: "Rustic Farmhouse Chair",
      price: "$149.99",
      Categories: "Dining Chair, Rustic, Farmhouse",
      tags: "rustic, farmhouse, wood, vintage",
      description:
        "A charming farmhouse-style dining chair with a distressed finish and sturdy wooden frame. A perfect addition to a cozy dining space.",
    },
    {
      id: 4,
      img: chair5,
      name: "Industrial Metal Chair",
      price: "$119.99",
      Categories: "Dining Chair, Industrial, Metal",
      tags: "industrial, metal, modern, urban",
      description:
        "An industrial-inspired chair with a minimalist metal design. Ideal for modern kitchens, cafes, or industrial-style interiors.",
    },
    {
      id: 5,
      img: chair6,
      name: "Minimalist Dining Chair",
      price: "$99.99",
      Categories: "Dining Chair, Minimalist",
      tags: "minimalist, simple, modern, sleek",
      description:
        "A clean and simple dining chair designed for modern spaces. Its minimalist design makes it a versatile piece for various interiors.",
    },
    {
      id: 6,
      img: chair7,
      name: "Scandi Dining Chair",
      price: "$129.99",
      Categories: "Dining Chair, Scandinavian",
      tags: "scandi, nordic, wood, clean, stylish",
      description:
        "A Scandinavian-inspired dining chair with a sleek wooden frame and comfortable seating. Perfect for contemporary dining rooms.",
    },
    {
      id: 7,
      img: chair8,
      name: "Contemporary Leather Chair",
      price: "$219.99",
      Categories: "Dining Chair, Leather, Modern",
      tags: "contemporary, leather, dining, luxury",
      description:
        "A luxurious leather dining chair with a contemporary design. Ideal for modern homes looking for both comfort and style.",
    },
    {
      id: 8,
      img: badone,
      name: "Comfort Plus Dining Chair",
      price: "$249.99",
      Categories: "Dining Chair, Comfort, Modern",
      tags: "comfort, plush, dining, modern",
      description:
        "A plush and comfortable dining chair designed with modern aesthetics in mind. Perfect for long dinners and gatherings.",
    },
    {
      id: 9,
      img: badtwo,
      name: "Bold Accent Chair",
      price: "$179.99",
      Categories: "Dining Chair, Accent, Modern",
      tags: "bold, accent, unique, modern",
      description:
        "A bold accent chair designed to stand out in any room. Its sleek design and vibrant color make it a perfect statement piece.",
    },
    {
      id: 10,
      img: badthree,
      name: "Elegant Wooden Chair",
      price: "$159.99",
      Categories: "Dining Chair, Wooden, Elegant",
      tags: "elegant, wooden, dining, classic",
      description:
        "An elegant wooden dining chair with refined details, perfect for classic dining rooms or traditional spaces.",
    },
    {
      id: 11,
      img: badfour,
      name: "Vintage Dining Chair",
      price: "$169.99",
      Categories: "Dining Chair, Vintage, Retro",
      tags: "vintage, retro, dining, classic",
      description:
        "A vintage-style dining chair that adds a touch of retro charm to any room. The detailed design and sturdy frame are built to last.",
    },
  ];

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
    if (productInCart && productInCart.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <MainLayOut styles="my-5">
      <Container>
        {selectedChair ? (
          <Row>
            <Col md={6}>
              <Images
                link={selectedChair.img}
                alt={selectedChair.name}
                styles="img-fluid"
              />
            </Col>

            <Col md={6}>
              <h1>{selectedChair.name}</h1>
              <p>
                <strong>Price:</strong> {selectedChair.price}
              </p>
              <p>
                <strong>Description:</strong> {selectedChair.description}
              </p>
              <p>
                <strong>Category:</strong> {selectedChair.Categories}
              </p>
              <p>
                <strong>Tags:</strong> {selectedChair.tags}
              </p>

              <div className="d-flex align-items-center border w-25 justify-content-center p-2">
                <Button
                  variant="outline-secondary"
                  onClick={handleRemoveFromCart}
                  style={{
                    borderRadius: "50%",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <FiMinusCircle />
                </Button>
                <span className="mx-3">
                  {
                    cartItems.filter((item) => item.id === selectedChair.id)
                      .length
                  }
                </span>
                <Button
                  variant="outline-secondary"
                  onClick={handleAddToCart}
                  style={{
                    borderRadius: "50%",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <FiPlusCircle />
                </Button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="mt-5 bg_org border-0"
              >
                {cartItems.some((item) => item.id === selectedChair.id)
                  ? `Added to Cart`
                  : "Add to Cart"}
              </Button>
            </Col>
          </Row>
        ) : (
          <p>Product not found</p>
        )}
      </Container>

      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="link"
          onClick={handleShowCart}
          style={{ fontSize: "24px", color: "#007bff" }}
        >
          <FiChevronDown />
        </Button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between">
                  <div>
                    <h6>{item.name}</h6>
                    <p>{item.price}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleRemoveFromCart(item.id)}
                      style={{
                        borderRadius: "50%",
                        padding: "5px",
                        border: "none",
                      }}
                    >
                      <FiMinusCircle />
                    </Button>
                    <span className="mx-3">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleAddToCart(item.id)}
                      style={{
                        borderRadius: "50%",
                        padding: "5px",
                        border: "none",
                      }}
                    >
                      <FiPlusCircle />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-3">
                <Button className="bg_org border-0 fw600">Go to Cart</Button>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </MainLayOut>
  );
};

export default ProductPage;

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
import { FaShopify } from "react-icons/fa";
import Images from "./Images";
import { Container, Row, Col, Button, Offcanvas } from "react-bootstrap";
import MainLayOut from "../../../Layout/MainLayOut";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const { id } = useParams();

  const objData = [
    {
      id: 1,
      img: chair1,
      name: "Natural Wood Dining Chair",
      price: "$299.99",
      Categories: "Dining Chair, Dining Room",
      tags: "clean, deco, furniture, m1, product, woocommerce",
      description:
        "Product categories and tags work in much the same way as normal categories and tags you have when writing posts in WordPress. They can be created, edited, and selected at any time.",
      icon: <FaShopify />,
      color: "brown",
      material: "Wood",
      dimensions: "20x18x35 inches",
      rating: 4.5,
      feature: "Crafted from premium natural wood for durability and style.",
    },
    {
      id: 2,
      img: chair2,
      name: "Paolo Black Wood Dining Chair",
      price: "$139.99",
      Categories: "Dining Chair, Dining Room",
      tags: "black, wood, dining, modern",
      description:
        "A sleek and modern dining chair crafted from high-quality black wood, perfect for any dining room setting.",
      icon: <FaShopify />,
      color: "black",
      material: "Wood",
      dimensions: "21x19x37 inches",
      rating: 4.0,
      feature: "Sleek black finish for a sophisticated dining experience.",
    },
    {
      id: 3,
      img: chair3,
      name: "Classic Leather Dining Chair",
      price: "$179.99",
      Categories: "Dining Chair, Leather, Dining Room",
      tags: "classic, leather, dining, luxurious, modern",
      description:
        "A sophisticated dining chair with a comfortable leather seat and a stylish wooden frame. Ideal for modern dining rooms.",
      icon: <FaShopify />,
      color: "brown",
      material: "Leather",
      dimensions: "22x20x38 inches",
      rating: 4.8,
      feature: "Luxurious leather seat with ergonomic design for comfort.",
    },
    {
      id: 4,
      img: chair4,
      name: "Rustic Farmhouse Chair",
      price: "$149.99",
      Categories: "Dining Chair, Rustic, Farmhouse",
      tags: "rustic, farmhouse, wood, vintage",
      description:
        "A charming farmhouse-style dining chair with a distressed finish and sturdy wooden frame. A perfect addition to a cozy dining space.",
      icon: <FaShopify />,
      color: "gray",
      material: "Wood",
      dimensions: "23x21x36 inches",
      rating: 3.5,
      feature: "Distressed finish adds rustic charm to your dining room.",
    },
    {
      id: 5,
      img: chair5,
      name: "Industrial Metal Chair",
      price: "$119.99",
      Categories: "Dining Chair, Industrial, Metal",
      tags: "industrial, metal, modern, urban",
      description:
        "An industrial-inspired chair with a minimalist metal design. Ideal for modern kitchens, cafes, or industrial-style interiors.",
      icon: <FaShopify />,
      color: "silver",
      material: "Metal",
      dimensions: "22x18x34 inches",
      rating: 4.2,
      feature: "Minimalist metal design for a contemporary industrial look.",
    },
    {
      id: 6,
      img: chair6,
      name: "Minimalist Dining Chair",
      price: "$99.99",
      Categories: "Dining Chair, Minimalist",
      tags: "minimalist, simple, modern, sleek",
      description:
        "A clean and simple dining chair designed for modern spaces. Its minimalist design makes it a versatile piece for various interiors.",
      icon: <FaShopify />,
      color: "white",
      material: "Plastic",
      dimensions: "20x19x33 inches",
      rating: 4.7,
      feature: "Lightweight and versatile design for easy placement.",
    },
    {
      id: 7,
      img: chair7,
      name: "Scandi Dining Chair",
      price: "$129.99",
      Categories: "Dining Chair, Scandinavian",
      tags: "scandi, nordic, wood, clean, stylish",
      description:
        "A Scandinavian-inspired dining chair with a sleek wooden frame and comfortable seating. Perfect for contemporary dining rooms.",
      icon: <FaShopify />,
      color: "natural",
      material: "Wood",
      dimensions: "21x18x35 inches",
      rating: 4.3,
      feature: "Scandinavian design for modern and minimalist interiors.",
    },
    {
      id: 8,
      img: chair8,
      name: "Contemporary Leather Chair",
      price: "$219.99",
      Categories: "Dining Chair, Leather, Modern",
      tags: "contemporary, leather, dining, luxury",
      description:
        "A luxurious leather dining chair with a contemporary design. Ideal for modern homes looking for both comfort and style.",
      icon: <FaShopify />,
      color: "black",
      material: "Leather",
      dimensions: "24x20x38 inches",
      rating: 4.9,
      feature: "Contemporary design with premium leather upholstery.",
    },
    {
      id: 9,
      img: badone,
      name: "Comfort Plus Dining Chair",
      price: "$249.99",
      Categories: "Dining Chair, Comfort, Modern",
      tags: "comfort, plush, dining, modern",
      description:
        "A plush and comfortable dining chair designed with modern aesthetics in mind. Perfect for long dinners and gatherings.",
      icon: <FaShopify />,
      color: "beige",
      material: "Fabric",
      dimensions: "23x19x36 inches",
      rating: 4.6,
      feature: "Plush cushioning for ultimate dining comfort.",
    },
    {
      id: 10,
      img: badtwo,
      name: "Bold Accent Chair",
      price: "$179.99",
      Categories: "Dining Chair, Accent, Modern",
      tags: "bold, accent, unique, modern",
      description:
        "A bold accent chair designed to stand out in any room. Its sleek design and vibrant color make it a perfect statement piece.",
      icon: <FaShopify />,
      color: "red",
      material: "Velvet",
      dimensions: "22x21x34 inches",
      rating: 4.0,
      feature: "Vibrant color and bold design for a statement piece.",
    },
    {
      id: 11,
      img: badthree,
      name: "Elegant Wooden Chair",
      price: "$159.99",
      Categories: "Dining Chair, Wooden, Elegant",
      tags: "elegant, wooden, dining, classic",
      description:
        "An elegant wooden dining chair with refined details, perfect for classic dining rooms or traditional spaces.",
      icon: <FaShopify />,
      color: "dark brown",
      material: "Wood",
      dimensions: "23x19x36 inches",
      rating: 4.4,
      feature: "Classic wooden frame with intricate detailing.",
    },
    {
      id: 12,
      img: badfour,
      name: "Vintage Dining Chair",
      price: "$169.99",
      Categories: "Dining Chair, Vintage, Retro",
      tags: "vintage, retro, dining, classic",
      description:
        "A vintage-style dining chair that adds a touch of retro charm to any room. The detailed design and sturdy frame are built to last.",
      icon: <FaShopify />,
      color: "vintage brown",
      material: "Wood",
      dimensions: "22x20x35 inches",
      rating: 4.2,
      feature: "Retro charm with a sturdy, durable build.",
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
          <Col lg={6} className="d-flex justify-content-center">
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
                {" "}
                <strong>feature:</strong> {selectedChair.feature}
              </p>
            </div>
            <div className="d-flex gap-3">
              <Button className="bg-success border-0" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button className="bg-warning border-0" onClick={handleIconClick}>
                {selectedChair.icon}
              </Button>
            </div>
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

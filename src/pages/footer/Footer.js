import React from "react";
import MainLayOut from "../../LayOut/MainLayOut";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFreeCodeCamp,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import "./style.css"; // Ensure correct import for styles

function Footer() {
  const socialLinks = [
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/yourprofile",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/yourprofile",
    },
    {
      icon: <FaFreeCodeCamp />,
      link: "https://www.freecodecamp.org/yourprofile",
    },
  ];

  const quickLinks = [
    { title: "Quick Links" },
    { name: "My Account", link: "/account" },
    { name: "Shop", link: "/shop" },
    { name: "Contact Us", link: "/contact" },
    { name: "About Us", link: "/about" },
  ];

  const aboutLinks = [
    { title: "Information" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Refund Policy", link: "/refund-policy" },
    { name: "Shipping & Return", link: "/shipping-return" },
    { name: "Terms & Conditions", link: "/terms-conditions" },
  ];

  return (
    <MainLayOut styles="footer">
      <Container >
        <Row>
          <Col md={3}>
            <h5>Our Store</h5>
            <p>
              Miniture is one of the biggest international fashion companies,
              one of the world’s largest distribution groups.
            </p>
            <ul className="d-flex gap-2">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3}>
            <h5>{quickLinks[0].title}</h5>
            <ul>
              {quickLinks.slice(1).map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3}>
            <h5>{aboutLinks[0].title}</h5>
            <ul>
              {aboutLinks.slice(1).map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} className="footer-contact">
            <h2>Let’s get in touch</h2>
            <span>
              Sign up for our newsletter and receive 10% off your next
              purchase!
            </span>
            <InputGroup className="mt-3 custom-input-group">
              <FormControl
                placeholder="Enter your email..."
                aria-label="Enter your email"
              />
              <InputGroup.Text as="span" className="custom-input-button">
                <Button variant="outline-secondary">
                  <FaArrowRight />
                </Button>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </MainLayOut>
  );
}

export default Footer;

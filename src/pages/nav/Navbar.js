import React, { useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import "./style.css";

function Navbars() {
  const [value, setValue] = useState("light");
  useMemo(() => {
    if (value === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);

  return (
    <Navbar expand="lg" className="bg_theme sticky-top">
      <Container>
        <Navbar.Brand href="/">Furniture</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-lg-auto my-2 my-lg-0 d-lg-flex gap-lg-3 align-lg-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={() => setValue(value === "light" ? "dark" : "light")}
            >
              {value === "light" ? <FiMoon /> : <MdLightMode />}
            </Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link
              className="bg-success px-4 inline-block btn_login"
              href="/Login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="bg-primary px-4  my-3 my-lg-0 btn_login"
              href="/Signup"
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

import React, { useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import "./style.css";

function Navbars() {
  const [value, setValue] = useState("light");
  console.log(value);

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
        <Navbar.Brand href="/">Miniture</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-lg-flex gap-lg-4 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link
              onClick={() => setValue(value === "light" ? "dark" : "light")}
            >
              {value === "light" ? <MdLightMode /> : <FiMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

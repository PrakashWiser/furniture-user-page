import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdLightMode } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import "./style.css";

function Navbars() {
  const [user, setUser] = useState(() => localStorage.getItem("userData"));
  const [value, setValue] = useState("light");

  useEffect(() => {
    if (value === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("userData"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <Navbar expand="lg" className="bg_theme sticky-top">
      <Container>
        <Link  to="/" aria-label="Brand Logo">
          Furniture
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-lg-auto my-2 d-lg-flex gap-3 align-lg-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className="nav-link"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setValue(value === "light" ? "dark" : "light");
              }}
              aria-label={`Switch to ${
                value === "light" ? "dark" : "light"
              } mode`}
            >
              {value === "light" ? <FiMoon /> : <MdLightMode />}
            </Link>

            <div className="d-flex gap-3 align-items-center">
              <Link className="bg-info px-4 btn text-white" to="/contact">
                Contact
              </Link>

              {user ? (
                <Link
                  className="bg-danger px-4 btn text-white"
                  onClick={handleLogout}
                  to="#"
                >
                  Sign Out
                </Link>
              ) : (
                <>
                  <Link className="bg-success px-4 btn text-white" to="/Login">
                    Login
                  </Link>
                  <Link
                    className="bg-primary px-4 my-lg-0 btn text-white"
                    to="/Signup"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

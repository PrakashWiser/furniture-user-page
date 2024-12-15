import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Navbar from "./pages/nav/Navbar";
import ProductsPage from "./pages/home/components/ProductsPage";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./pages/footer/Footer";

function App() {
  const [theme, setTheme] = useState("Light");
  const styles = useMemo(() => {
    return {
      backgroundColor: theme === "Light" ? "#fff" : "#333",
      color: theme === "Light" ? "#333" : "#fff",
    };
  }, [theme]);
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductsPage/:id" element={<ProductsPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;

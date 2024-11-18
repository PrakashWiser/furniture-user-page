import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import Navbar from "./pages/nav/Navbar";
import ProductsPage from "./pages/home/components/ProductsPage";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductsPage/:id" element={<ProductsPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

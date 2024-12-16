import React, { useState, useEffect, createContext } from "react";
import "./style.css";
import HomeSectionone from "./components/HomeSectionone";
import HomeSectiontwo from "./components/HomeSectiontwo";
import HomeSectionthree from "./components/HomeSectionthree";
import HomeSectionfour from "./components/HomeSectionfour";
import HomeSectionFive from "./components/HomeSectionfive";
import HomeSectionsix from "./components/HomeSectionsix";
import HomeSectionseven from "./components/HomeSectionseven";
import HomeSectioneight from "./components/HomeSectioneight";
import Model from "./components/Model";
import axios from "axios";
export const ThemeContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);
  const [showmodel, setShowmodel] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowmodel(false);
      return () => clearTimeout(timer);
    }, [3000]);
  }, []);
  useEffect(() => {
    axios
      .get("https://67346355a042ab85d119f3fa.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        products,
      }}
    >
      <Model showmodel={showmodel} setShowmodel={setShowmodel} />;
      <HomeSectionone />
      <HomeSectiontwo />
      <HomeSectionthree />
      <HomeSectionfour />
      <HomeSectionFive />
      <HomeSectionsix />
      <HomeSectionseven />
      <HomeSectioneight />
    </ThemeContext.Provider>
  );
}

export default Home;

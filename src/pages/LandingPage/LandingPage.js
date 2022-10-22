import React from "react";
import Carousol from "../../components/Carousol/Carousol";
import Footer from "../../components/Footer/Footer";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage_container">
      <Carousol></Carousol>
      <div className="lg:px-20 sm:px-5 my-10">
        <p className="mt-5 mb-16 text-3xl font-semibold text-center">
          Recently Added Books
        </p>
        <ProductContainer></ProductContainer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;

import React from "react";
import Carousol from "../../components/Carousol/Carousol";
import Footer from "../../components/Footer/Footer";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPage_container mt-4">
      <div className="lg:px-20 sm:px-5 my-10">
        <p className="mt-5 mb-16 text-3xl font-semibold text-center">
          সাম্প্রতিক যোগ করা বই
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;

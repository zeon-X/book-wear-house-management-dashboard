import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductContainer.css";

const ProductContainer = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
};

export default ProductContainer;

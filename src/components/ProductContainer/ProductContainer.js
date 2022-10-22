import axios from "axios";
import React, { useEffect, useState } from "react";
import { handleHeaderConfig } from "../../Utilities/HeaderConfig/handleHeaderConfig";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductContainer.css";

const ProductContainer = () => {
  //LOAD BOOKS
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/book/get?limit=6`, handleHeaderConfig)
      .then((res) => {
        setBookList(res.data);
      });
  }, []);
  console.log(bookList);
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
      {bookList.map((x) => {
        return <ProductCard id={x._id} props={x}></ProductCard>;
      })}
    </div>
  );
};

export default ProductContainer;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductContainer.css";

const ProductContainer = () => {
  //LOAD BOOKS
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.get(`book/get?limit=6`).then((res) => {
      setBookList(res.data);
    });
  }, []);
  // console.log(bookList);
  const handleManageStockBtn = (_id) => {
    navigate(`/inventory/book-details?_id=${_id}`);
  };
  return (
    <div className="px-10 pb-10 grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
      {bookList.map((x) => {
        return (
          <ProductCard
            id={x._id}
            props={x}
            manageStockFunc={handleManageStockBtn}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default ProductContainer;

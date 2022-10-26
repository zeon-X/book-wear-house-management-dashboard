import React from "react";
import "./ProductCard.css";
import bookcover from "../../assets/book/Arabi-Nabi-1-353x548.jpg";

const ProductCard = ({ props, manageStockFunc }) => {
  const {
    _id,
    title,
    publisher,
    description,
    base_price,
    stoke_quantity,
    book_cover,
  } = props;
  return (
    <div class="bg-base-100 border border-gray-100 p-4 shadow flex justify-center items-center rounded">
      {/* img  */}
      <div className="flex justify-center items-center p-2 mr-6 bg-gray-100 rounded">
        <img
          className=""
          src={book_cover}
          alt="book"
          style={{ width: "140px" }}
        />
      </div>
      <div class="">
        <p class="font-normal mb-0">BookTitle: {title}</p>
        <p>Publisher: {publisher}</p>
        <p>Description: {description.split(0, 20)}</p>
        <p>Price: BDT {base_price}</p>
        <p>Stock: {stoke_quantity}</p>
        <div class="justify-start mt-1">
          <button
            onClick={() => manageStockFunc(_id)}
            class="hover:scale-105 transition-transform text-white bg-lime-500 hover:bg-white rounded px-6 py-1 font-bold hover:text-lime-500 border hover:border-lime-500"
          >
            Manage Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

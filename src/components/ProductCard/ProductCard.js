import React from "react";
import "./ProductCard.css";

import bookcover from "../../assets/book/Arabi-Nabi-1-353x548.jpg";

const ProductCard = () => {
  return (
    <div class="bg-base-100 p-4 shadow-lg flex justify-center items-center rounded-lg">
      {/* img  */}
      <div className="flex justify-center items-center p-2 mr-2">
        <img
          className=""
          src={bookcover}
          alt="book"
          style={{ width: "140px" }}
        />
      </div>
      <div class="">
        <p class="text-lg font-semibold mb-0">আরবি নবি</p>
        <p>প্রকাশকঃ কালান্তর প্রকাশনী</p>
        <p>অনুবাদকঃ এম এ ইউসুফ আলী, মাহদি হাসান, শাহেদ হাসান</p>
        <p>Stock: 100 Copies</p>
        <div class="justify-start mt-4">
          <button class="badge badge-outline mr-2">Update</button>
          <button class="badge badge-outline">Deliver</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

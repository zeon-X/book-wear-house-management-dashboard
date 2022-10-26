import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const BookDetails = () => {
  const [user, loading, error] = useAuthState(auth);
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [restock, setRestock] = useState(0);
  const [msg, setMsg] = useState("");
  const location = useLocation().search.split("=")[1];

  useEffect(() => {
    // console.log(props);
    if (location == undefined) {
    } else {
      setId(location);
      fetchProductData(location);
    }
  }, []);

  const handleId = (event) => {
    setMsg("");
    setId(event.target.value);
  };
  const handleRestock = (event) => {
    setRestock(event.target.value);
  };

  const handleFindBTN = () => {
    if (id !== "") fetchProductData(id);
    else {
      setMsg("Provide an valid ID");
      setData([]);
    }
  };

  const handleDeliveredBtn = (_id, q) => {
    if (q < 0) Swal.fire("Invalid!", `Book Stock Out`, "error");
    else
      Swal.fire({
        title: "Are you sure?",
        text: "This will change the book Quantitys",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#099500",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosInstance
            .put(`book/update_quantity?_id=${_id}&stoke_quantity=${q}`)
            .then((res) => {
              if (res.status === 200) {
                setData(res.data);
                Swal.fire("Saved!", `Succefully Quantity Updated`, "success");
              }
            });
        }
      });
  };

  const fetchProductData = (_id) => {
    axiosInstance.get(`book/find?_id=${_id}`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div
      style={{ backgroundColor: "#FAFBFE" }}
      className="w-full lg:h-full sm:h-screen  p-8"
    >
      <div className="">
        <p className="text-xl ml-2">Book-Details</p>
        <p className="text-sm ml-2 text-gray-400">Get a book details</p>
      </div>

      <div className="bg-white rounded-lg p-4 mt-4 border border-slate-300 mb-14">
        {/* BOOK BASIC INFO  */}
        {msg !== "" && <p className="text-sm text-red-500">{msg}</p>}
        {data.length != 0 && user.email !== data?.updatedBy && (
          <p className="text-red-500">
            You are not authorized to update this product
          </p>
        )}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Book Id</span>
            </label>
            <input
              onChange={handleId}
              value={id}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <button
            onClick={handleFindBTN}
            class="btn btn-primary lg:w-1/4 sm:w-4/4 lg:mt-9 sm:mt-0"
          >
            Find
          </button>
        </div>

        {data.length !== 0 && (
          <div>
            <div className="flex lg:flex-row sm:flex-col my-10 ">
              <div
                style={{ height: "270px" }}
                className="lg:w-1/4 sm:-full flex sm:mb-10 lg:mb-0  justify-center bg-gray-100 rounded"
              >
                <img
                  className=""
                  style={{ height: "270px" }}
                  src={data?.book_cover}
                  alt=""
                />
              </div>
              <div className="lg:pl-20 sm:pl-0 lg:w-3/4 sm:w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
                <p>Title: {data?.title}</p>
                <p>Publisher: {data?.publisher}</p>
                <p>Author: {data?.author}</p>
                <p>Translated By: {data?.translated_by}</p>
                <p>Category: {data?.category}</p>
                <p>Base Price: {data?.base_price}TK</p>
                <p>Selling Price: {data?.sell_price}TK</p>
                <p>Offer Percentage: {data?.offer_percentage}%</p>
                <p
                  className={
                    data.stoke_quantity <= 3
                      ? "font-semibold text-red-500"
                      : "font-semibold text-black"
                  }
                >
                  Stoke Quantity: {data?.stoke_quantity}
                </p>
                <p>Updated By: {data?.updatedBy}</p>
                <p>Status: {data?.status}</p>
                <p className="">_id: {data?._id}</p>
                <p>Description: {data?.description}</p>
              </div>
            </div>
            {user.email !== data?.updatedBy && (
              <div className="flex mt-6">
                <button
                  disabled
                  onClick={() =>
                    handleDeliveredBtn(data?._id, data?.stoke_quantity - 1)
                  }
                  class="btn btn-primary"
                >
                  Delivered
                </button>
                <button
                  onClick={() => {
                    setId("");
                    setData([]);
                  }}
                  class="btn btn-error ml-2"
                >
                  Reset
                </button>
              </div>
            )}
            {user.email === data?.updatedBy && (
              <div className="flex mt-6">
                <button
                  onClick={() =>
                    handleDeliveredBtn(data?._id, data?.stoke_quantity - 1)
                  }
                  class="btn btn-primary"
                >
                  Delivered
                </button>
                <button
                  onClick={() => {
                    setId("");
                    setData([]);
                  }}
                  class="btn btn-error ml-2"
                >
                  Reset
                </button>
              </div>
            )}
            <p className="mt-8 mb-2 text-lg">Restock Items</p>
            {user.email !== data?.updatedBy && (
              <div>
                <p className="text-red-500">
                  You are not authorized to update this product
                </p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mb-6">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Restock Amount</span>
                    </label>
                    <input
                      disabled
                      onChange={handleRestock}
                      value={restock}
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <button
                    disabled
                    onClick={() => handleDeliveredBtn(data?._id, restock)}
                    className="btn btn-primary lg:w-1/4 sm:w-4/4 lg:mt-9 sm:mt-0"
                  >
                    Restock
                  </button>
                </div>
              </div>
            )}
            {user.email === data?.updatedBy && (
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mb-6">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Restock Amount</span>
                  </label>
                  <input
                    onChange={handleRestock}
                    value={restock}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                  />
                </div>
                <button
                  onClick={() => handleDeliveredBtn(data?._id, restock)}
                  className="btn btn-primary lg:w-1/4 sm:w-4/4 lg:mt-9 sm:mt-0"
                >
                  Restock
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;

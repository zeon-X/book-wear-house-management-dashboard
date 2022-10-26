import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./AddBook.css";
import { API_KEY } from "../../Utilities/EnvironmentVariables/env";
import usePublisher from "../../CustomHooks/usePublisher";
import useCategory from "../../CustomHooks/useCategory";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";

const AddBook = () => {
  const [publisherList, setPublisherList] = usePublisher();
  const [categoryList, setCategoryList] = useCategory();

  // console.log(publisherList);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [translator, setTranslator] = useState("");
  const [category, setCategory] = useState("Choose a category");
  const [publisher, setPublisher] = useState("Choose a publisher");
  const [status, setStatus] = useState("Choose status");
  const [basePrice, setBasePrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [offerPercentage, setOfferPercentage] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [bookCoverThum, setBookCoverThum] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleTranslator = (event) => {
    setTranslator(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handlePublisher = (event) => {
    setPublisher(event.target.value);
  };
  const handleBasePrice = (event) => {
    setBasePrice(event.target.value);
  };
  const handleSellPrice = (event) => {
    setSellPrice(event.target.value);
  };
  const handleOfferPercentage = (event) => {
    setOfferPercentage(event.target.value);
  };
  const handleStock = (event) => {
    setStock(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  // RESET THE FORMS
  const handleResetForm = () => {
    setTitle("");
    setAuthor("");
    setTranslator("");
    setCategory("Choose a category");
    setPublisher("Choose a publisher");
    setBasePrice(0);
    setSellPrice(0);
    setOfferPercentage(0);
    setStock(0);
    setDescription("");
    setStatus("Choose status");
    setBookCover("");
  };
  // SUBmit btn func
  const handleSubmitBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be saving this Book!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#099500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        axiosInstance
          .post("book/create", {
            title: title,
            publisher: publisher,
            author: author,
            translated_by: translator,
            category: category,
            description: description,
            base_price: basePrice,
            sell_price: sellPrice,
            offer_percentage: offerPercentage,
            stoke_quantity: stock,
            book_cover: bookCover,
            book_cover_thumb: bookCoverThum,
            updatedBy: localStorage.getItem("user"),
            status: status,
          })
          .then((res) => {
            if (res.status === 201) {
              Swal.fire(
                "Saved!",
                `You have successfully added the ${title} Book.`,
                "success"
              ).then(() => {
                handleResetForm();
              });
            }
          });
      }
    });
  };

  // Handle form cancle
  const handleCancle = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#099500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancle it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleResetForm();
        Swal.fire("Cancled!", "You have discard the form.", "success");
      }
    });
  };

  const handleRemoveImage = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove the book cover!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#099500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        setBookCover("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You've removed the book cover",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  };

  //Handle IMG CHANGE
  const [load, setLoad] = useState(false);
  const handleImageChange = async (event) => {
    let imagedata = new FormData();
    imagedata.append("image", event.target.files[0]);
    // console.log(event.target.files[0]);
    setLoad(true);
    await axios
      .post(
        `https://api.imgbb.com/1/upload?expiration=600&key=${API_KEY}`,
        imagedata
      )
      .then((res) => {
        if (res.data.status === 200) {
          setBookCover(res?.data?.data?.display_url);
          setBookCoverThum(res?.data?.data?.thumb?.url);

          console.log(res?.data?.data?.display_url);
          console.log(res?.data?.data?.thumb?.url);
          // console.log(res?.data);
        }
      })
      .catch((error) => {
        console.log("error occured\n");
        console.log(error);
      });
    setLoad(false);
  };

  return (
    <div
      style={{ backgroundColor: "#FAFBFE" }}
      className="lg:w-full lg:h-full sm:w-auto sm:h-screen  p-8"
    >
      <div className="">
        <p className="text-xl ml-2">Add-Book</p>
        <p className="text-sm ml-2 text-gray-400">Create new book</p>
      </div>

      <div className="bg-white rounded-lg p-4 mt-4 border border-slate-300 mb-14">
        {/* BOOK BASIC INFO  */}
        <p className="text-xl ml-1 text-gray-500">Basic Information</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-5">
          {/* TITLE */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Book Title</span>
            </label>
            <input
              onChange={handleTitle}
              value={title}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          {/* AUTHOR */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Book Author</span>
            </label>
            <input
              onChange={handleAuthor}
              value={author}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          {/* TRANSLATOR */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Translator</span>
            </label>
            <input
              onChange={handleTranslator}
              value={translator}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          {/* CATEGORY */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Book Category</span>
            </label>
            <select
              onChange={handleCategory}
              value={category}
              className="select select-bordered"
            >
              <option disabled selected>
                Choose a category
              </option>
              {categoryList.map((x) => {
                return (
                  <option key={x._id} value={x?.categoryTitle}>
                    {x?.categoryTitle}
                  </option>
                );
              })}
            </select>
          </div>
          {/* PUBLISHER */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Publisher</span>
            </label>
            <select
              onChange={handlePublisher}
              value={publisher}
              className="select select-bordered"
            >
              <option disabled selected>
                Choose a publisher
              </option>
              {publisherList.map((x) => {
                return (
                  <option key={x._id} value={x?.name}>
                    {x?.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* STATUS */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <select
              onChange={handleStatus}
              value={status}
              className="select select-bordered"
            >
              <option disabled selected>
                Choose status
              </option>
              <option>Active</option>
              <option>Deactive</option>
            </select>
          </div>
        </div>

        {/* PRICE  */}
        <p className="text-xl ml-1 text-gray-500 mt-10">Price Information</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Base price</span>
            </label>
            <input
              onChange={handleBasePrice}
              value={basePrice}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Sell price</span>
            </label>
            <input
              onChange={handleSellPrice}
              value={sellPrice}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Offer Percentage</span>
            </label>
            <input
              onChange={handleOfferPercentage}
              value={offerPercentage}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        {/* STOCK  */}
        <p className="text-xl ml-1 text-gray-500 mt-10">Stock Information</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock quantity</span>
            </label>
            <input
              onChange={handleStock}
              value={stock}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        {/* BOOK DISCRIPTION  */}
        <p className="text-xl ml-1 text-gray-500 mt-10">Other Information</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Description</span>
          </label>
          <textarea
            onChange={handleDescription}
            value={description}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        {/* IMG UPLOAD */}
        <div className="mt-10 grid grid-cols-1">
          {/* Image Preview */}
          <div className="border border-gray-200 rounded p-5 shadow-lg flex flex-col justify-center items-center">
            <input
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              className="font-medium shadow-lg w-full text-center py-1 px-3 bg-primary rounded text-white"
            ></input>

            {bookCover && (
              <div className="indicator my-5">
                <span onClick={handleRemoveImage} className="indicator-item  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="red"
                    className="w-6 h-6 bg-white rounded-full shadow-xl hover:cursor-pointer hover:scale-125"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <img
                  className=""
                  style={{ width: "250px" }}
                  // style={{ objectFit: "contain" }}
                  src={bookCover}
                  alt="bookImage"
                />
              </div>
            )}
            {!bookCover && !load && (
              <div
                className="my-5 flex justify-center items-center"
                style={{ height: "200px" }}
              >
                <img
                  className=""
                  style={{ width: "100px" }}
                  // style={{ objectFit: "contain" }}
                  src="https://cdn-icons-png.flaticon.com/512/1998/1998342.png"
                  alt="bookImage"
                />
              </div>
            )}
            {load && !bookCover && (
              <div
                className="my-5 flex justify-center items-center"
                style={{ height: "200px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 loop"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="flex mt-6">
          <button onClick={handleSubmitBtn} class="btn btn-primary">
            Submit
          </button>
          <button onClick={handleCancle} class="btn btn-error ml-2">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_KEY } from "../../Utilities/EnvironmentVariables/env";
import { handleHeaderConfig } from "../../Utilities/HeaderConfig/handleHeaderConfig";
import { useNavigate } from "react-router-dom";

const UpdatePublisher = ({ props, toggleFunc, toggleState }) => {
  const { name, mobile, website, email, address, logo, updatedBy, _id } = props;

  const [publisherName, setpublisherName] = useState(name);
  const [publisherMobile, setpublisherMobile] = useState(mobile);
  const [publisherEmail, setpublisherEmail] = useState(email);
  const [publisherWebsite, setpublisherWebsite] = useState(website);
  const [publisherAddress, setPublisherAddress] = useState(address);
  const [publisherLogo, setPublisherLogo] = useState(logo);

  // FORM FILL Up FUNCTIONS
  const handleChangeName = (event) => {
    setpublisherName(event.target.value);
  };
  const handleChangeMobile = (event) => {
    setpublisherMobile(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setPublisherAddress(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setpublisherEmail(event.target.value);
  };
  const handleChangeWebsite = (event) => {
    setpublisherWebsite(event.target.value);
  };

  const navigate = useNavigate();

  //SUBMIT HANDLEING FUNCTIONS
  const handleUpdatePublisher = () => {
    // console.log(handleHeaderConfig);
    // console.log(localStorage.getItem("authorization"));
    Swal.fire({
      title: "Are you sure?",
      text: "You will be saving this publisher!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#099500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        axios
          .put(
            `http://localhost:5000/api/pub/update?_id=${_id}`,
            {
              name: publisherName,
              mobile: publisherMobile,
              website: publisherWebsite,
              email: publisherEmail,
              logo: publisherLogo,
              address: publisherAddress,
              updatedBy: localStorage.getItem("user"),
            },
            handleHeaderConfig
          )
          .then((res) => {
            if (res.status === 200) {
              Swal.fire(
                "Updated!",
                `You have successfully updated the ${publisherName} publisher.`,
                "success"
              ).then(() => {
                toggleFunc(!toggleState);
              });
            }
          });
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
        setPublisherLogo("");
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

  //HANDLE IMG CHANGE
  const [load, setLoad] = useState(false);
  const handleImageChange = (event) => {
    let imagedata = new FormData();
    imagedata.append("image", event.target.files[0]);
    // console.log(event.target.files[0]);
    setLoad(true);
    axios
      .post(
        `https://api.imgbb.com/1/upload?expiration=600&key=${API_KEY}`,
        imagedata
      )
      .then((res) => {
        let imgLink = res.data.data.display_url;
        setPublisherLogo(imgLink);
        setLoad(false);
      })
      .catch((error) => {
        console.log("error occured\n");
        console.log(error);
      });
  };
  return (
    <div
      style={{ backgroundColor: "#FAFBFE" }}
      className="lg:w-full lg:h-full sm:w-auto sm:h-auto  p-8"
    >
      <div className="">
        <p className="text-xl ml-2">Add-Publisher</p>
        <p className="text-sm ml-2 text-gray-400">Create new publisher</p>
      </div>
      <div className="bg-white rounded-lg p-4 mt-4 border border-slate-300 mb-14">
        {/* pub id + udpdator name */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-x-5 mb-10">
          {/* Book ID */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Publisher ID</span>
            </label>
            <input
              value={_id}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              disabled
            />
          </div>
          {/* Updated By */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Last updated by</span>
            </label>
            <input
              value={updatedBy}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              disabled
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          {/* NAME */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Publisher Name</span>
            </label>
            <input
              onChange={handleChangeName}
              value={publisherName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          {/* Mobile */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Publisher Mobile</span>
            </label>
            <input
              onChange={handleChangeMobile}
              value={publisherMobile}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          {/* EMAIL */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Publisher Email</span>
            </label>
            <input
              onChange={handleChangeEmail}
              value={publisherEmail}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          {/* WEBSITE  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Publisher website</span>
            </label>
            <input
              onChange={handleChangeWebsite}
              value={publisherWebsite}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* Address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Publisher Address</span>
          </label>
          <textarea
            onChange={handleChangeAddress}
            value={publisherAddress}
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

            {publisherLogo && (
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
                  src={publisherLogo}
                  alt="bookImage"
                />
              </div>
            )}
            {!publisherLogo && !load && (
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
            {load && (
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
          <button onClick={handleUpdatePublisher} class="btn btn-primary">
            Submit
          </button>
          <div className="modal-action">
            <label
              onClick={() => toggleFunc(!toggleState)}
              htmlFor="my-modal-5"
              className="btn  btn-error -mt-6 ml-2"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePublisher;

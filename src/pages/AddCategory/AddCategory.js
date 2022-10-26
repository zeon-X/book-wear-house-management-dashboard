import React, { useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [description, setDescription] = useState("");

  // RESET THE FORMS
  const handleResetForm = () => {
    setCategoryCode("");
    setCategoryName("");
    setDescription("");
  };

  // FORM FILL Up FUNCTIONS
  const handleChangeName = (event) => {
    setCategoryName(event.target.value);
  };
  const handleChangeCode = (event) => {
    setCategoryCode(event.target.value);
  };
  const handleChangeDiscription = (event) => {
    setDescription(event.target.value);
  };

  //SUBMIT HANDLEING FUNCTIONS
  const handleCreateCategory = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be saving this category!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#099500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        axiosInstance
          .post("category/create", {
            categoryTitle: categoryName,
            categoryCode: categoryCode,
            description: description,
            updatedBy: localStorage.getItem("user"),
          })
          .then((res) => {
            if (res.status === 201) {
              Swal.fire(
                "Saved!",
                `You have successfully added the ${categoryName} category.`,
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

  return (
    <div
      style={{ backgroundColor: "#FAFBFE" }}
      className="w-full lg:h-full  sm:h-auto p-8"
    >
      <div className="">
        <p className="text-xl ml-2 font-medium">Add-Category</p>
        <p className="text-sm ml-2 text-gray-400">
          Create new product Category
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 mt-4 border border-slate-300 mb-14">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              onChange={handleChangeName}
              value={categoryName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category Code</span>
            </label>
            <input
              onChange={handleChangeCode}
              value={categoryCode}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Discription</span>
          </label>
          <textarea
            onChange={handleChangeDiscription}
            value={description}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className="flex mt-6">
          <button onClick={handleCreateCategory} class="btn btn-primary">
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

export default AddCategory;

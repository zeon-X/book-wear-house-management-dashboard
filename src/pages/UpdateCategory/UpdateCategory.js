import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { handleHeaderConfig } from "../../Utilities/HeaderConfig/handleHeaderConfig";

const UpdateCategory = ({ props, toggleFunc, toggleState }) => {
  const {
    categoryTitle,
    subCategory,
    categoryCode,
    description,
    updatedBy,
    _id,
  } = props;
  const [updateCategoryName, setCategoryName] = useState(categoryTitle);
  const [updateCategoryCode, setCategoryCode] = useState(categoryCode);
  const [updateDescription, setDescription] = useState(description);

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
        axios
          .put(
            `http://localhost:5000/api/category/update?_id=${_id}`,
            {
              categoryTitle: updateCategoryName,
              categoryCode: updateCategoryCode,
              description: updateDescription,
              updatedBy: localStorage.getItem("user"),
            },
            handleHeaderConfig
          )
          .then((res) => {
            if (res.status === 200) {
              Swal.fire(
                "updated!",
                `You have successfully updated the ${updateCategoryName} category.`,
                "success"
              ).then(() => {
                toggleFunc(!toggleState);
              });
            }
          });
      }
    });
  };

  return (
    <div
      style={{ backgroundColor: "#FAFBFE" }}
      className="lg:w-full lg:h-full sm:w-auto sm:h-auto p-8"
    >
      <div className="">
        <p className="text-xl ml-2 font-medium">Add-Category</p>
        <p className="text-sm ml-2 text-gray-400">
          Create new product Category
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 mt-4 border border-slate-300 mb-14">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
          {/* cat ID */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category ID</span>
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              onChange={handleChangeName}
              value={updateCategoryName}
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
              value={updateCategoryCode}
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
            value={updateDescription}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className="flex mt-6">
          <button onClick={handleCreateCategory} class="btn btn-primary">
            Submit
          </button>
          <button class="btn btn-error ml-2">Cancle</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;

import React, { useEffect, useState } from "react";
import CategoryTableRow from "../../components/CategoryTableRow/CategoryTableRow";
import axios from "axios";
import Swal from "sweetalert2";
import { handleHeaderConfig } from "../../Utilities/HeaderConfig/handleHeaderConfig";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/get", handleHeaderConfig)
      .then((res) => {
        setCategoryList(res.data);
      });
  }, [reload]);
  // console.log(categoryList);

  // delete category
  const deleteCategory = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `http://localhost:5000/api/category/delete?_id=${_id}`,
            handleHeaderConfig
          )
          .then((res) => {
            if (res.status === 200) {
              // Swal.fire("Deleted!", "You have Deleted the book.", "success")
              Swal.fire({
                position: "center",
                icon: "success",
                title: `You have Deleted the Category.`,
                showConfirmButton: true,
              }).then(() => {
                setReload(reload + 1);
              });
            }
          });
      }
    });
  };
  return (
    <div style={{ backgroundColor: "#FAFBFE" }} className="w-full h-full p-8">
      <div className="flex">
        <p className="text-xl ml-2">Category-List</p>
      </div>
      <div className="overflow-x-auto w-full mt-5 mb-10">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Basic Info</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((x) => {
              return (
                <CategoryTableRow
                  key={x._id}
                  dltFunc={deleteCategory}
                  props={x}
                ></CategoryTableRow>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Basic Info</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="btn-group mb-15">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>
    </div>
  );
};

export default CategoryList;

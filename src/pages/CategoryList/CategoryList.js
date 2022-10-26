import React, { useEffect, useState } from "react";
import CategoryTableRow from "../../components/CategoryTableRow/CategoryTableRow";
import Swal from "sweetalert2";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    axiosInstance.get("category/get").then((res) => {
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
        axiosInstance.delete(`category/delete?_id=${_id}`).then((res) => {
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
    <div
      style={{ backgroundColor: "#FAFBFE" }}
      className="w-full h-full p-8 mb-20"
    >
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
    </div>
  );
};

export default CategoryList;

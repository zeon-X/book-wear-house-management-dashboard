import React, { useEffect, useState } from "react";
import BookListTableRow from "../../components/BookListTableRow/BookListTableRow";
import Swal from "sweetalert2";
import usePublisher from "../../CustomHooks/usePublisher";
import useCategory from "../../CustomHooks/useCategory";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";

const BookList = () => {
  const [user, loading, error] = useAuthState(auth);

  const [publisherList, setPublisherList] = usePublisher();
  const [categoryList, setCategoryList] = useCategory();

  const [category, setCategory] = useState("");
  const [publisher, setPublisher] = useState("");
  const [status, setStatus] = useState("");
  const [reload, setReload] = useState(0);

  const navigate = useNavigate();

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handlePublisher = (event) => {
    setPublisher(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  //LOAD BOOKS
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(
        `book/getmine?_id=${user?.email}&category=${category}&pub=${publisher}`
      )
      .then((res) => {
        setBookList(res.data);
      });
  }, [category, publisher, status, reload]);

  const detailsBook = (_id) => {
    navigate(`/inventory/book-details?_id=${_id}`);
  };

  // DELETE FUNCTION
  const deleteBook = (_id) => {
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
        axiosInstance.delete(`book/delete?_id=${_id}`).then((res) => {
          if (res.status === 200) {
            // Swal.fire("Deleted!", "You have Deleted the book.", "success")
            Swal.fire({
              position: "center",
              icon: "success",
              title: `You have Deleted the book.`,
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
        <p className="text-xl ml-2">Book-List</p>
      </div>

      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 justify-center items-center lg:gap-x-5 sm:gap-x-2">
        <div></div>
        <div></div>
        {/* CATEGORY */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Book Category</span>
          </label>
          <select
            onChange={handleCategory}
            // value={category}
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
            <option value="">None</option>
          </select>
        </div>
        {/* PUBLISHER */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Publisher</span>
          </label>
          <select
            onChange={handlePublisher}
            // value={publisher}
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
            <option value="">None</option>
          </select>
        </div>
        {/* STATUS */}
        {/* <div className="form-control w-full max-w-xs">
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
            <option value="Active">Active</option>
            <option value="Dective">Deactive</option>
          </select>
        </div> */}
      </div>

      <div className="overflow-x-auto w-full mt-5 mb-10">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Basic Info</th>
              <th>Description</th>
              <th>Information</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((x) => {
              return (
                <BookListTableRow
                  key={x._id}
                  props={x}
                  dltFunc={deleteBook}
                  detailsFunc={detailsBook}
                ></BookListTableRow>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Basic Info</th>
              <th>Description</th>
              <th>Information</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* <div className="btn-group mb-15">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div> */}
    </div>
  );
};

export default BookList;

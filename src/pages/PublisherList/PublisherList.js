import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import PublisherTableRow from "../../components/PublisherTableRow/PublisherTableRow";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";

const PublisherList = () => {
  const [publisherList, setPublisherList] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    axiosInstance.get("pub/get").then((res) => {
      setPublisherList(res.data);
    });
  }, [reload]);

  // delete publisher
  const deletePublisher = (_id) => {
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
        axiosInstance.delete(`pub/delete?_id=${_id}`).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `You have Deleted the Publisher.`,
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
        <p className="text-xl ml-2">Publisher-List</p>
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
            {publisherList.map((x) => {
              return (
                <PublisherTableRow
                  key={x._id}
                  dltFunc={deletePublisher}
                  props={x}
                ></PublisherTableRow>
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

      <div className="btn-group mb-15">
        <button className="btn">1</button>
        <button className="btn btn-active">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>
    </div>
  );
};

export default PublisherList;

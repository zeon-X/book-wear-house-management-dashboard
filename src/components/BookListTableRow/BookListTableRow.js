import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import UpdateBook from "../../pages/UpdateBook/UpdateBook";

const BookListTableRow = ({ props, dltFunc }) => {
  const {
    _id,
    title,
    publisher,
    author,
    sell_price,
    stoke_quantity,
    book_cover_thumb,
    updatedBy,
    status,
    category,
  } = props;

  const [toggle, setToggle] = useState(false);

  return (
    <tr className="w-full">
      <td></td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={book_cover_thumb} alt="Book Thumb" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title.slice(0, 25)}</div>
            <div className="text-sm">Author: {author.slice(0, 25)}</div>
          </div>
        </div>
      </td>
      <td>
        Price : BDT {sell_price} || Stock : {stoke_quantity}
        <br />
        <span className="badge badge-ghost badge-sm">{updatedBy}</span>
      </td>
      <td>
        {publisher.slice(0, 25)}
        <br />
        <span className="badge badge-ghost badge-sm">{category}</span>
      </td>

      <td className="sm:p-0">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          {/* Delivered */}
          <button
            className="btn btn-primary btn-circle scale-75 hover:scale-100"
            type=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>

          {/* UPDATE */}
          <label
            onClick={() => setToggle(!toggle)}
            htmlFor="my-modal-5"
            className="btn modal-button btn-secondary btn-circle scale-75 hover:scale-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </label>
          {toggle && (
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          )}
          {toggle && (
            <div className="modal">
              <div className="modal-box lg:w-8/12 sm:w-11/12 max-w-5xl lg:ml-60 sm:ml-0">
                <div className="modal-action">
                  <label
                    onClick={() => setToggle(!toggle)}
                    htmlFor="my-modal-5"
                    className="btn btn-circle btn-error scale-75 hover:scale-100 -mt-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </label>
                </div>
                <UpdateBook
                  toggleFunc={setToggle}
                  toggleState={toggle}
                  props={props}
                ></UpdateBook>
              </div>
            </div>
          )}

          {/* DELETE  */}
          <button
            onClick={() => dltFunc(_id)}
            className="btn btn-error btn-circle scale-75 hover:scale-100"
            type=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          {/* Copy id  */}
          <CopyToClipboard
            text={_id}
            onCopy={() => {
              this.setState({ copied: true });
            }}
          >
            <button
              className="btn btn-info btn-circle scale-75 hover:scale-100"
              type=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </button>
          </CopyToClipboard>
        </div>
      </td>
      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
};

export default BookListTableRow;

import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardDrawer = () => {
  const navigate = useNavigate();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div className="divider text-sm text-gray-400 px-5">Dashboard</div>
          <div>
            <li>
              <NavLink to="home" className="text-lg">
                Dashboard Home
              </NavLink>
            </li>
          </div>
          <div className=" text-sm text-gray-400 divider px-5">Books</div>
          {/* <p className="text-sm text-gray-400 mt-4 mb-4">Books</p> */}
          <div>
            <li>
              <NavLink to="book-list">Book List</NavLink>
            </li>
            <li>
              <NavLink to="add-book">Add Book</NavLink>
            </li>
          </div>
          <div className="divider text-sm text-gray-400 px-5">Publisher</div>

          <div>
            <li>
              <NavLink to="publisher-list">Publisher List</NavLink>
            </li>
            <li>
              <NavLink to="add-publisher">Add Publisher</NavLink>
            </li>
          </div>
          <div className="divider text-sm text-gray-400 px-5">Category</div>
          <div>
            <li>
              <NavLink to="category-list">Category List</NavLink>
            </li>
            <li>
              <NavLink to="add-category">Add Category</NavLink>
            </li>
          </div>
          <div className="divider text-sm text-gray-400 px-5">Users</div>
          <div>
            <li>
              <NavLink to="user-list">User List</NavLink>
            </li>
            <li>
              <NavLink to="add-user">Add User</NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;

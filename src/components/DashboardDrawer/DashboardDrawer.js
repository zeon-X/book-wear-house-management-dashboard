import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import logo1 from "../../assets/logo.jpg";

const DashboardDrawer = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("authorization");
    localStorage.removeItem("status");
    localStorage.removeItem("user");
  };
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start">
        {/* <!-- Page content here --> */}
        <div className="w-full navbar bg-base-300 lg:hidden">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex">
            <p>Isbaah.com Seller Dashboard</p>
          </div>
        </div>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <div
            onClick={() => navigate("/")}
            className="flex mb-6 hover:cursor-pointer"
          >
            <img src={logo1} style={{ width: "150px" }} alt="" />
          </div>

          <div>
            <li className="mb-1">
              <NavLink to="home" className="">
                Dashboard Home
              </NavLink>
            </li>
          </div>
          <div>
            <li className="mb-1">
              <NavLink to="book-list">Book List</NavLink>
            </li>
            <li className="mb-1">
              <NavLink to="add-book">Add Book</NavLink>
            </li>
          </div>

          <div>
            <li className="mb-1">
              <NavLink to="publisher-list">Publisher List</NavLink>
            </li>
            <li className="mb-1">
              <NavLink to="add-publisher">Add Publisher</NavLink>
            </li>
          </div>
          <div>
            <li className="mb-1">
              <NavLink to="category-list">Category List</NavLink>
            </li>
            <li className="mb-1">
              <NavLink to="add-category">Add Category</NavLink>
            </li>
          </div>

          {user && (
            <div className="mt-6">
              <p className="font-bold text-sm text-gray-500 ml-4 mb-2">
                User Information
              </p>
              <div className="flex border border-gray-200 rounded px-4 py-4">
                <img src={user?.photoURL} alt="" />
                <div className="ml-4 text-sm ">
                  <p>{user?.displayName}</p>
                  <p>{user?.email.slice(0, 16) + "..."}</p>
                  <li onClick={logout} className="">
                    <div className="flex items-center">
                      <p className="mr-0 text-red-500 font-bold">Logout</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardDrawer;

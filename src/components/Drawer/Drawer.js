import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import Loading from "../Loading/Loading";
import logo from "../../assets/logo.jpg";
import Navbar from "../Navbar/Navbar";

const Drawer = ({ children }) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("authorization");
    localStorage.removeItem("status");
    localStorage.removeItem("user");
  };

  // console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <Navbar></Navbar>

          {/* <!-- Page content here --> */}
          {children}
        </div>

        {/* CATEGORY */}
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>

          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li className="">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn btn-ghost"
              >
                Home
              </button>
            </li>
            <li className="">
              <button
                onClick={() => {
                  navigate("/inventory/home");
                }}
                className="btn btn-ghost"
              >
                Manage Inventory
              </button>
            </li>
            {!user && (
              <li className="mt-1">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  type=""
                  className="flex justify-center w-full"
                >
                  <p className="mr-0">Login</p>
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </button>
              </li>
            )}
            {!user && (
              <li className="my-1">
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  type=""
                  className="flex justify-center w-full"
                >
                  <p className="mr-0">Register</p>
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
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </button>
              </li>
            )}

            {user && (
              <li className="my-1">
                <button onClick={logout} class="btn btn-ghost mx-0 flex">
                  <p className="mr-1">Logout</p>
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
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </li>
            )}
            {user && (
              <li>
                <div className="flex justify-center items-center">
                  <img
                    style={{ width: "34px" }}
                    className="rounded-full"
                    src={user?.photoURL}
                  />
                  <p className="text-sm font-bold">{user?.displayName}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

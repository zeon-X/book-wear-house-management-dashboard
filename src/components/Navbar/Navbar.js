import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  // console.log(user);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="navbar_container sticky">
      <div
        class="navbar py-5 lg:px-10 sm:px-3 shadow-lg"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="lg:flex-1 sm:flex">
          <button
            onClick={() => {
              navigate("/");
            }}
            type=""
          >
            <img className="" style={{ width: "100px" }} src={logo} alt="" />
          </button>
        </div>
        {/* SEARCH  */}
        <div className="lg:flex sm:hidden ">
          <div class="form-control ">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>

          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {/* BUUTTONS  */}
        <button
          onClick={() => {
            navigate("/inventory");
          }}
          class="btn btn-ghost mx-0"
        >
          ম্যানাজ ইনভেন্টরি
        </button>

        {!user && (
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost ">
              <div className="flex justify-center items-center">
                <p className="mr-1">লগইন</p>
                <p className="mr-1">\ রেজিস্ট্রার</p>
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  type=""
                  className="flex justify-center"
                >
                  <p className="mr-0">লগইন</p>
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
              <li className="">
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  type=""
                  className="flex justify-center"
                >
                  <p className="mr-0">রেজিস্ট্রার</p>
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
            </ul>
          </div>
        )}
        {user && (
          <button
            onClick={logout}
            class="btn btn-ghost mx-0  lg:flex sm:hidden"
          >
            <p className="mr-1">লগ আউট</p>
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
        )}
        {/* USER SECTION */}
        {user && (
          <div class="flex-none">
            <div class="dropdown dropdown-end">
              <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span class="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>

            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>

              {user && (
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden sm:block"
                >
                  <li>
                    <button onClick={logout} class="btn btn-ghost mx-0 flex">
                      <p className="mr-1">লগ আউট</p>
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
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

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
    <div
      className="w-full flex items-center bg-base-300 py-3 lg:px-10 sm:px-3"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      {/* TOGGLE BTN */}
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      {/* LOGO  */}
      <div class="lg:flex-1 sm:flex">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="" style={{ width: "100px" }} src={logo} alt="" />
        </button>
      </div>

      {/* NAVIGATIN  */}
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}

          {/* inventory BUUTTONS  */}
          <button
            onClick={() => {
              navigate("/inventory/home");
            }}
            class="btn mr-2"
          >
            Manage Inventory
          </button>

          {/* Logout  */}

          {!user && (
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost">
                <p className="ml-2 font-normal">Login/Regiser</p>
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
                    className="flex justify-center w-full"
                  >
                    <p className="mr-0 font-normal">Login</p>
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
                <li>
                  <button
                    onClick={() => {
                      navigate("/register");
                    }}
                    type=""
                    className="flex justify-center w-full"
                  >
                    <p className="mr-0 font-normal">Register</p>
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
              className="btn btn-ghost mx-0 lg:flex sm:hidden"
            >
              <p className="mr-1 font-normal">Logout</p>
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
            <div class="flex justify-center items-center">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>

                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  sm:block"
                >
                  <li>
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
                </ul>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

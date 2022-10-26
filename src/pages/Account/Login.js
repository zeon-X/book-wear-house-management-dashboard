import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import "./Account.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import { handleAccessToken } from "../../Utilities/LocalStorage/ManageLS";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";

const Login = () => {
  const location = useLocation()?.state?.from;
  let navLoc;
  if (location === undefined) navLoc = "/";
  else navLoc = location?.pathname + location?.search;
  // console.log(navLoc);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setMsg("");
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //LOGIN
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (email, pass) => {
    if (email == "") setMsg("Provide Email");
    else if (pass == "") setMsg("Provide Password");
    else signInWithEmailAndPassword(email, pass);
  };

  useEffect(() => {
    if (user) {
      axiosInstance
        .post("authFirebase/authentication", {
          email: user.user.email,
          userId: user.user.uid,
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Welcome ${user.user.displayName}!`,
              showConfirmButton: true,
              timer: 3000,
            });

            // console.log(res.data.user_data.status);
            handleAccessToken(
              res.data.authorization,
              res.data.user_data.status,
              res.data.user_data.email
            );
            navigate(`${navLoc}`);
          }
        });
    }
  }, [user]);

  //Reset passord
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  const handleResetPassword = async (email) => {
    if (email == "") setMsg("Provide a valid Email");
    else await sendPasswordResetEmail(email);
  };

  // console.log(error1?.message);

  if (loading || sending) return <Loading></Loading>;

  return (
    <div className="flex flex-col justify-center items-center lg:m-24 sm:m-5">
      <div className="w-full flex flex-col items-center">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        {(error || error1 || msg != "") && (
          <div className="mt-6">
            <p className="text-red-500">{msg}</p>
            <p className="text-red-500">{error?.message}</p>
            <p className="text-red-500">{error1?.message}</p>
          </div>
        )}
        <button
          onClick={() => {
            handleLogin(email, password);
          }}
          class="btn btn-wide mt-4 mb-4"
        >
          Login
        </button>
        <div className="text-red-500 text-sm grid grid-cols-2">
          <p
            onClick={() => handleResetPassword(email)}
            className=" hover:cursor-pointer hover:text-red-700 "
          >
            Reset Password!
          </p>
          <p
            onClick={() => navigate("/register")}
            className="hover:cursor-pointer hover:text-red-700 text-right"
          >
            Don't Have an Account?
          </p>
        </div>
      </div>

      <div class="divider m-5">OR Try</div>
      <SocialLogin props={navLoc}></SocialLogin>
    </div>
  );
};

export default Login;

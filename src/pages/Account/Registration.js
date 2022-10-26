import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";
import { auth } from "../../firebase.init";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";
import { handleAccessToken } from "../../Utilities/LocalStorage/ManageLS";
import "./Account.css";
import SocialLogin from "./SocialLogin";

const Registration = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
    setMessage("");
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setMessage("");
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    setMessage("");
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setMessage("");
  };

  const handleResetForm = () => {
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  };

  // register + update profile
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const handleRegister = async (email, pass, cPass, displayName, photoURL) => {
    if (email === "") {
      setMessage("Email can not be void");
    }
    if (pass === "") {
      setMessage("Password can not be void");
    }
    if (cPass === "") {
      setMessage("Confirm Password can not be void");
    }
    if (displayName === "") {
      setMessage("Name can not be void");
    }

    if (pass !== cPass) {
      setMessage("Password Not Matched");
    } else if (email != "" && pass != "" && displayName != "") {
      createUserWithEmailAndPassword(email, pass);
      await updateProfile({ displayName, photoURL });
    }
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
              title: `Registration Complete!`,
              showConfirmButton: true,
              timer: 3000,
            });

            // console.log(res.data.user_data.status);
            handleAccessToken(
              res.data.authorization,
              res.data.user_data.status,
              res.data.user_data.email
            );
            navigate("/");
            handleResetForm();
          }
        });
    }
  }, [user]);

  if (loading || updating) return <Loading></Loading>;
  return (
    <div className="flex flex-col justify-center items-center lg:m-24 sm:m-5">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={handleName}
          class="input input-bordered w-full max-w-xs"
        />
      </div>
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

      <div class="form-control w-full max-w-xs">
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
      <div class="form-control w-full max-w-xs mb-4">
        <label class="label">
          <span class="label-text">Repeat Password</span>
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          class="input input-bordered w-full max-w-xs"
        />
      </div>

      {(message != "" || error || error1) && (
        <div className="mt-6">
          <p className="text-red-500">{message}</p>
          <p className="text-red-500">{error?.message}</p>
          <p className="text-red-500">{error1?.message}</p>
        </div>
      )}

      <button
        onClick={() =>
          handleRegister(email, password, confirmPassword, name, "")
        }
        class="btn btn-wide mb-4"
      >
        Register
      </button>
      <div className="text-sm grid grid-cols-2">
        <p className="">Alradey Have an Account? </p>
        <p
          onClick={() => navigate("/login")}
          className="hover:cursor-pointer text-right text-red-500 hover:text-red-700 "
        >
          Login Your Account
        </p>
      </div>

      <div class="divider m-5">OR Try</div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { auth } from "../../firebase.init";
import "./Account.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading/Loading";
import { handleAccessToken } from "../../Utilities/LocalStorage/ManageLS";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleSocialSignIn = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      // console.log(user.user.email);
      // console.log(user.user.uid);

      axios
        .post("http://localhost:5000/api/authFirebase/authentication", {
          email: user.user.email,
          userId: user.user.uid,
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Welcome ${user.user.displayName} Sir!`,
              showConfirmButton: true,
              timer: 3000,
            });

            // console.log(res.data.user_data.status);
            handleAccessToken(
              res.data.authorization,
              res.data.user_data.status,
              res.data.user_data.email
            );
          }
        });
    }
  }, [user]);

  if (loading) return <Loading></Loading>;

  return (
    <div className="flex flex-col justify-center items-center lg:m-24 sm:m-5">
      <div className="w-full flex flex-col items-center">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" class="input input-bordered w-full max-w-xs" />
        </div>

        <button class="btn lg:btn-wide sm:w-full my-10">Login</button>
      </div>

      <div class="divider m-5">OR</div>
      {error && <p>{error.message}</p>}

      <div className="mt-10 mb-20">
        <button
          onClick={handleSocialSignIn}
          class="btn lg:btn-wide my-5 flex sm:w-full "
        >
          <p>Sign in with Google</p>
          <img
            className="ml-2"
            style={{ width: "25px" }}
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Login;

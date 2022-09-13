import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import "./Account.css";

const Registration = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleSocialSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="flex flex-col justify-center items-center m-24">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Full Name</span>
        </label>
        <input type="text" class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="text" class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" class="input input-bordered w-full max-w-xs" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Repeat Password</span>
        </label>
        <input type="password" class="input input-bordered w-full max-w-xs" />
      </div>

      <button class="btn btn-wide my-10">Register</button>

      <div class="divider m-5">OR</div>

      <div className="mt-10 mb-20">
        <button
          onClick={handleSocialSignIn}
          class="btn lg:btn-wide my-5 flex sm:w-full"
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

export default Registration;

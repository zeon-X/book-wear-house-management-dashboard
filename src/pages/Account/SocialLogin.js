import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../firebase.init";
import axiosInstance from "../../Utilities/axiosInstance/axiosInstance";
import { handleAccessToken } from "../../Utilities/LocalStorage/ManageLS";

const SocialLogin = ({ props }) => {
  // social Login
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleSocialSignIn = () => {
    signInWithGoogle();
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

            navigate(`${props}`);
          }
        });
    }
  }, [user]);
  return (
    <div>
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

export default SocialLogin;

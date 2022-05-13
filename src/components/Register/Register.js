import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import signInWithGoogleImage from "../../images/google-sign-in.png";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const navigate = useNavigate();
  let [signInWithGoogle, loading] = useSignInWithGoogle(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleSignInWithGmail = () => {
    if (loading) {
      return <Loading></Loading>;
    }
    signInWithGoogle();
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Updated profile");
    navigate("/home");
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="d-block py-1 w-100 mx-auto my-3"
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
        />

        <input
          className="d-block py-1 w-100 mx-auto mb-3"
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          className="d-block py-1 w-100 mx-auto mb-3"
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input
          className="btn-primary btn-lg d-block mx-auto mb-3"
          type="submit"
          value="Register"
        />
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <div className="d-flex justify-content-center">
        <button onClick={handleSignInWithGmail} className="border-0 p-0">
          <img src={signInWithGoogleImage} alt="" />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

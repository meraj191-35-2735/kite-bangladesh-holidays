import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import signInWithGoogleImage from "../../images/google-sign-in.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [errors, setError] = useState();

  let from = location.state?.from?.pathname || "/";
  let [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  let [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user || user1) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    if (loading) {
      return <Loading></Loading>;
    }
    if (error) {
      setError("Password or email doesn't match!");
    }
  };

  const handleSignInWithGmail = () => {
    signInWithGoogle();
  };
  const handlePasswordReset = (email) => {
    if (email) {
      sendPasswordResetEmail(email);
      toast("Sending Link in Email");
    } else {
      toast("Please enter the Email Address");
    }
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container w-50 mx-auto mb-3">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {error ? <p className="text-danger">{errors}</p> : <p></p>}

        <p className="text-center mt-3">
          Forgotten Password?
          <button
            to="/register"
            className="text-danger btn btn-link border-0 bg-transparent pe-auto text-decoration-none"
            onClick={() => handlePasswordReset(emailRef.current.value)}
          >
            Click Here!
          </button>
        </p>

        <div className="d-flex justify-content-center">
          <Button className="btn-lg" variant="primary" type="submit">
            Log In
          </Button>
        </div>
      </Form>
      <p className="text-center mt-3">
        New to Our Website?
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please, Register!
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

export default Login;

import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const emailRef = useRef("");
  const nameRef = useRef("");
  const addressRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const email = emailRef.current.value;

    navigate("/thanks_for_booking");
  };

  return (
    <div className="w-lg-50 container w-sm-100 mx-auto mt-3 py-3 px-3 border border-gray">
      <h2 className="text-center">Please, Give Information!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            disabled
            type="email"
            value={user?.email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            ref={addressRef}
            type="text"
            placeholder="Enter address"
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="mt-3 btn-lg" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;

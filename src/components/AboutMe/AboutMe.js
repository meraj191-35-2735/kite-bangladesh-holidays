import React from "react";
import myPic from "../../images/mine.jpg";

const AboutMe = () => {
  return (
    <div className="container w-100 my-3 d-lg-flex d-sm-block">
      <div
        style={{ height: "75vh" }}
        className="w-50 d-flex align-items-center"
      >
        <div>
          {" "}
          <h3>
            Hey, This is
            <span className="text-warning"> Md. Shamsad Alam Meraj</span>.
          </h3>
          <p className="mt-3 fw-bold">
            I am currently studying in the Department of Software Engineering
            (B.Sc.) at Daffodil International University. I want to be a full
            stack web developer and have a full-time / part-time job or
            internship. Now, I try my best to achieve this.
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <img className="rounded-pill" src={myPic} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;

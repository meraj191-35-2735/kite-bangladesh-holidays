import React from "react";
import notFoundImage from "../../images/404-error-page-not-found.jpg";

const NotFound = () => {
  return (
    <div>
      <img
        className="w-100"
        style={{ height: "80vh" }}
        src={notFoundImage}
        alt=""
      />
    </div>
  );
};

export default NotFound;

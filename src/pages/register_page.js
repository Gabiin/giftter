import React from "react";
import Helmet from "react-helmet";

//components
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>GIFTTER | Register now</title>
      </Helmet>
      <Register></Register>
    </div>
  );
};

export default RegisterPage;

import React from "react";
import Helmet from "react-helmet";

//components
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>GIFTTER | Login</title>
      </Helmet>
      <h3>Login</h3>
      <hr />
      <Login></Login>
    </div>
  );
};

export default LoginPage;

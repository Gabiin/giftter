import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

//components
import Loader from "../Loader";

//custom hook
import useUser from "../../hooks/useUser";

//utils
import { getNormalize } from "../../util/normalizErrorsAPI";

//css
import "./login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ handler: "", password: "" });
  const { isLoading, isLogged, hasError, login, errors } = useUser();

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  useEffect(() => {
    if (isLogged & !isLoading) {
      pushLocation("/home");
    }
  }, [isLogged, pushLocation, isLoading]);

  const handleLoginClick = () => {
    try {
      login({ handler: loginData.handler, password: loginData.password });
    } catch (err) {
      console.log(err);
    }
  };

  return isLoading ? (
    <Loader showHR={false} />
  ) : (
    <div className="loginForm">
      {hasError ? (
        <div className="group">
          <label>Error:</label>
          <ul>
            {Object.keys(errors).map((item, index) => (
              <li key={index}>
                <strong>{getNormalize(item)}: </strong>
                {errors[item]}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="group">
        <label htmlFor="handler">Username:</label>
        <input
          type="text"
          name="handler"
          onChange={(e) =>
            setLoginData({ ...loginData, handler: e.target.value })
          }
          value={loginData.handler}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          value={loginData.password}
        ></input>
      </div>
      <div className="group">
        {isLoading ? (
          <Loader />
        ) : (
          <button type="button" onClick={isLoading ? null : handleLoginClick}>
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;

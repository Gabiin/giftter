import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

//custom hook
import useUser from "../../hooks/useUser";

//components
import Loader from "../Loader";

//utils
import { getNormalize } from "../../util/normalizErrorsAPI";

//css
import "./register.css";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    handler: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoading, hasError, errors, register, isRegistered } = useUser();
  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  const handleRegisterClick = () => {
    register({
      handler: registerData.handler,
      name: registerData.name,
      lastname: registerData.lastname,
      email: registerData.email,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword,
    });
  };

  useEffect(() => {
    if (isRegistered) {
      pushLocation("/login");
    }
  }, [isRegistered, pushLocation]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="registerForm">
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
            setRegisterData({ ...registerData, handler: e.target.value })
          }
          value={registerData.handler}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setRegisterData({ ...registerData, name: e.target.value })
          }
          value={registerData.name}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) =>
            setRegisterData({ ...registerData, lastname: e.target.value })
          }
          value={registerData.lastname}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          value={registerData.email}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
          value={registerData.password}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={(e) =>
            setRegisterData({
              ...registerData,
              confirmPassword: e.target.value,
            })
          }
          value={registerData.confirmPassword}
        ></input>
      </div>
      <div className="group">
        <button type="button" onClick={handleRegisterClick}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

//custom hooks
import useUser from "../../hooks/useUser";

//components
import Loader from "../Loader";

//utils
import { getNormalize } from "../../util/normalizErrorsAPI";

//css
import "./profile.css";
import Avatar from "../Avatar";

const Profile = () => {
  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();
  const { isLogged, userProfile, isLoading, hasError, errors } = useUser();
  const [profileData, setProfileData] = useState({
    handler: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!isLogged) {
      pushLocation("/home");
    } else {
      setProfileData({
        handler: userProfile.handler,
        name: userProfile.name,
        lastname: userProfile.lastname,
        email: userProfile.email,
        password: "",
        confirmPassword: "",
      });
    }
  }, [userProfile, isLogged, pushLocation]);

  return isLoading & userProfile ? (
    <Loader showHR={false} />
  ) : (
    <div className="profileForm">
      <div className="group-upload">
        <label htmlFor="avatarUpload">
          <Avatar
            name={profileData.name}
            lastname={profileData.lastname}
          ></Avatar>
        </label>
        <input type="file" name="avatarUpload" id="avatarUpload"></input>
      </div>
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
            setProfileData({ ...profileData, handler: e.target.value })
          }
          value={profileData.handler || ""}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
          value={profileData.name || ""}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) =>
            setProfileData({ ...profileData, lastname: e.target.value })
          }
          value={profileData.lastname || ""}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) =>
            setProfileData({ ...profileData, email: e.target.value })
          }
          value={profileData.email || ""}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setProfileData({ ...profileData, password: e.target.value })
          }
          value={profileData.password || ""}
        ></input>
      </div>
      <div className="group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={(e) =>
            setProfileData({
              ...profileData,
              confirmPassword: e.target.value,
            })
          }
          value={profileData.confirmPassword || ""}
        ></input>
      </div>
      <div className="group">
        <button type="button">SAVE</button>
      </div>
    </div>
  );
};

export default Profile;

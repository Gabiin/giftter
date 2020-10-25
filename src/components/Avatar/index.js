import React from "react";

//css
import "./avatar.css";

import avatarUrl from "../../defaultAvatar.jpg";

const Avatar = ({ name, lastname }) => {
  return (
    <div className="avatar">
      <img src={avatarUrl} alt={`User: ${name}, ${lastname}`}></img>
    </div>
  );
};

export default Avatar;

import React from "react";

// css
import "./loader.css";

//SVG
import SVG_File from "../../loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <hr />
      <img src={SVG_File} alt="Loading..." width="60px" height="60px" />
    </div>
  );
};

export default Loader;

import React from "react";

// css
import "./loader.css";

//SVG
import SVG_File from "../../loader.svg";

const Loader = ({ showHR = true }) => {
  return (
    <div className="loader">
      {showHR ? <hr /> : null}
      <img src={SVG_File} alt="Loading..." width="60px" height="60px" />
    </div>
  );
};

export default Loader;

import React from "react";

// css
import "./smallloader.css";

//SVG
import SVG_File from "../../loader.svg";

const SmallLoader = () => {
  return (
    <div className="smallLoader">
      <img src={SVG_File} alt="Loading..." />
    </div>
  );
};

export default SmallLoader;

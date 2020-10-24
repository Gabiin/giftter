import React from "react";
import { Link } from "wouter";
import Fav from "../Fav";
import "./gif.css";

const Gif = ({ id, title, url }) => {
  return (
    <div className="giftter">
      <div className="giftter-buttons">
        <Fav gifId={id} title={title} url={url}></Fav>
      </div>
      <Link to={`/giftter/${id}`} className="giftter-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
};

export default Gif;

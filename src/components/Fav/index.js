import React from "react";
import { useLocation } from "wouter";

//custom hook
import useUser from "../../hooks/useUser";

//components
import SmallLoader from "../SmallLoader";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as likeIcon } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faTimesCircle as unLikedIcon } from "@fortawesome/free-solid-svg-icons/faTimesCircle";

//css
import "./fav.css";

const Fav = ({ gifId, title, url }) => {
  const { isLogged, likeFav, unLikeFav, favs, isLoading } = useUser();

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  const isFav = favs.find((fav) => fav.gifId === gifId);

  const handleLikeClick = async () => {
    if (isLogged) {
      try {
        await likeFav({
          gifId,
          title,
          url,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      pushLocation("/login");
    }
  };
  const handleUnLikeClick = async () => {
    if (isLogged) {
      try {
        let { _id } = isFav;
        await unLikeFav({
          favId: _id,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      pushLocation("/login");
    }
  };

  const [clickOption, label, icon] = !isFav
    ? [handleLikeClick, "Add this Gif to My Giftter!", likeIcon]
    : [handleUnLikeClick, "Remove this Gif!", unLikedIcon];

  return isLoading ? (
    <SmallLoader />
  ) : (
    <button className="giftter-Fav" onClick={clickOption} title={label}>
      <FontAwesomeIcon icon={icon} className="icon" />
    </button>
  );
};

export default Fav;

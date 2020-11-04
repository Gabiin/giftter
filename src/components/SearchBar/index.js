import React, { useState } from "react";
import { useLocation } from "wouter";

//css
import "./searchBar.css";

//custom hook
import useUser from "../../hooks/useUser";

//Avatar image
import avatarUrl from "../../defaultAvatar.jpg";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons/faSearch";

const SearchBar = () => {
  const [keyWord, setKeyword] = useState("");
  const { isLogged, userProfile } = useUser();

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  const handleSearchClick = () => {
    if (keyWord.length > 0) {
      pushLocation(`/search/${keyWord}`);
      setKeyword("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearchClick();
    }
  };

  return (
    <div className="searchBar">
      <div className="search">
        <input
          type="search"
          name="textSearch"
          placeholder="Type something to search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyWord}
          onKeyDown={handleKeyDown}
          className="searchTerm"
        ></input>

        <button
          type="button"
          onClick={handleSearchClick}
          title="Clcik to search"
          className="searchButton"
        >
          <FontAwesomeIcon icon={searchIcon} className="icon" />
        </button>
      </div>
      {isLogged ? (
        <div className="user-profile">
          <div className="avatar-mini">
            <img
              loading="lazy"
              src={avatarUrl}
              alt={`User: ${userProfile.name}, ${userProfile.lastname}`}
            ></img>
          </div>
          <span className="username">User: {userProfile.handler}</span>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;

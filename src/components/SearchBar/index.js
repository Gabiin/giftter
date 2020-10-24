import React, { useState } from "react";
import { useLocation } from "wouter";

//css
import "./searchBar.css";

const SearchBar = () => {
  const [keyWord, setKeyword] = useState("");
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
      <div>
        <input
          type="text"
          name="textSearch"
          placeholder="Type something to search"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyWord}
          onKeyDown={handleKeyDown}
        ></input>
        <button type="button" onClick={handleSearchClick}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

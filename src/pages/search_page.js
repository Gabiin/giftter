import React, { Suspense } from "react";

//components
import ListOfGifs from "../components/ListOfGifs";
import Loader from "../components/Loader";

//custom Hooks
import useSearch from "../hooks/useSearch";

const Search = ({ params }) => {
  const { keyword } = params;
  const { searchResult, isLoading, hasMore, setPage } = useSearch({
    keyword,
  });

  const fetchMoreData = () => {
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
    }, 1500);
  };

  return (
    <div className="container" id="searchDiv">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>Search: {keyword}</h3>
          <hr />
          <Suspense fallback={<Loader />}>
            <ListOfGifs
              gifs={searchResult}
              fetchMoreData={fetchMoreData}
              hasMore={hasMore}
              scrollableDiv="searchDiv"
            ></ListOfGifs>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Search;

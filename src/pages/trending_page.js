import React, { Suspense } from "react";

//components
import ListOfGifs from "../components/ListOfGifs";
import Loader from "../components/Loader";

//custom hooks
import useTrending from "../hooks/useTrending";

const Trending = () => {
  const { trendingGif, isLoading } = useTrending();

  const fetchMoreData = () => {};

  return (
    <div className="container" id="trendingDiv">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>Trending Gifs</h3>
          <hr />
          <Suspense fallback={<Loader />}>
            <ListOfGifs
              gifs={trendingGif}
              fetchMoreData={fetchMoreData}
              hasMore={false}
              scrollableDiv="trendingDiv"
            ></ListOfGifs>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Trending;

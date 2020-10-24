import React, { Suspense } from "react";
import Helmet from "react-helmet";

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
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <Loader />
        </>
      ) : (
        <>
          <Helmet>
            <title>GIFTTER | Trending gifs</title>
          </Helmet>
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

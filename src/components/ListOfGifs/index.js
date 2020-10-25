import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//css
import "./listOfGifs.css";

//components
import Gif from "../Gif";
import Loader from "../Loader";

const ListOfGifs = ({ gifs, fetchMoreData, hasMore, scrollableDiv }) => {
  const div = document.getElementById(scrollableDiv);
  return (
    <InfiniteScroll
      dataLength={gifs.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader></Loader>}
      scrollableTarget={div}
      refreshFunction={fetchMoreData}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={<h4>Pull down to refresh</h4>}
      releaseToRefreshContent={<h4>Release to refresh</h4>}
    >
      <div className="ListOfGifs">
        {gifs
          ? gifs.map(({ id, title, url }) => (
              <Gif key={id} id={id} title={title} url={url}></Gif>
            ))
          : null}
      </div>
    </InfiniteScroll>
  );
};

export default ListOfGifs;

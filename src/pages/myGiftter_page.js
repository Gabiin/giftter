import React, { Suspense, useState, useEffect } from "react";

//components
import ListOfGifs from "../components/ListOfGifs";
import Loader from "../components/Loader";

//custom Hooks
import useUser from "../hooks/useUser";

const MyGiftter = () => {
  const { favs } = useUser();
  const [listOfFavs, setListOfFavs] = useState([]);

  const fetchMoreData = () => {};

  useEffect(() => {
    let arr = favs.map((fav) => {
      let { title, url, gifId, like } = fav;
      let id = gifId;
      return { id, title, url, like };
    });
    setListOfFavs(arr);
  }, [favs]);

  return (
    <div className="container" id="myGiffterDiv">
      <h3>Liked Gifs</h3>
      <hr />
      <Suspense fallback={<Loader />}>
        <ListOfGifs
          gifs={listOfFavs}
          fetchMoreData={fetchMoreData}
          hasMore={false}
          scrollableDiv="myGiffterDiv"
        ></ListOfGifs>
      </Suspense>
    </div>
  );
};

export default MyGiftter;

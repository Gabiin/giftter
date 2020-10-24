import React from "react";
import Gif from "../components/Gif";
import Loader from "../components/Loader";
import useGif from "../hooks/useGif";

const Error = () => {
  const gifId = "YyKPbc5OOTSQE"; // gif for 404 error
  const { gif, isLoading } = useGif({ gifId });
  const { id, title, url } = gif;
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="error">404 page not found</div>
          <hr />
          <Gif id={id} title={title} url={url}></Gif>
        </>
      )}
    </div>
  );
};

export default Error;

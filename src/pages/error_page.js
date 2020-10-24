import React from "react";
import Helmet from "react-helmet";

//components
import Gif from "../components/Gif";
import Loader from "../components/Loader";

//custom hook
import useGif from "../hooks/useGif";

const Error = () => {
  const gifId = "YyKPbc5OOTSQE"; // gif for 404 error
  const { gif, isLoading } = useGif({ gifId });
  const { id, title, url } = gif;
  return (
    <div className="container">
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
            <title>GIFTTER | Simple React App based on Giphy API</title>
          </Helmet>
          <div className="error">404 page not found</div>
          <hr />
          <Gif id={id} title={title} url={url}></Gif>
        </>
      )}
    </div>
  );
};

export default Error;

import React, { Suspense } from "react";
import { useLocation } from "wouter";

// components
import Gif from "../components/Gif";
import useGif from "../hooks/useGif";
import Loader from "../components/Loader";

const Giftter = ({ params }) => {
  const { gif, isLoading, isError } = useGif({ gifId: params.id });
  const { id, title, url } = gif;

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  if (isError) {
    pushLocation(`/${params}`);
  }
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>{title}</h3>
          <hr />
          <Suspense fallback={<Loader />}>
            <Gif id={id} title={title} url={url}></Gif>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Giftter;

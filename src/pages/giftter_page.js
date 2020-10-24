import React, { Suspense } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";

// components
import Gif from "../components/Gif";
import useGif from "../hooks/useGif";
import Loader from "../components/Loader";
import SharedMedia from "../components/SharedMedia";

const Giftter = ({ params }) => {
  const { gif, isLoading, isError } = useGif({ gifId: params.id });
  const { id, title, url } = gif;

  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();

  if (isError) {
    pushLocation(`/${params}`);
  }

  const shareLink = `https://giftter.gabrieldiazdev.com/giftter/${id}`;

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{`GIFTTER | ${title}`}</title>
            <meta charSet="utf-8" />
            <meta property="og:image" content={url} />
            <meta property="og:image:type" content="image/gif" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={shareLink} />
            <meta property="og:image:secure_url" content={shareLink} />
            <meta property="og:title" content={`GIFTTER | ${title}`} />
            <meta property="og:description" content={title} />
            <meta property="fb:app_id" content="360303158538861" />
            <meta property="og:site_name" content={`GIFTTER | ${title}`} />
          </Helmet>
          <h3>{title}</h3>
          <hr />
          <Suspense fallback={<Loader />}>
            <Gif id={id} title={title} url={url}></Gif>
            <SharedMedia url={shareLink} title={title}></SharedMedia>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Giftter;

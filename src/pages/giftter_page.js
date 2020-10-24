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
            <meta charSet="utf-8" />
            <title itemProp="name">Giftter | {title}</title>
            <meta name="description" content={title} />
            <meta property="og:type" content="article" />
            <link rel="canonical" href={shareLink} />
            <link rel="alternate" href={shareLink} />
            <base target="_blank" href={shareLink} />
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

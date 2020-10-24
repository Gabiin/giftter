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
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <Loader />
        </>
      ) : (
        <>
          <Helmet
            title={`GIFTTER | ${title}`}
            meta={[
              { name: "author", content: `GIFTTER | ${title}` },
              { name: "twitter:site", content: `GIFTTER | ${title}` },
              { name: "twitter:creator", content: `GIFTTER | ${title}` },
              { name: "twitter:title", content: title },
              { name: "twitter:image", content: url },
              { property: "og:title", content: title },
              { property: "og:site_name", content: `GIFTTER | ${title}` },
              { property: "og:type", content: "website" },
              { property: "og:url", content: shareLink },
              { property: "og:description", content: title },
              { property: "og:image", content: url },
              { property: "og:site_name", content: `GIFTTER | ${title}` },
              {
                name: "viewport",
                content: "width=device-width, maximum-scale=1",
              },
              { name: "fb:app_id", content: "360303158538861" },
            ]}
          />
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

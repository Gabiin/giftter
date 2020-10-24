import React, { Suspense } from "react";
import Helmet from "react-helmet";

// components
import Loader from "../components/Loader";

//pages
import Trending from "./trending_page";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Helmet>
        <title>GIFTTER | Simple React App based on Giphy API</title>
      </Helmet>
      <Trending></Trending>
    </Suspense>
  );
};

export default Home;

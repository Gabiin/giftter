import React, { Suspense } from "react";
import Loader from "../components/Loader";
import Trending from "./trending_page";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Trending></Trending>
    </Suspense>
  );
};

export default Home;

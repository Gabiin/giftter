import React, { Suspense } from "react";
import Helmet from "react-helmet";

//component
import Profile from "../components/Profile";
import Loader from "../components/Loader";

const ProfilePage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>GIFTTER | Profile</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <Profile></Profile>
      </Suspense>
    </div>
  );
};

export default ProfilePage;

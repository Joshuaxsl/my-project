import React from "react";
import HeroSection from "../HeroSection";
import Decription from "../Decription";

const Home = () => {



  return (
    <>
      <div className="flex justify-center items-center">
        <HeroSection />
      </div>
      <div>
        <Decription />
      </div>
    </>
  );
};

export default Home;

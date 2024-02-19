import React from "react";
import ShopButton from "./ShopButton";
import hero from "../assets/images/hero.png";
import Background from "./Background";

const HeroSection = () => {
  return (
    <>
    <Background/>
      <div className="md:grid lg:grid-cols-2 md:justify-center md:items-center space-y-6  md:px-20 h-screen pt-20 md:pt-0">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold font-serif">
            Shop Now for the Best Deals!
          </h1>
          <div className="lg:block hidden">
            <ShopButton>See Offers</ShopButton>
          </div>
        </div>
        <div>
          <img src={hero} alt="hero" />
        </div>
        <div className="lg:hidden block text-center">
          <ShopButton>See Offers</ShopButton>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

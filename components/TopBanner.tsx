import React, { useState, useEffect } from "react";
import { ASSETS } from "../constants";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-white md:pt-[110px]">
      {/* 
        On Desktop: Navbar is fixed white. We push the banner down to avoid overlap.
        On Mobile: Navbar is transparent and overlay is desired.
      */}
      <picture>
        <source media="(min-width: 768px)" srcSet={ASSETS.images.heroDesktop} />
        <img
          src={ASSETS.images.heroDesktop}
          alt="Banner Campaña Lesdy Marlody"
          className="w-full h-auto object-cover block"
        />
      </picture>
    </div>
  );
};

export default TopBanner;

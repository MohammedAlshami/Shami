"use client";
import React from "react";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { AnimatedModalDemo } from "./AnimatedModalDemo";
const page = () => {
  return (
    <div className="my-24">
      <h2 className="text-center text-5xl text-white font-bold py-12">
        My Meetings List
      </h2>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Latest Meetings
      </h2>
      <AppleCardsCarouselDemo />

      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        All Meetings
      </h2>
      <CardHoverEffectDemo />
      <AnimatedModalDemo />

      {/* Map through the list of places */}
      <div className="grid grid-cols-3"></div>
    </div>
  );
};

export default page;

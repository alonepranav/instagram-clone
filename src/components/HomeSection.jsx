import React from "react";
import Story from "./Story";
import Peoples from "./Peoples";
import Reels from "./Reels";

export default function HomeSection() {
  return (
    <>
      <div className="w-full h-full ml-12">
        <Story />
        <div className="flex flex-col justify-center items-center mt-12 ml-10">
          <Reels />
          <Reels />
          <Reels />
          <Reels />
          <Reels />
        </div>
      </div>
      <Peoples />
    </>
  );
}

import React from "react";
import { HiHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import reels from "../../data/reels.json";

export default function Reels() {
  const Box = ({ video }) => {
    return (
      <>
        <div className="h-[24.9rem] w-[14.1rem] relative">
          <div className="opacity-0 hover:opacity-100 flex justify-center items-center h-full w-full absolute top-0 left-0 z-0">
            <div className="flex justify-center items-center h-full w-full gap-10 text-xl text-white font-semibold bg-[rgba(0,0,0,.4)] z-10">
              <p className="flex gap-1 justify-center items-center">
                <HiHeart className="text-2xl" />
                <span>12</span>
              </p>
              <p className="flex gap-1 justify-center items-center">
                <LuMessageCircle className="text-2xl" />
                <span>12</span>
              </p>
            </div>
          </div>

          {/* <div> */}
          <video
            src={video}
            className="h-[24.9rem] w-full object-cover"
          ></video>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex justify-start items-center gap-1 flex-wrap mt-4">
        {reels.map((q, w) => {
          return <Box key={w} {...q} />;
        })}
      </div>
    </>
  );
}

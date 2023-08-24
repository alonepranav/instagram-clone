import React from "react";
import { HiHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";

export default function Tagged() {
  const Box = ({ profile }) => {
    return (
      <>
        <div className="h-[18.9rem] w-[18.9rem] mb-0.5 relative">
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

          <div>
            <img
              src={profile}
              className="h-[18.9rem] w-[18.9rem] object-cover "
              alt=""
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full h-fit mt-4">
        <div className="flex justify-start items-center flex-wrap gap-1">
          <Box {...{ profile: "/post/post1.png" }} />
          <Box {...{ profile: "/post/post2.png" }} />
          <Box {...{ profile: "/post/post3.png" }} />
          <Box {...{ profile: "/post/post4.png" }} />
          <Box {...{ profile: "/post/post5.png" }} />
          <Box {...{ profile: "/post/post6.png" }} />
          <Box {...{ profile: "/post/post7.png" }} />
          <Box {...{ profile: "/post/post8.png" }} />
        </div>
      </div>
    </>
  );
}

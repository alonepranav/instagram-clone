import React, { useEffect, useState } from "react";
import { BiMessage } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import Post from "./Post";

export default function Posts() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (post) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    window.onkeydown = (e) => {
      if (e.key === "Escape") {
        setPost(null);
      }
    };
  }, [post]);

  const Box = ({ profile }) => {
    return (
      <>
        <div
          className="relative h-[18.9rem] w-[18.9rem] mb-0.5"
          onClick={() => setPost(profile)}
        >
          <div className="opacity-0 hover:opacity-100 flex justify-center items-center h-full w-full absolute top-0 left-0 z-0">
            <div className="flex justify-center items-center h-full w-full gap-10 text-xl text-white font-semibold bg-[rgba(0,0,0,.4)]">
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

          <div className="relative -z-10">
            <img
              src={profile}
              alt=""
              className="h-[18.9rem] w-[18.9rem] object-contain"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full h-fit mt-4 mx-auto">
        <div className="">{post && <Post {...{ post, setPost }} />}</div>

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

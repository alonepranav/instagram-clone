import React from "react";
import { AiOutlineSmile } from "react-icons/ai";
import { BiBookAdd, BiSend, BiSolidMusic } from "react-icons/bi";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { HiHeart, HiOutlineBookmark, HiOutlineHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import {
  MdBookmark,
  MdOutlineBookmark,
  MdOutlineBookmarkBorder,
} from "react-icons/md";
import { TbSend } from "react-icons/tb";

export default function ReelsSection() {
  const Reel = () => {
    return (
      <>
        <div className="snap-start snap-always h-screen">
          <div className="my-10 h-[650px] w-[420px] flex justify-center">
            <div className="relative rounded-md overflow-hidden shadow-stone-500 shadow-2xl">
              <img
                src="/assets/profile.png"
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-1 mx-4 text-white">
                <div className=" flex items-center gap-4">
                  <div>
                    <img
                      src="/assets/profile.png"
                      className="h-10 w-10 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p>pranavshilavane</p>
                    <span className="font-semibold"> . Follow</span>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm line-clamp-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci sunt similique nobis! Illo eum labore odit ea
                    nostrum temporibus consequuntur!
                  </p>
                  <div className="flex justify-start gap-3 items-center mt-3 mb-5">
                    <BiSolidMusic />
                    <marquee className="text-sm">
                      Arigit singh , Badshah
                    </marquee>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-end pl-7 text-slate-700 text-[1.7rem] flex flex-col gap-8">
              <div>
                <HiOutlineHeart />
                <p className="text-xs mt-1">1.1M</p>
              </div>
              <div>
                <LuMessageCircle />
                <p className="text-xs mt-1">123</p>
              </div>
              <FiSend />
              <MdOutlineBookmarkBorder />
              <div>
                <img
                  src="/assets/profile.png"
                  className="h-8 w-10 rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="w-full h-screen overflow-scroll flex justify-center items-center flex-col"
        style={{
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
      </div>
    </>
  );
}

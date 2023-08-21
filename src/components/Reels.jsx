import React from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineSmile } from "react-icons/ai";

export default function Reels() {
  return (
    <>
      <div className="w-[450px] h-fit overflow-hidden mb-7">
        <div className="flex gap-3 justify-center items-center">
          <div>
            <img
              src="/assets/profile.png"
              alt="Profile image"
              className="h-10 w-11 rounded-full"
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-center pb-2">
              <p className="font-semibold">pranavshilavane</p>
              <p className="text-xs">Arijit Singh, Badshah</p>
            </div>

            <div className="flex gap-1 cursor-pointer">
              <span className="font-bold rounded-full block h-1 w-1 bg-black"></span>
              <span className="font-bold rounded-full block h-1 w-1 bg-black"></span>
              <span className="font-bold rounded-full block h-1 w-1 bg-black"></span>
            </div>
          </div>
        </div>

        <div className="border border-slate-400 rounded mt-2 min-w-[450px] min-h-[450px]">
          <div className="flex justify-center items-center px-10">
            <img src="/assets/profile.png" className="h-[450px] object-cover" />
          </div>
        </div>

        <div className="flex justify-between text-[1.6rem] mt-3">
          <div className="flex gap-5">
            <HiOutlineHeart className="hover:text-gray-500" />
            <LuMessageCircle className="hover:text-gray-500" />
          </div>
          <div>
            <HiOutlineBookmark className="hover:text-gray-500" />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-2">
            <div>
              <img src="/assets/likes.png" alt="Likes photo" className="h-5" />
            </div>
            <p className="font-semibold">1M likes</p>
          </div>

          <p>pranavshilavane 😇🙂😎😃😋👻🥰😍🤩💖💓</p>
          <p className="text-sm text-slate-500">
            .
            <br />
            ...
            <br />
            more
            <br />
            <span className="mt-2 block">View all comments</span>
          </p>

          <div className="relative">
            <AiOutlineSmile className="absolute right-0 top-5 text-stone-400" />
            <input
              type="text"
              className="w-full outline-none placeholder:text-slate-400 placeholder:text-base mt-3 border-b-2 pb-3"
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

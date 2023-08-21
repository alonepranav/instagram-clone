import React from "react";
import { RiSettings5Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="h-screen w-full mx-44">
      <div className="flex gap-24 justify-center items-center h-36 pt-24 pr-24">
        <div className="h-36 w-36">
          <img
            src="/assets/profile.png"
            alt=""
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 h-36">
          <div className="flex items-center gap-2">
            <span className="text-xl">pranavshilavane&nbsp;&nbsp;</span>
            <button className="font-semibold bg-stone-100 py-1.5 px-5 rounded-md text-sm">
              Edit profile
            </button>
            <button className="font-semibold bg-stone-100 py-1.5 px-5 rounded-md text-sm">
              View Archieve
            </button>
            <button className="">
              <RiSettings5Line className="text-3xl" />
            </button>
          </div>

          <div className="mt-3">
            <span className="mr-9">
              <span className="font-semibold">0 </span>
              posts
            </span>
            <span className="mr-9">
              <span className="font-semibold">34 </span>
              followers
            </span>
            <span className="mr-9">
              <span className="font-semibold">43 </span>
              following
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold">
              Pranav Shilavane
              <br />
              ✌️🙂😎😈
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="border-t border-slate-300">
        <div className="relative flex justify-center items-center gap-20">
          <div className="absolute top-0 left-[18.7rem] border-t w-16 border-black"></div>
          <Link to={"/profile/"} className="mt-4 text-sm">
            Posts
          </Link>
          {/* 18.7 */}
          <Link to={"/profile/reels"} className="mt-4 text-sm">
            Reels
          </Link>
          {/* 26.7 */}
          <Link to={"/profile/tagged"} className="mt-4 text-sm">
            Tagged
          </Link>
          {/* 34.7 */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

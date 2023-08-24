import React, { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import {
  BiBookmark,
  BiCommentError,
  BiMoviePlay,
  BiSearch,
  BiTimer,
} from "react-icons/bi";
import { RiMessengerLine, RiSettings5Line } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart, FiSun } from "react-icons/fi";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineMacCommand } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { BsInstagram } from "react-icons/bs";
import Search from "./Search";

export default function Sidebar() {
  const [create, setCreate] = useState(false);
  const [more, setMore] = useState(false);
  const [small, setSmall] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === "Escape") {
        setCreate(false);
      }
    };
    if (create) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [create]);

  const path = useLocation();

  useEffect(() => {
    if (path.pathname === "/message") setSmall(true);
  }, []);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === "Escape") {
        setMore(false);
      }
    };
  }, [more]);

  return (
    <aside className={`h-screen ${small ? "w-8" : "w-60"} overflow-hidden`}>
      {/* For create box */}
      {create
        ? createPortal(
            <>
              <div
                className={`h-screen w-screen absolute left-0 bg-[rgba(0,0,0,0.6)] z-10 flex justify-center items-center`}
                style={{
                  top: Math.floor(window.scrollY) + "px",
                }}
              >
                <button onClick={() => setCreate(false)}>
                  <AiOutlineClose className="absolute z-20 top-5 right-5 font-bold text-3xl text-white" />
                </button>

                <div className="md:h-[35rem] md:w-[32rem] rounded-xl bg-white">
                  <h4 className="text-center py-2 pb-3 font-semibold border-b-2">
                    Create new post
                  </h4>
                  <div className="flex h-5/6 w-full justify-center items-center">
                    <div className="text-center">
                      <img
                        src="/assets/photos.png"
                        alt=""
                        className="h-28 w-40 mx-auto"
                      />
                      <p className="text-xl">Drag photos and videos here</p>
                      <label
                        className="bg-sky-500 py-1 px-4 mt-5 inline-block text-white font-semibold my-3 rounded-md"
                        htmlFor="file"
                      >
                        {"Select from computer"}
                      </label>
                      <input id="file" type="file" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.getElementById("portal")
          )
        : ""}
      <div
        className={`fixed h-full ${
          small ? "w-20" : "md:w-60"
        }   border-r-2 border-slate-200 py-5 bg-white z-0`}
      >
        <div className="flex flex-col h-full justify-between bg-white">
          {/* For search bar */}
          {!search || <Search />}

          <div>
            <div>
              <a href="/">
                {small ? (
                  <div className="mx-6 mt-5 text-2xl">
                    <BsInstagram />
                  </div>
                ) : (
                  <img
                    src="/assets/instagram_text.png"
                    className="h-[3.3rem]"
                    alt="afas"
                  />
                )}
              </a>
            </div>

            <ul className="mt-9 bg-white">
              <Link
                to="/"
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100 py-2.5 px-4 mx-2 rounded-md"
                onClick={() => {
                  setSearch(false);
                  setSmall(false);
                }}
              >
                <GoHomeFill className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Home</p>
              </Link>
              <li
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100 py-2.5 pl-4 mx-2 rounded-md"
                onClick={() => {
                  setSearch(search ? false : true);
                  setSmall(search ? false : true);
                }}
              >
                <BiSearch className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Search</p>
              </li>
              <li
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
              >
                <MdOutlineExplore className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Explore</p>
              </li>
              <Link
                to={"/reels"}
                className="cursor-pointer flex gap-3 justify-start
                items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
                onClick={() => {
                  setSearch(false);
                  setSmall(false);
                }}
              >
                <BiMoviePlay className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Reels</p>
              </Link>
              <Link
                to={"/message"}
                className="cursor-pointer flex gap-3 justify-start
              items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
                onClick={() => {
                  setSmall(true);
                  setSearch(false);
                }}
              >
                <RiMessengerLine className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Messages</p>
              </Link>
              <li
                className="cursor-pointer flex gap-3 justify-start
                items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2 rounded-md"
              >
                <FiHeart className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Notification</p>
              </li>
              <li
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
                onClick={() => setCreate(true)}
              >
                <TbSquareRoundedPlus className="text-2xl" />
                <p className={`${small ? "hidden" : ""}`}>Create</p>
              </li>
              <Link
                to="profile"
                className="cursor-pointer flex gap-3 justify-start
              items-center my-3.5 hover:bg-gray-100 py-2.5 pl-5 mx-2 rounded-md"
                onClick={() => {
                  setSmall(false);
                  setCreate(false);
                  setSearch(false);
                }}
              >
                <img
                  src="/assets/profile.png"
                  className="h-7 rounded-full"
                  alt=""
                />
                <p className={`${small ? "hidden" : ""}`}>Profile</p>
              </Link>
            </ul>
          </div>

          <div className="w-full relative">
            {!more || (
              <div
                className="w-[16rem] ml-2 bg-gray-100 rounded-2xl absolute bottom-20"
                style={{
                  boxShadow: "0px 0px 20px #dcdcd4",
                }}
              >
                <div className="rounded-t-2xl bg-white px-3 py-3">
                  <ul>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <RiSettings5Line className="text-2xl" />
                      <p>Setting</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <BiTimer className="text-2xl" />
                      <p>Your Activity</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <BiBookmark className="text-2xl" />
                      <p>Saved</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <AiOutlineMacCommand className="text-2xl" />
                      <p>Keyboard shortcut</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiSun className="text-2xl" />
                      <p>Switch appearence</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <BiCommentError className="text-2xl" />
                      <p>Report a problem</p>
                    </li>
                  </ul>
                </div>
                <div className="rounded-b-2xl bg-white mt-1 py-1 text-sm">
                  <p className="mx-3 px-4 py-4 my-1 mb-2 rounded-lg hover:bg-gray-100">
                    <Link to={"/signin"}>Switch accounts</Link>
                  </p>
                  <hr />
                  <p
                    onClick={() => {
                      localStorage.clear();
                      location.replace("/");
                    }}
                    className="mx-3 px-4 py-4 mt-2 mb-1 rounded-lg hover:bg-gray-100"
                  >
                    Log out
                  </p>
                </div>
              </div>
            )}{" "}
            <div className="pl-2 mr-4 mt-14">
              <div
                className="flex justify-start gap-3 w-full
              items-center my-6 mx-1 pl-2 py-2.5 rounded-md hover:bg-stone-200"
                onClick={() => setMore(!more)}
              >
                <RxHamburgerMenu className="text-2xl w-7" />
                <p
                  className={`${more ? "font-bold" : ""} ${
                    small ? "hidden" : ""
                  }`}
                >
                  More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

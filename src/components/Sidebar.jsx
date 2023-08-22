import React, { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { BiMoviePlay, BiSearch } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === "Escape") {
        setMore(false);
      }
    };
  }, [more]);

  return (
    <aside className="h-screen w-36 md:w-[15.5rem] overflow-hidden">
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
        className={`fixed h-full w-36 md:w-[${
          small ? "4.5rem" : "15.5rem"
        }] border-r-2 border-slate-200 py-5`}
      >
        <div className="flex flex-col h-full w-full justify-between">
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

            <ul className="mt-9">
              <Link
                to="/"
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100 py-2.5 pl-4 mx-2 rounded-md"
              >
                <GoHomeFill className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Home</p>
              </Link>
              <li
                className="relative cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
                onClick={() => {
                  setSearch(!search);
                  setSmall(!small);
                }}
              >
                <BiSearch className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Search</p>
              </li>
              <li
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
              >
                <MdOutlineExplore className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Explore</p>
              </li>
              <Link
                to={"/reels"}
                className="cursor-pointer flex gap-3 justify-start
         items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
              >
                <BiMoviePlay className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Reels</p>
              </Link>
              <li
                className="cursor-pointer flex gap-3 justify-start
              items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
                onClick={() => setSmall(!small)}
              >
                <RiMessengerLine className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Messages</p>
              </li>
              <li
                className="cursor-pointer flex gap-3 justify-start
              items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2 rounded-md"
              >
                <FiHeart className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Notification</p>
              </li>
              <li
                className="cursor-pointer flex gap-3 justify-start
          items-center my-3.5 hover:bg-gray-100  py-2.5 pl-4 mx-2  rounded-md"
                onClick={() => setCreate(true)}
              >
                <TbSquareRoundedPlus className="text-2xl" />
                <p className={`${small ? "hidden" : "block"}`}>Create</p>
              </li>
              <Link
                to="profile"
                className="cursor-pointer flex gap-3 justify-start
              items-center my-3.5 hover:bg-gray-100 py-2.5 pl-5 rounded-md"
              >
                <img
                  src="/assets/profile.png"
                  className="h-7 rounded-full"
                  alt=""
                />
                <p className={`${small ? "hidden" : "block"}`}>Profile</p>
              </Link>
            </ul>
          </div>

          <div className="w-full ml-4 relative">
            {!more || (
              <div
                className="w-[16rem] bg-gray-100 rounded-2xl absolute bottom-20"
                style={{
                  boxShadow: "0px 0px 20px #dcdcd4",
                }}
              >
                <div className="rounded-t-2xl bg-white px-3 py-3">
                  <ul>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiHeart className="text-2xl" />
                      <p>Setting</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiHeart className="text-2xl" />
                      <p>Setting</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiHeart className="text-2xl" />
                      <p>Setting</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiHeart className="text-2xl" />
                      <p>Setting</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiHeart className="text-2xl" />
                      <p>Setting</p>
                    </li>
                    <li className="transition-colors flex gap-3  hover:bg-gray-100 py-3 pl-4 rounded-lg">
                      <FiHeart className="text-2xl" />
                      <p>Setting</p>
                    </li>
                  </ul>
                </div>
                <div className="rounded-b-2xl bg-white mt-1 text-sm">
                  <p className="ml-7 py-6">Switch accounts</p>
                  <hr />
                  <p className="ml-7 py-6">Log out</p>
                </div>
              </div>
            )}
            <div className="pr-10 mt-20">
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

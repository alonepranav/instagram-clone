import React, { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineSmile } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Posts({
  account,
  message,
  likes,
  image,
  comments,
  upload,
}) {
  const [options, setOptions] = useState(false);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === "Escape") {
        setOptions(false);
      }
    };

    if (options) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [options]);

  const Option = () => {
    return (
      <>
        <div className="absolute left-0 top-0 h-screen w-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center">
          <div className="bg-white w-[24.8rem] rounded-xl overflow-hidden flex justify-center flex-col items-center">
            <Link
              to={"/"}
              className="text-rose-600 py-3 border-b-2 w-full text-center font-semibold text-sm"
            >
              Repost
            </Link>
            <Link
              to={"/"}
              className="py-3 border-b-2 w-full text-center font-light text-sm"
            >
              Not interested
            </Link>
            <Link
              to={"/"}
              className="py-3 border-b-2 w-full text-center font-light text-sm"
            >
              Go to post
            </Link>
            <Link
              to={"/"}
              className="py-3 border-b-2 w-full text-center font-light text-sm"
            >
              Share to...
            </Link>
            <Link
              to={"/"}
              className="py-3 border-b-2 w-full text-center font-light text-sm"
            >
              Copy link
            </Link>
            <Link
              to={"/"}
              className="py-3 border-b-2 w-full text-center font-light text-sm"
            >
              Embed
            </Link>
            <Link
              to={"/"}
              className="py-3 border-b-2 w-full text-center font-light text-sm"
            >
              Cancel
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {!options || <Option />}

      <div className="w-[450px] h-fit overflow-hidden mb-7">
        <div className="flex gap-3 justify-center items-center mb-5">
          <div>
            <img
              src={image}
              alt="Profile image"
              className="h-10 w-11 rounded-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-center pb-2">
              <Link to={"/"} className="font-semibold">
                {account} . {upload} .{" "}
                <span className="text-sky-500">Follow</span>
              </Link>
              {/* <Link to={"/"} className="text-xs">Arijit Singh, Badshah</Link> */}
            </div>

            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => setOptions(true)}
            >
              <span className="font-bold rounded-full block h-1 w-1 bg-black"></span>
              <span className="font-bold rounded-full block h-1 w-1 bg-black"></span>
              <span className="font-bold rounded-full block h-1 w-1 bg-black"></span>
            </div>
          </div>
        </div>

        <div className="border border-slate-400 rounded mt-2 min-w-[450px] min-h-[450px]">
          <div className="flex justify-center items-center px-10">
            <img src={image} className="h-[450px] object-cover" />
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
            <Link to={"/"} className="font-semibold">
              {likes} likes
            </Link>
          </div>

          <p>
            <span className="font-semibold text-sm">{account} </span>
            {message}
          </p>
          <Link to={"/"} className="text-sm text-slate-500">
            .
            <br />
            ...
            <br />
            more
            <br />
            <span className="mt-2 block">View all {comments} comments</span>
          </Link>

          <div className="relative -z-10">
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

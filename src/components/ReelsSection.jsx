import React, { useEffect, useRef, useState } from "react";
import { BiSolidMusic } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import reels from "../data/reels.json";

export default function ReelsSection() {
  const [reel, setReel] = useState([]);

  useEffect(() => {
    setReel([...reels]);
  }, []);

  const ReelsBox = ({
    account,
    likes,
    comment,
    profile,
    video,
    play,
    index,
    reel,
    setReel,
  }) => {
    const ref = useRef();

    useEffect(() => {
      if (play) ref.current.play();
    }, []);

    return (
      <>
        <div className="snap-start snap-always h-screen">
          <br />
          <div className="pt-3 h-[700px] w-[420px] flex justify-center">
            <div className="relative rounded-md overflow-hidden shadow-stone-500 shadow-2xl">
              <video
                ref={ref}
                className="h-full w-full object-cover"
                src={video}
                loop
                onClick={(e) => {
                  if (e.target.paused) {
                    setReel(() => {
                      const o = reel.map((w, ind) => {
                        return {
                          ...w,
                          play: ind === index ? true : false,
                        };
                      });

                      return [...o];
                    });
                    e.target.play();
                  } else {
                    e.target.pause();
                  }
                }}
              ></video>

              <div className="absolute bottom-1 mx-4 text-white">
                <div className=" flex items-center gap-4">
                  <div>
                    <img
                      src={profile}
                      className="h-10 w-10 rounded-full object-cover"
                      alt="Profile image"
                    />
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <p>{account}</p>
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
                <p className="text-xs mt-1">{likes}</p>
              </div>
              <div>
                <LuMessageCircle />
                <p className="text-xs mt-1">{comment}</p>
              </div>
              <FiSend />
              <MdOutlineBookmarkBorder />
              <div>
                <img
                  src={profile}
                  className="h-7 w-10 rounded-full object-cover"
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
        <ReelsBox {...{ video: "" }} />
        <ReelsBox {...{ video: "" }} />
        <ReelsBox {...{ video: "" }} />

        {true ? (
          reel.map((i, r) => {
            return (
              <div key={r}>
                <ReelsBox
                  {...{ ...i, index: r, reel: reel, setReel: setReel }}
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

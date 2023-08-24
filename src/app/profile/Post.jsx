import React from "react";
import { BiCloset, BiSmile } from "react-icons/bi";
import { BsBookmark, BsSend } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { HiHeart } from "react-icons/hi";
import { LuMessageCircle, LuSend } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { RiBookMarkLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export default function Post({ post, setPost }) {
  return (
    <>
      <div
        className="flex justify-center items-center absolute left-0 bg-[rgba(0,0,0,0.6)] z-30 h-screen w-screen"
        style={{
          top: window.scrollY + "px",
        }}
      >
        <div className="absolute top-3 right-3" onClick={() => setPost(null)}>
          <MdClose className="text-white text-4xl" />
        </div>

        <div className="bg-white flex justify-center items-center w-3/4 h-[95%]">
          <div className="w-1/2 h-full border-r">
            <img src={post} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="w-1/2 h-full">
            {
              <div className="flex justify-between my-1 p-5 items-center">
                <div className="flex gap-3 items-center justify-center">
                  <div className="">
                    <img
                      src={"/assets/profile.png"}
                      className="rounded-full h-[3.3rem] w-[3.3rem] border-2 border-white"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{"pranavshilavane"}</p>
                    <p className="text-stone-700">Lonavala</p>
                  </div>
                </div>
              </div>
            }
            <hr />
            {
              <div className="flex justify-between my-1 p-5 items-center">
                <div className="flex gap-3 items-center justify-center">
                  <div className="">
                    <img
                      src={"/assets/profile.png"}
                      className="rounded-full h-[2.9rem] w-[3.9rem] border-2 border-white"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="text-justify">
                      <span className="font-semibold">
                        {"pranavshilavane "}
                      </span>
                      New post by me. The world is so beautiful, we just have to
                      open our ees to see ite beauty...
                    </p>
                  </div>
                </div>
              </div>
            }
            <div className="p-5 px-20 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem perspiciatis doloribus incidunt facilis? Natus, nam
              corporis laborum ratione labore, maxime laudantium blanditiis
              placeat similique temporibus quisquam ipsa, quae nobis dicta
              quisquam ipsa, quae nobis dicta magnam voluptate ipsum quia
              necessitatibus expedita repellat? Vero recusandae neque unde vel,
              reprehenderit nisi similique laborum pariatur consequatur ratione
              velit sunt iure? Alias, dolores! Nisi doloribus quibusdam ratione
              velit sunt iure? Alias, dolores! Nisi doloribus quibusdam
              voluptatibus m. Labore cupiditate cumque ducimus, tempora
              dignissimos eos.
            </div>

            <hr />

            <div className="p-5 flex justify-between items-center">
              <p className="flex items-center gap-3">
                <HiHeart className="text-3xl" />
                <LuMessageCircle className="text-2xl" />
                <LuSend className="text-2xl" />
              </p>
              <p className="flex gap-1 items-center">
                <BsBookmark className="text-2xl" />
              </p>
            </div>
            <hr />
            <div className="p-5 flex gap-3 items-center">
              <BiSmile className="text-3xl" />
              <input
                type="text"
                autoFocus
                placeholder="Add a comment"
                className="border-b w-full py-2 px-2 outline-none border-slate-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

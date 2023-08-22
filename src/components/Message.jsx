import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function Message() {
  const Box = () => {
    return (
      <>
        <div className="flex justify-start items-center gap-3 mb-5">
          <div>
            <img
              src="/assets/profile.png"
              alt=""
              className="h-14 w-14 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold">pranavshilavane</p>
            <p className="text-xs pt-1 pb-2.5">Liked a message . 2d</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="w-full h-screen flex ml-10">
        <div>
          <div className="h-full w-[25rem] border-r-2 p-7 pt-9 overflow-y-scroll">
            <div className="flex justify-between items-center">
              <p className="flex items-center text-xl font-bold">
                <span>pranavshilavane &nbsp;</span>
                <BsChevronDown className="mt-2 text-sm" />
              </p>
              <FiEdit className="text-2xl" />
            </div>
            <div className="flex justify-between mt-6">
              <span className="font-bold">Message</span>
              <span>Request</span>
            </div>
            <div className="mt-6">
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </div>

        <div className="h-full w-full">
          <div className="flex justify-center h-full w-full items-center flex-col">
            <div>
              <img src="/assets/messages.png" className="h-36" alt="" />
            </div>
            <div className="text-center">
              <p className="text-xl">Your messages</p>
              <span className="text-sm block mt-2 text-slate-600">
                Send private photos and messages to a friend or group
              </span>
              <button className="bg-sky-500 text-white px-4 py-1.5 mt-2 rounded-lg text-sm font-semibold">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

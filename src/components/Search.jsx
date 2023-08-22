import React from "react";

export default function Search() {
  return (
    <>
      <div
        className="absolute z-30 top-0 left-[4.5rem] h-screen w-[395px] rounded-tr-2xl rounded-br-2xl border-l-2 bg-white"
        style={{
          boxShadow: "13px 0 30px 1px #e3e3e3",
        }}
      >
        <div className="p-6">
          <p className="text-2xl font-semibold">Search</p>
          <input
            type="search"
            className="outline-none mt-12 w-full py-2 px-2 rounded-md bg-stone-200"
            placeholder="Search"
          />
        </div>
        <hr />

        <div className="p-6 w-full">
          <p className="text-base font-semibold">Recent</p>
        </div>
        <div className="mt-28 text-center">
          <p>No recent searches</p>
        </div>
      </div>
    </>
  );
}

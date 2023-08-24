import React from "react";
import { Link } from "react-router-dom";
import story from "../data/story.json";

export default function Peoples() {
  const Card = ({ instagram_id, image }) => {
    return (
      <div className="flex justify-between my-3 items-center">
        <div className="flex gap-3 items-center justify-center">
          <div className="">
            <img
              src={image}
              className="rounded-full h-[3.3rem] w-[3.3rem] border-2 border-white"
            />
          </div>
          <div className="text-sm">
            <p className="font-semibold">{instagram_id}</p>
            <p className="text-stone-700">followed by star, pranav, abc</p>
          </div>
        </div>
        <div>
          <p className="text-blue-600 text-sm">Follow</p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen hidden lg:block min-w-[28rem] overflow-hidden pl-5">
      <div className="pt-12 w-[21rem]">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 justify-center items-center">
            <img
              src="/assets/profile.png"
              className="rounded-full h-[3.4rem] w-[3.4rem] border-2 border-white"
            />

            <Link to={"/profile"}>
              <p className="text-sm font-semibold">{"pranavshilavane"}</p>
              <p className="text-[0.9rem] text-stone-600 font-light">
                Pranav Shilavane
              </p>
            </Link>
          </div>
          <div>
            <p className="text-blue-600 text-xs font-semibold tracking-wide">
              Switch
            </p>
          </div>
        </div>

        <div className="flex justify-between my-4 mt-6">
          <p className="text-sm text-stone-500 font-semibold">
            Suggested for you
          </p>
          <Link className="text-xs font-semibold">See All</Link>
        </div>

        <div className="">
          {story.map((m) => {
            return <Card key={m.id} {...m} />;
          })}
        </div>
      </div>
    </div>
  );
}

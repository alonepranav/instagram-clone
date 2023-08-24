import React from "react";
import Story from "./Story";
import Peoples from "./Peoples";
import posts from "../data/home_posts.json";
import Posts from "./Posts";

export default function HomeSection() {
  return (
    <>
      <div className="w-full h-full ml-12">
        <Story />
        <div className="flex flex-col justify-center items-center mt-12 ml-10">
          {[...posts].map((n) => {
            return <Posts key={n.id} {...n} />;
          })}
        </div>
      </div>
      <Peoples />
    </>
  );
}

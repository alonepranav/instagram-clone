import React from "react";
import story from "../data/story.json";

export default function Story() {
  const Box = ({ instagram_id }) => {
    return (
      <>
        <div>
          <div className="flex justify-center items-center instagram_background_gradient rounded-full w-[3.8rem] h-[3.8rem]">
            <img
              src="/assets/profile.png"
              className="rounded-full h-[3.6rem] w-[3.6rem] border-2 border-white"
            />
          </div>
          <p className="mt-1.5 text-sm">{instagram_id.substring(0, 9)}...</p>
        </div>
      </>
    );
  };

  return (
    <div className="inline py-12 w-full">
      <div className="flex justify-center gap-3 flex-wrap w-full mt-12">
        {story.map((r) => {
          return <Box key={r.id} {...r} />;
        })}
      </div>
    </div>
  );
}

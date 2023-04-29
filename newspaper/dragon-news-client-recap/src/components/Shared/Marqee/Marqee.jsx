import React from "react";
import Marquee from "react-fast-marquee";

const Marqee = () => {
  return (
    <>
      <div className="flex items-center gap-4 bg-gray-200 py-3 px-3 rounded-md my-7">
        <button className="px-6 py-2 text-lg bg-red-400">Latest</button>
        <Marquee className="font-semibold" gradient>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </>
  );
};

export default Marqee;

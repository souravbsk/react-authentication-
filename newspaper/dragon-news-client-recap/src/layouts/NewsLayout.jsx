import React from "react";
import { Outlet } from "react-router-dom";
import RightSide from "../components/Shared/RightSide/RightSide";
import Header from "../components/Shared/Header/Header";

const NewsLayout = () => {
  return (
    <div className='max-w-full w-10/12 mx-auto'>
    <Header></Header>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <Outlet></Outlet>
        </div>
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsLayout;

import React from "react";
import imageOne from "../../assets/assets/editorsInsight1.png";
import imageTwo from "../../assets/assets/editorsInsight2.png";
import imageThree from "../../assets/assets/editorsInsight3.png";
import { FaCalendar } from "react-icons/fa";
import moment from "moment/moment";
const EditorCard = () => {
  return (
    <> 
      <div className="border p-3 rounded-md">
  
          <img className="h-32  w-full rounded" src={imageOne} alt="" />
        <h2 className="text-xl font-semibold text-black">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
      
          <p className="flex items-center gap-2 mt-5">
            <FaCalendar></FaCalendar> <span>{moment().format("MMM D, Y")}</span>
          </p>
    
      </div>
      <div className="border p-3 rounded-md">
          <img className="h-32  w-full rounded" src={imageTwo} alt="" />
        <h2 className="text-xl font-semibold text-black">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
      
          <p className="flex items-center gap-2 mt-5">
            <FaCalendar></FaCalendar> <span>{moment().format("MMM D, Y")}</span>
          </p>
    
      </div>
      <div className="border p-3 rounded-md">
          <img className="h-32  w-full rounded" src={imageThree} alt="" />
        <h2 className="text-xl font-semibold text-black">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
      
          <p className="flex items-center gap-2 mt-5">
            <FaCalendar></FaCalendar> <span>{moment().format("MMM D, Y")}</span>
          </p>
    
      </div>
    </>
  );
};

export default EditorCard;

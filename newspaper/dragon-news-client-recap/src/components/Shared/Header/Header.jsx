import React from "react";
import imgLogo from "../../../assets/assets/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <nav className="max-w-full w-10/12 mx-auto my-12">
      <div className="text-center">
        <img className="max-w-full w-2/8 mx-auto" src={imgLogo} alt="" />
        <p>
          <small className="text-base">Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY,")}</p>
      </div>
      
    </nav>
  );
};

export default Header;

import React from "react";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("log out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center justify-center mx-auto">
          <li className="ms-5">
            <Link
              className="text-lg font-semibold
            "
              to="/news/0"
            >
              Home
            </Link>
          </li>
          <li className="ms-5">
            <Link
              className="text-lg font-semibold
            "
              to="/"
            >
              About
            </Link>
          </li>
          <li className="ms-5">
            <Link
              className="text-lg font-semibold
            "
              to="/"
            >
              Career
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />

              <button
                onClick={handleLogout}
                className="px-5 rounded bg-gray-700 text-white py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <FaUserCircle className="text-3xl"></FaUserCircle>
              <Link to="/login">
                <button className="px-5 rounded bg-gray-700 text-white py-2">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

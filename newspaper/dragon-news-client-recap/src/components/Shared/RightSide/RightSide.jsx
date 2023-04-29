import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../../Pages/QZone/QZone";
import rightBanner from "../../../assets/assets/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const RightSide = () => {
  const {handleGoogleSignIn} = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login With</h2>
      <div className="space-y-4">
        <button onClick={handleGoogleSignIn} className="bg-white w-full hover:bg-gray-100 hover:text-gray-700 text-gray-700 font-semibold py-4 bg-transparent px-4 border border-gray-400 rounded shadow">
          <div className="flex gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
              id="google"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            <span>Sign in with Google</span>
          </div>
        </button>
        <button className="bg-white w-full hover:bg-gray-100 hover:text-gray-700 text-gray-700 font-semibold py-3 bg-transparent px-4 border border-gray-400 rounded shadow">
          <div className="flex gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              className="w-8"
              viewBox="0 0 24 24"
              id="github"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
            <span>Sign in with Github</span>
          </div>
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
        <ul className="border rounded-md divide-y">
          <li className="flex items-center gap-3 p-4">
            <span className="bg-slate-100 text-blue-900 text-sm font-thin px-3 rounded-full py-3">
              <FaFacebookF></FaFacebookF>
            </span>{" "}
            <span>Facebook</span>
          </li>
          <li className="flex items-center gap-3 p-4">
            <span className="bg-slate-100 text-cyan-300 text-sm font-thin px-3 rounded-full py-3">
              <FaTwitter></FaTwitter>
            </span>{" "}
            <span>Twitter</span>
          </li>
          <li className="flex items-center gap-3 p-4">
            <span className="bg-slate-100 text-red-400 text-sm font-thin px-3 rounded-full py-3">
              <FaInstagram></FaInstagram>
            </span>{" "}
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className="mt-10 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>
        <QZone></QZone>
      </div>
      <div className="mt-10 relative">
        <img className="w-full" src={rightBanner} alt="" />
        <div className="text-white px-8 text-center absolute  top-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold">Create an Amazing Newspaper</h1>
          <p className="mt-6">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn bg-red-600 rounded-none mt-5 text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

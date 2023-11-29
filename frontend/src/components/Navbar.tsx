import React, { useState } from "react";
import logoImage from "../asset/Rectangle 5.png";
import Membertypepopup from "./Membertypepopup";
function Navbar() {
  const [showpop,setshowpop] =useState(false)
  const [isToggled, setToggled] = useState(false);
  const handleClose = () => setshowpop(false)
  const Toggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className=" p-2 bg-red-600 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="T10 SPORT Logo" className="h-8 w-8" />
          <h1 className="text-2xl text-white font-bold ml-2">T10 SPORT</h1>
        </div>
        <button id="menu-toggle" className="text-white" onClick={Toggle}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <Membertypepopup open={showpop} onClose={handleClose} />
      {isToggled ? (
        <ul className="absolute flex-col z-10 justify-end items-end bg-white w-56 h-auto space-y-2 right-0 top-12">
          <li className=" p-3 hover:bg-gray-500">
            <a
              href="#"
              className=" text-black hover:text-gray-100 hover:text-xl duration-200 font-semibold"
            >
              Playground
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-500">
            <a
              href="#"
              className="text-black hover:text-gray-100 hover:text-xl duration-200 font-semibold"
            >
              Trainer
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-500">
            <a
              href="#"
              className="text-black hover:text-gray-100  hover:text-xl duration-200 font-semibold"
            >
              Fitness
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-500">
            <a
             href="#"
              className="text-yellow-500 hover:text-gray-100  hover:text-xl duration-200 font-semibold"
              onClick={() => setshowpop(true)}
            >
              Premium
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Navbar;

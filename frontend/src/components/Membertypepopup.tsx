import React from "react";
import logo from "../asset/Rectangle 5.png";



export default function Membertypepopup({ open,onClose }: {open : React.ReactNode,onClose :React.MouseEventHandler<HTMLAnchorElement>}) {
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-30">
      <div className="w-[1000px] h-[700px] left-[-2px] top-1 bg-black relative rounded-lg shadow-black shadow-xl" />
      <img
        src={logo}
        alt="Logo"
        className="absolute top-60 w-32 h-24   object-contain"
      />
      <p className="text-yellow-500 absolute text-4xl  top-1/3">
        P R E M I U M
      </p>
      <p className="w-full h-24 mb-5 absolute bottom-2/4  text-lg text-center text-white">
        <span className="  ">Subscribe to Premium</span>
        <br />
        <span className="">to get access to unlimited high</span>
      </p>
      <div className="flex flex-wrap absolute bottom-[370px] gap-5" >
        <button
          type="button"
          className=" text-black shadow-inner shadow-yellow-300  bg-white hover:bg-white-800 focus:ring-4 focus:ring-yellow-500 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 h-36 w-72 focus:outline-none "
        >
          <p></p>
        </button>
        <button
          type="button"
          className=" text-black shadow-inner shadow-yellow-300  bg-white hover:bg-white-800 focus:ring-4 focus:ring-yellow-500 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 h-36 w-72 focus:outline-none "
        >
          <p></p>
        </button>
      </div>
      <button
          type="button"
          className=" absolute text-white text-xl bg-black hover:bg-white-800 border-solid border-yellow-200 border-2  rounded-full px-3 py-1.5 mr-2 mb-2 top-2/3 focus:outline-none "
        >
          <p>CONTINUE</p>
        </button>
        <a href='#'className="absolute text-white text-xl bottom-1/4 underline underline-offset-3" onClick={onClose}>NO,THANK</a>
    </div>
  
  );
}


import React from "react";
import servicearea from "../asset/Rectangle128.png";
import fitnessmachine from "../asset/Rectangle131.png";
import PersonalTraining from "../asset/Rectangle127.png";
import Equipment from "../asset/Rectangle126.png";

function LinkMenu() {
  return (
    <div className="container mx-auto p-12">
      <div className="flex flex-wrap justify-between items-center">
        <a href="#" className="group relative flex flex-col items-center">
          <img className="relative brightness-50 group-hover:filter group-hover:blur-md transition-all duration-100" src={servicearea} alt="Image" />
          <h1 className="absolute bottom-1/2 text-white font-bold text-3xl group-hover:text-4xl duration-200">
            Service area
          </h1>
        </a>
        <a href="#" className="group relative flex flex-col items-center">
          <img className="relative brightness-50 group-hover:filter group-hover:blur-md transition-all duration-100" src={Equipment} alt="Image" />
          <h1 className="absolute bottom-1/2 text-white font-bold text-3xl group-hover:text-4xl duration-200">
            Equipment
          </h1>
        </a>
        <a href="#" className="group relative flex flex-col items-center ">
          <img className="relative brightness-50 group-hover:filter group-hover:blur-md transition-all duration-100" src={fitnessmachine} alt="Image" />
          <h1 className="absolute bottom-1/2 text-white font-bold text-3xl group-hover:text-4xl duration-200">
            Fitness Machine
          </h1>
        </a>
        <a href="#" className="group relative flex flex-col items-center">
          <img className="relative brightness-50 group-hover:filter group-hover:blur-md transition-all duration-100" src={PersonalTraining} alt="Image" />
          <h1 className="absolute bottom-1/2 text-white font-bold text-3xl group-hover:text-4xl duration-200">
            Personal Training
          </h1>
        </a>
      </div>
    </div>
  );
}

export default LinkMenu;

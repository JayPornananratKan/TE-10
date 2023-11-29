import React from "react";
import back from "../asset/Rectangle124.png";

function Introduce() {
  return (
    <div className=" relative ">
      <img title="fitness"className="w-full object-cover brightness-75" src={back} />
      <div className="absolute bottom-2/4 left-32">
        <div className="text-white text-6xl font-bold">
          SPORTS AND HEALTH CENTER
        </div>
        <div className="mt-4 text-white text-base">
          <p>การออกกำลังกายไม่ได้เพียงแค่ทำให้ร่างกายแข็งแรงขึ้นแต่ยังทำให้จิตใจเต็มไปด้วยพลังมุ่งไปสู่เป้าหมายของคุณด้วยการฝึก</p>
          <p>ออกกำลังกายทุกวันมาเริ่มต้นก้าวแรกของคุณวันนี้!!</p> 
        </div>
      </div>
    </div>
  );
}

export default Introduce;

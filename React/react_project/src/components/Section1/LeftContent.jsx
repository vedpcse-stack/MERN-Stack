import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';


const LeftContent = () => {
  
  return (
    <div className="flex flex-col justify-between h-110 w-1/4 ">
      <div className="upperText text-shadow-2xl">
        <div className="text-[33px] font-bold flex flex-col">
          <p>Prospective</p>
          <p className="bg-gray-200 ps-0.5 rounded-full w-fit">Customer</p>
          <p >Segmentation</p>
        </div>
        <div className="mt-5 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam optio veniam ut animi sit placeat doloremque quae, tempora rerum nulla 
        </div>
      </div>

      <div className="mt-20"><i class="ri-arrow-right-up-line text-6xl cursor-pointer"></i></div>
    </div>
  );
};

export default LeftContent;

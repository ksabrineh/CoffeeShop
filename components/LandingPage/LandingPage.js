import Image from "next/image";
import React from "react";
import CoffeeImage from "@/public/Images/transparent-coffee-cup-coffee-cup-with-heart-design-and-roses65930f17a76267.4562058017041364716856-removebg-preview.png";
import { CoffeeOutlined, EmojiFoodBeverageOutlined, SportsBarOutlined, WineBarOutlined } from "@mui/icons-material";
const LandingPage = () => {
  return (
    <div className="flex justify-center w-full pl-20 pr-20 pt-20">
      <div className="flex w-[40%] ">
        <Image alt="coffee photo" src={CoffeeImage} />
      </div>
      <div className="flex flex-col items-end w-[60%]">
        <div className="flex pb-20 text-7xl text-orange-950 font-bold flex-col w-full items-end">
          <div>Coffee</div>
          <div>The Best For You</div>
        </div>
        <div className="flex flex-row w-44 cursor-pointer shadow-md bg-orange-950 rounded-full items-center justify-center">
          <div className=" text-white p-2 flex justify-center items-center">
            <div>view menu</div>
          </div>
        </div>
        <div className="flex flex-row-reverse pt-10 gap-8 text-orange-950">
            <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer"><CoffeeOutlined/></div>
            <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer"><WineBarOutlined/></div>
            <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer"><EmojiFoodBeverageOutlined/></div>
            <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer"><SportsBarOutlined/></div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;

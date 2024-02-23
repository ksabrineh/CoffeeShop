import { LocalCafeOutlined } from "@mui/icons-material";
import React from "react";

const MenuBarPage = () => {
  return (
    <div className="flex justify-between pt-10 pl-20 pr-20 w-full items-center">
      <div className="flex text-xs text-orange-950 justify-between w-[50%] items-center">
        <div className="bg-orange-950 cursor-pointer text-white rounded-full p-2">
          Coffee Shop
        </div>
        <div className="cursor-pointer">Contact Us</div>
        <div className="cursor-pointer">About Us</div>
        <div className="cursor-pointer">Coffee Menu</div>
        <div className="flex flex-col cursor-pointer">
          <div>Home</div>
          <div className="bg-orange-950 w-full h-[2px] opacity-50"></div>
        </div>
      </div>
      <div className="flex flex-col text-orange-950 w-[50%] items-end">
        <div className="flex">
          <div>
            <LocalCafeOutlined/>
          </div>
          <div className="font-bold text-lg">Sabrineh</div>
        </div>
        <div className="text-xs">Wake Up to Something Special</div>
      </div>
    </div>
  );
};

export default MenuBarPage;

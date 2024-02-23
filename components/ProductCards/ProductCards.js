import Image from "next/image";
import React from "react";
import CoffeeImage1 from "@/public/Images/isolated-coffee-latte-top-view-in-a-mug-free-png (1).png";
import CoffeeImage2 from "@/public/Images/isolated-coffee-latte-top-view-in-a-mug-free-png.png";

import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
const ProductCards = () => {
  return (
    <div className="w-full pl-20 flex pr-20 pt-20">
      <div className="w-[40%]">
        <div className="flex pb-20 text-orange-950 flex-col items-end w-full">
          <div className="text-4xl font-bold">Lorem Ipsum is</div>
          <div className="text-4xl pb-10 font-bold">simply dummy text of</div>
          <div className="text-left pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </div>
          <div className="flex flex-row w-44 cursor-pointer shadow-md bg-orange-950 rounded-full items-center justify-center">
            <div className=" text-white p-2 flex justify-center items-center">
              <div>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] pr-20">
        <div className="flex w-full items-center justify-around">
          <div className="p-2 bg-white bg-opacity-50 rounded-3xl w-64 h-64">
            <div className="relative bg-black">
              <Image
                alt="coffee photo"
                src={CoffeeImage2}
                className="absolute w-40 h-40 object-contain -top-20 right-10"
              />
            </div>
            <div className="text-2xl text-left font-bold pt-20 pl-2 text-orange-950">
              Lorem Ipsum is
            </div>
            <div className="text-left pb-5 text-orange-950 pl-2">
              Lorem Ipsum is simply dummy
            </div>
            <div className="flex w-full text-orange-950 justify-around pl-16 pr-16 pt-2">
              <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer">
                <FavoriteBorderOutlined />
              </div>
              <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer">
                <ShoppingCartOutlined />
              </div>
            </div>
            <div className="flex justify-center items-center pt-7 text-white">
              <div className="bg-orange-950 w-20 h-7 rounded-md p-2 flex justify-center items-center">
                <p>$15</p>
              </div>
            </div>
          </div>
          <div className="p-2 bg-white bg-opacity-50 rounded-3xl w-64 h-64">
            <div className="relative bg-black">
              <Image
                alt="coffee photo"
                src={CoffeeImage1}
                className="absolute w-40 h-40 object-contain -top-20 right-10"
              />
            </div>
            <div className="text-2xl text-left font-bold pt-20 pl-2 text-orange-950">
              Lorem Ipsum is
            </div>
            <div className="text-left pb-5 text-orange-950 pl-2">
              Lorem Ipsum is simply dummy
            </div>
            <div className="flex w-full text-orange-950 justify-around pl-16 pr-16 pt-2">
              <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer">
                <FavoriteBorderOutlined />
              </div>
              <div className="p-2 bg-white bg-opacity-50 rounded-xl cursor-pointer">
                <ShoppingCartOutlined />
              </div>
            </div>
            <div className="flex justify-center items-center pt-7 text-white">
              <div className="bg-orange-950 w-20 h-7 rounded-md p-2 flex justify-center items-center">
                <p>$15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;

import React from "react";
import CoffeeImage from "@/public/Images/transparent-coffee-cup-coffee-cup-with-heart-design-and-roses65930f17a76267.4562058017041364716856-removebg-preview.png";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="w-full pt-10 flex justify-around items-center pl-20 pr-20">
      <div className="w-[50%]">
        <div className="flex pb-20 text-orange-950 flex-col items-end w-full">
          <div className="text-4xl font-bold">
            Lorem Ipsum is simply dummy text
          </div>
          <div className="text-4xl pb-10 font-bold text-left">
            simply dummy text of the printing typesetting industry
          </div>
          <div className="text-left pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industryLorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industryLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry
          </div>
          <div className="flex flex-row w-44 cursor-pointer shadow-md bg-orange-950 rounded-full items-center justify-center">
            <div className=" text-white p-2 flex justify-center items-center">
              <div>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center pr-10">
        <div className="relative w-full">
          <Image alt="coffee photo" src={CoffeeImage} />
          <div className="absolute w-20 font-bold text-xl h-20 p-2 top-10 right-20 bg-white bg-opacity-80 text-orange-950 flex justify-center items-center rounded-3xl">
            $2.50
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

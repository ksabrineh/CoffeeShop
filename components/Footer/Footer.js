import { LocalCafeOutlined } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row-reverse justify-around w-full pb-10">
      <div className="flex flex-col text-white items-end">
        <div className="flex">
          <div>
            <LocalCafeOutlined />
          </div>
          <div className="font-bold text-xl">Flovered</div>
        </div>
        <div className="text-xs">Wake Up to Something Special</div>
      </div>
      <div className="flex flex-col items-end text-orange-950 gap-2">
        <div className="text-xl font-bold">Our Services</div>
        <div className="cursor-pointer">Pricing</div>
        <div className="cursor-pointer">Tracking</div>
        <div className="cursor-pointer">Report a bug</div>
        <div className="cursor-pointer">Terms of Services</div>
      </div>
      <div className="flex flex-col items-end text-orange-950 gap-2">
        <div className="text-xl font-bold">Our Company</div>
        <div className="cursor-pointer">Pricing</div>
        <div className="cursor-pointer">Tracking</div>
        <div className="cursor-pointer">Report a bug</div>
        <div className="cursor-pointer">Terms of Services</div>
      </div>
      <div className="flex flex-col items-end text-orange-950 gap-2">
        <div className="text-xl font-bold">Address</div>
        <div className="cursor-pointer">Pricing</div>
        <div className="cursor-pointer">Tracking</div>
        <div className="cursor-pointer">Report a bug</div>
        <div className="cursor-pointer">Terms of Services</div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex w-full pl-20 pr-20 justify-between">
        <div className="w-[20%] pt-8">
          <div className="flex flex-row w-44 cursor-pointer shadow-md bg-orange-950 rounded-full items-center justify-center">
            <div className=" text-white p-2 flex justify-center items-center">
              <div>Contact Now</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] pt-2">
          <div className="text-white text-left">LETS TALK</div>
          <div className="text-5xl font-bold text-left text-orange-950 flex flex-row-reverse">
            Want to Rserve Table<div>?</div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white ml-20 mr-20 pt-5 mb-10 border-opacity-50"></div>
      <div className="text-left pb-20 pr-20 pl-20 w-full flex justify-end items-end text-orange-950">
        <div className="w-[70%]">Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry</div>

      </div>
    </>
  );
};

export default ContactUs;

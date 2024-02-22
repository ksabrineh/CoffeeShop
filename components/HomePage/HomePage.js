import React from "react";
import MenuBarPage from "../MenuBar/MenuBarPage";
import LandingPage from "../LandingPage/LandingPage";

const HomePage = () => {
  return (
    <div className="min-h-screen w-[90%] bg-white bg-opacity-50 rounded-3xl">
      <MenuBarPage />
      <LandingPage/>
    </div>
  );
};

export default HomePage;

import React from "react";
import MenuBarPage from "../MenuBar/MenuBarPage";
import LandingPage from "../LandingPage/LandingPage";
import ProductCards from "../ProductCards/ProductCards";
import AboutUsPage from "../AboutUs/AboutUsPage";
import ContactUs from "../ContactUs/ContactUs";

const HomePage = () => {
  return (
    <div className="min-h-screen w-[90%] bg-white bg-opacity-50 rounded-3xl">
      <MenuBarPage />
      <LandingPage/>
      <ProductCards/>
      <AboutUsPage/>
      <ContactUs/>
    </div>
  );
};

export default HomePage;

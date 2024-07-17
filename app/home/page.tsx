import React from "react";
import Image from "next/image";
import {IconCloudDemo} from "../_components/Skills"
import HeroSection from "../_components/HeroSection";
import  Contact from "../_components/Contact";
const HomePage = () => {
  return (
   <div>
    <HeroSection/>
    <IconCloudDemo/>
    {/* Projects */}
    {/* Testimonilas */}
    {/* Contact */}
    <Contact/>
    <div className="flex justify-center items-center rounded-full border-b-2"/>
   </div>
  );
};

export default HomePage;

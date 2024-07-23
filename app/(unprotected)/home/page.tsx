import React from "react";
import Image from "next/image";
import {IconCloudDemo} from "@/app/_components/Skills"
import HeroSection from "@/app/_components/HeroSection";
import  Contact from "@/app/_components/Contact";
import Project from "@/app/_components/projects/Project";
const HomePage = () => {
  return (
   <div>
    <HeroSection/>
    <IconCloudDemo/>
    {/* Projects */}
    <Project/>
    {/* Testimonilas */}
    {/* Contact */}
    <Contact/>
    <div className="flex justify-center items-center rounded-full border-b-2"/>
   </div>
  );
};

export default HomePage;

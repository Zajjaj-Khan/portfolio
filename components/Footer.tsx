import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full">
      <div className=" flex w-full justify-center items-center p-6">
        <div className="pr-6 cursor-pointer">
          <Link href={"https://github.com/Zajjaj-Khan"}>
            <FaGithub size={24} />
          </Link>
        </div>
        <div className="pr-6 cursor-pointer ">
          <Link href={"https://www.linkedin.com/in/zajjaj-bin-sana/"}>
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div className="pr-6 cursor-pointer ">
          <Link href={"https://www.youtube.com/@zajjajbin"}>
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-center items-center p-6">
        <p className="text-gray-400 text-sm">
          {" "}
          &copy; 2024 Zajjaj Bin Sana.All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

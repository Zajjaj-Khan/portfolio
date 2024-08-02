"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col-reverse mt-28 mx-8 p-5 lg:flex lg:flex-row">
      <div className="text-center justify-center items-center my-10 p-4 flex-row-reverse lg:text-left">
        <h1 className={`text-4xl ${poppins.className} py-8`}>
          Hey, I am Zajjaj
          <span className="ml-3 text-xl text-blue-300">/ża-j-ja-j/</span>
        </h1>
        <p className="text-slate-600 ">
          Welcome to my digital nook. I&apos;m a Full-Stack Developer and Computer
          Engineer from Pakistan. Here, I share what I&apos;ve been working on
          recently and things I&apos;ve learned along the way.For detailed
          information about my experience, please review my
        </p>
      </div>
      <div>
        <Image
          className="m-auto rounded-md border-gray-500 border-4 shadow-lg"
          src="/profile.jpeg"
          width={450}
          height={300}
          alt="Picture of the author"
          priority
        />
      </div>
    </div>
  );
}

export default HeroSection;

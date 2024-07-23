import React from 'react';
import Link from 'next/link';
import {  Poppins } from "@next/font/google";
import { MdKeyboardArrowRight } from "react-icons/md";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
  });
  
  
export default function Project() {
  return (
    <div className='w-full h-full opacity-75'>
    <div className="m-8 pl-8">
        <h1 className={`text-3xl font-extrabold ${poppins.className} `}>Projects</h1>
      <div className='flex flex-row pt-4 hover:text-blue-400 hover:underline hover:transition-all hover:delay-75'>
        <Link href="/projects">
        View All Projects
        <span> <MdKeyboardArrowRight/></span>
       

        </Link>
      </div>
    </div>
    </div>
  )
}

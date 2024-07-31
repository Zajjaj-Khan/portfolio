"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { useTheme  } from 'next-themes'
import { log } from "console";
interface StackProps {
  stack: any;
}

export default function Stack({ stack }: StackProps) {
    const {theme,setTheme}  = useTheme()
    let color;
    {theme === 'dark'?color='transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]':color="bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"}
  return <div className={cn(
    "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
    // animation styles
    "transition-all duration-200 ease-in-out hover:scale-[103%]",
  color)
  }>
    {stack.name}
  </div>;

}

"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Playfair_Display, Poppins } from "@next/font/google";
import { Button } from "./ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ThemeChanger from "./ThemeChanger";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = () => {
  return (
    <header className="">
      <div className=" mx-auto flex max-w-7xl items-center justify-between p-6  lg:px-8 ">
        <div className="flex">
          <div className={playfair.className}>
            <Link href="/">
              <h1 className="text-5xl font-black">ZS</h1>
            </Link>
          </div>
          <ul className="hidden md:flex my-4 mx-4">
            <li
              className={`mx-2 font-bold ${poppins.className} hover:text-blue-300`}
            >
              <Link href="/">Projects</Link>
            </li>
            <li
              className={`mx-2 font-bold ${poppins.className} hover:text-blue-300`}
            >
              <Link href="/">Skills</Link>
            </li>
            <li
              className={`mx-2 font-bold ${poppins.className} hover:text-blue-300`}
            >
              <Link href="/">Blogs</Link>
            </li>
            <li
              className={`mx-2 font-bold ${poppins.className} hover:text-blue-300`}
            >
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex my-4 mx-4">
          <div className="mx-1">
            <Button size="sm" variant="outline">
              <ThemeChanger />
            </Button>
          </div>
          <div className="hidden md:inline mx-1 ">
            <Button size="sm" variant="outline">
              Sign In
            </Button>
          </div>
          <div className="flex md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button size="sm" variant="outline">
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 mx-3 p-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <ul>
                      <li
                        className={`mx-2 font-bold hover:opacity-75 ${poppins.className}`}
                      >
                        <Link href="/">Project</Link>
                      </li>
                      <li
                        className={`mx-2 font-bold  hover:opacity-75 ${poppins.className}`}
                      >
                        <Link href="/">Skill</Link>
                      </li>
                      <li
                        className={`mx-2 font-bold hover:opacity-75 ${poppins.className}`}
                      >
                        <Link href="/">Blogs</Link>
                      </li>
                      <li
                        className={`mx-2 font-bold hover:opacity-75 ${poppins.className}`}
                      >
                        <Link href="/">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

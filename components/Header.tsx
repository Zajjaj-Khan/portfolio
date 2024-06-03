"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Playfair_Display, Poppins } from "@next/font/google";
import { Button } from "./ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex">
          <div className={playfair.className}>
            <h1 className="text-5xl font-black">ZS</h1>
          </div>
          <ul className="hidden md:flex my-4 mx-4">
            <li className={`mx-2 font-bold ${poppins.className}`}>
              <Link href="/">Projects</Link>
            </li>
            <li className={`mx-2 font-bold ${poppins.className}`}>
              <Link href="/">Skills</Link>
            </li>
            <li className={`mx-2 font-bold ${poppins.className}`}>
              <Link href="/">Blogs</Link>
            </li>
            <li className={`mx-2 font-bold ${poppins.className}`}>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex my-4 mx-4">
          <div className="mx-1">
            <Button size="sm" variant="outline">
              <ThemeChanger/>
            </Button>
          </div>
          <div className="hidden md:inline mx-1 ">
            <Button size="sm" variant="outline">
              Sign In
            </Button>
          </div>
          <div className="flex md:hidden">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center ">
        <DialogPanel className="w-[100%] h-full bg-black">
          <DialogTitle>Deactivate account order</DialogTitle>

          {/* ... */}
        </DialogPanel>
      </div>
    </Dialog>
    </header>
  );
};

export default Header;

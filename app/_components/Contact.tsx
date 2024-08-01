import { Button } from "@/components/ui/button";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
function Contact() {
  return (
    <div className="text-center  p-4 pl-8 lg:flex m-8 mx-24 lg:p-8 border-gray-400  rounded-lg shadow-2xl bg-gradient-to-r from-[#3a6186] to-[#89253e]">
      <div className="lg:flex-1">
        <h1
          className={`text-2xl lg:p-2 lg:ml-12 font-bold ${poppins.className} text-white`}
        >
        Let's Build Something Amazing Together!
        </h1>
      </div>
      <div className="mt-4 lg:flex-3 lg:mt-0">
        <Button className="md:px-8 bg-white text-black font-bold hover:bg-gray-400 ">
          <Link href="/contact"> Contact</Link>
         
        </Button>
      </div>
    </div>
    
  );
}

export default Contact;

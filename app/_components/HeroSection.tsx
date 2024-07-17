import React from 'react'
import Image from "next/image";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});


function HeroSection() {
  return (
    <div className="flex flex-col-reverse  mx-8 p-5 lg:flex lg:flex-row">
      <div className="text-center justify-center items-center my-10 p-4 flex-row-reverse lg:text-left">
        <h1 className={`text-4xl ${poppins.className} py-8`}>Hey, I am Zajjaj
        <span className='ml-3 text-xl text-blue-300'>/ża-j-ja-j/</span>
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam
        ratione voluptatibus sit tenetur iste cumque dolores dicta, repellendus
        autem accusantium distinctio veritatis vero labore asperiores quae est
        velit nam.
        </p>
      </div>
      <div>
        <Image
          className="m-auto rounded-md border-gray-500 border-4 shadow-lg"
          src="/profile.jpeg"
          width={450}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default HeroSection
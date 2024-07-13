import React from 'react'
import Image from "next/image";
function HeroSection() {
  return (
    <div className="flex flex-col-reverse  mx-8 p-5 lg:flex lg:flex-row">
      <div className="text-center justify-center items-center my-10 p-4 flex-row-reverse lg:text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ullam
        ratione voluptatibus sit tenetur iste cumque dolores dicta, repellendus
        autem accusantium distinctio veritatis vero labore asperiores quae est
        velit nam.
      </div>
      <div>
        <Image
          className="m-auto rounded-md border-gray-500 border-4"
          src="/profile.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default HeroSection
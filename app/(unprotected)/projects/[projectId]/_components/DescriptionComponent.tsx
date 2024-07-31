import React from "react";

interface DescriptionProp {
  description: any;
}

export default function DescriptionComponent({ description }: DescriptionProp) {
  return (
    <div className="border-b-2 py-6 px-4 md:border-0 ">
      <p className="text-center md:text-left text-pretty font-normal leading-loose  ">{description}</p>
    </div>
  );
}

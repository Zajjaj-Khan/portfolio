import React from "react";

interface TitleProp {
  title: string | undefined;
}

export default function TitleComponent({ title }: TitleProp) {
  return (
    <div className="md:py-2 md:px-4">
      <h2 className="text-center md:text-left text-4xl font-bold ">{title}</h2>
    </div>
  );
}

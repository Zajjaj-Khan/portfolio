import React from "react";
import { Badge } from "@/components/ui/badge";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";

function MobileDev() {
  return (
    <div className="pt-4 md:p-8 md:pt-0">
      <Badge variant="secondary" className="px-6 py-2 my-2">
        React Native
        <TbBrandReactNative size={20} className="ml-2" color="cyan" />
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">
        Expo
        <SiExpo size={20} className="ml-2" />
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">
        Native Wind
        <RiTailwindCssLine size={20} className="ml-2" color="cyan" />
      </Badge>
    </div>
  );
}

export default MobileDev;

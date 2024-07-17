import React from 'react'
import { Badge } from "@/components/ui/badge"
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
function FrontendDev() {
  return (
    <div className="pt-4 md:p-8 md:pt-0">
      <Badge variant="secondary" className="px-6 py-2 my-2">ReactJs
      <FaReact size={20} className="ml-2" color='cyan'/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">NextJS
      <SiNextdotjs size={20} className="ml-2"/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Tailwind
      <RiTailwindCssFill size={20} className="ml-2" color='cyan'/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Bootstrap
      <FaBootstrap size={20} className="ml-2" color='purple'/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Css
      <FaCss3Alt size={20} className="ml-2" color='blue'/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Html
      <FaHtml5 size={20} className="ml-2" color='orange'/>
      </Badge>
      </div>
  )
}

export default FrontendDev
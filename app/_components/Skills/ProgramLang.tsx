import React from 'react'
import { Badge } from "@/components/ui/badge"
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
function ProgramLang() {
  return (
    <div className="pt-4 md:p-8 md:pt-0">
      <Badge variant="secondary" className="px-6 py-2 my-2">Javascript
      <IoLogoJavascript size={20} color="yellow" className="ml-2"/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Typescript
      <SiTypescript size={20} color="blue" className="ml-2"/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Python
      <FaPython size={20} color="orange" className="ml-2"/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">C++
      <SiCplusplus size={20} className="ml-2"/>
      </Badge>
      </div>
  )
}

export default ProgramLang
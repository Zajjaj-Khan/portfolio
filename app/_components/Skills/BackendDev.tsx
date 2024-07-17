import React from 'react'
import { Badge } from "@/components/ui/badge"
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
function BackendDev() {
  return (
    <div className="pt-4 md:p-8 md:pt-0">
      <Badge variant="secondary" className="px-6 py-2 my-2">NodeJS
      <FaNodeJs size={20} className="ml-2" color='green'/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">ExpressJs
      <SiExpress size={20} className="ml-2"/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">ElectronJs
      <IoLogoElectron size={20} className="ml-2" color='cyan'/>
      </Badge>
      <Badge variant="secondary" className="px-6 py-2 my-2 mx-1">Django
      <SiDjango size={20} className="ml-2" color='green'/>
      </Badge>
      </div>
  )
}

export default BackendDev
import React from 'react'
import { LuTerminalSquare } from "react-icons/lu";

interface ProjectItemProps {
    title?: any;
    tagline?: any;
    date?: string;
  }


export default function ProjectItem({title,tagline,date}:ProjectItemProps) {
  return (
    <div className='mx-32 py-6 border my-4 rounded-lg shadow-xl hover:shadow-2xl hover:cursor-pointer'>
      <div className='flex px-2'>
      <LuTerminalSquare size={32}/>
      <div className=' flex mt-1 ml-4'>
      <h2 className='font-semibold'>{title}</h2>
      </div>
      </div>
      <div className='flex justify-between'>
        <p className='text-sm px-14 font-extralight '>{tagline}</p>
        <p className='text-sm px-14 font-extralight '>{date}</p>
        </div>
     
    </div>
  )
}

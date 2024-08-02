import React from 'react'
interface StackList{
    stacks:any;
}
export default function MobileStackList({stacks}:StackList) {
   
  return (
    <div className='mb-8'>
        <h3 className='text-lg font-bold py-4'>Tech Stack Used</h3>
        {
            stacks.map((stack:any)=>(
                <ul key={stack.id}>
                    <li >{stack.name}</li>
                </ul>
            ))
        }
    </div>
  )
}

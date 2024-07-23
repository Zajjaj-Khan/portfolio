"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useUser } from "@clerk/clerk-react";
export default function page() {
    const {user,isSignedIn} = useUser();
    const userId  = user?.primaryEmailAddress?.emailAddress;
    console.log(userId)
    let owner;
     if(userId==="kzajjaj@gmail.com" ){
          owner = true;
     }else{
        owner = false;
     }
   
     {if(!isSignedIn || isSignedIn){
        return (
    
            <div className='min-h-screen '>
              {owner?   <div className='flex mt-32 justify-end p-5'>
                    <Button>Add Project</Button>
                </div>:null}
            </div>
          )
        }
        
     }}
  
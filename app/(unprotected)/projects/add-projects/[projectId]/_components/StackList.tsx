"use client"

import { Stack } from "@prisma/client"
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface ChaptersListProps{
    items: Stack[];
    projectId: string | undefined
 
}

export const StackList = ({
    items,
    projectId
}:ChaptersListProps) =>{
    const router = useRouter();
    const [isMounted,setIsMounted] = useState(false);
    const [chapters,setChapters] = useState(items);
    const [deletingId,setDeletingId] = useState<string | null>(null);

    const onDelete = async(id:string) =>{
        try {
            setDeletingId(id);
            await axios.delete(`/api/projects/${projectId}/stacks/${id}`);
            toast.success("Attachment Deleted");
            router.refresh();
          } catch (error) {
            toast.error("Something went Wrong")
          }finally{
            setDeletingId(null)
          }
        
    }
    useEffect(()=>{
        setIsMounted(true)
    })

    useEffect(()=>{
        setChapters(items)
    },[items])

    if(!isMounted){
        return null
    }
    return <div>
       <div >
      {items.map(item => (
        <div className=" flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-m "  key={item.id} >
          <h2>{item.name}</h2>
          {deletingId !== item.id &&(
                    <button className="ml-auto hover:opacity-75 transition"
                    onClick={()=> onDelete(item.id)}>
                      <X className="h-4 w-4"/>
                    </button>
                  )}
        </div>
      ))}
    </div>
    </div>
}

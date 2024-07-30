"use client";
import React, { useState } from "react";
import axios from "axios";
import * as z from "zod";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { FileUpload } from "@/components/file-uploader";
import { toast } from "sonner";

interface ImageFormProps {
  initialData: any;
  projectId: string | undefined;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Description is Required",
  }),
});

export default function ImageForm({ initialData, projectId }: ImageFormProps) {
  const route = useRouter();
  const [isEditing, setEditing] = useState(false);
  const onToggleEdit = () => setEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const submitForm = async (values: z.infer<typeof formSchema>) => {
    
    try {
      await axios.patch(`/api/projects/${projectId}`, values);
      toast.success("Image Updated!");
      route.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }finally{
      console.log("Terminated")
    }
  };

  return (
    <div className="mt-6 border rounded-md p-4   ">
      <div className="font-medium flex items-center justify-between ">
        Project Description
        <Button onClick={onToggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )} 
          {!isEditing && initialData &&  (
             <>
             {" "}
             <Pencil className="h-4 w-4 mr-2" />
             Edit Image
           </>
          )} 
          {!isEditing && !initialData &&  (
             <>
             {" "}
             <PlusCircle className="h-4 w-4 mr-2" />
             Add an Image
           </>
          )} 
          
        </Button>

      </div>
      <div>
        {!isEditing && (!initialData? (
          <div className="flex items-center justify-center center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500"/>
          </div>
        ):(
          <div className="relative aspect-video mt-2">
            <Image
            alt="upload"
            fill
            className="object-cover rounded-md"
            src={initialData}
            />
          </div>
        ))}
        {isEditing && (
         <div>
          <FileUpload
          endpoint="projectImage"
          onChange={(url)=>{
            if(url){
              submitForm({imageUrl:url})
            }
          }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio
          </div>
         </div>
        )}
    </div>
    </div>
  );
}

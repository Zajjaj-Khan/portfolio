"use client";
import { cn } from "@/lib/utils";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { title } from "process";
import { Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Stack,Project } from "@prisma/client";
import { StackList } from "./StackList";

interface StackFormProps {
  initialData: any
  projectId: string| undefined;
}
const formSchema = z.object({
 title:z.string().min(1)
});

const StackForm = ({ initialData, projectId }: StackFormProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isCreating,setIsCreating] = useState(false);

  const toggleEdit = () => setIsCreating((current) => !current);
  const router  = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     title:""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        await axios.post(`/api/projects/${projectId}/stacks`,values);
        toast.success("Chapter created")
        router.refresh();
    } catch (error) {
        toast.error("Something went Wrong")
    }
  };
  console.log(initialData.Stack)
  return (
    <div className="mt-6 border rounded-md p-4   ">
      <div className="font-medium flex items-center justify-between">
        Tech Stack
        <Button onClick={toggleEdit} variant="ghost">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              {" "}
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Stack
            </>
          )}
        </Button>
      </div>
      <div>
        {isCreating && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
            <FormField
            control={form.control}
            name="title"
            render={({field}:any)=>(
                <FormItem>
                    <FormControl>
                        <Input
                        disabled={isSubmitting}
                        placeholder="e.g 'Intro to Course'"
                        {...field}
                        />
                    </FormControl>
                </FormItem>
            )}
            />
            
            <Button
            disabled={isSubmitting}
            type="submit"
            >Create</Button>  
            </form>
          </Form>
        )}
        {!isCreating && (
          <div className={cn("text-sm mt-2",!initialData.Stack && "text-slate-500 italic")}>
          {!initialData.Stack && "No Chapters"}
          <StackList
          items={initialData.Stack|| []}
          projectId={projectId}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default StackForm;
"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
interface TitleFormProps {
  initialData: any;
  projectId: string | undefined;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is Required",
  }),
});

export default function TitleForm({ initialData, projectId }: TitleFormProps) {
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
      toast.success("Title Updated!");
      route.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border rounded-md p-4   ">
      <div className="font-medium flex items-center justify-between ">
        Project TItle
        <Button variant="ghost" onClick={onToggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil size={16} className="mr-4" />
              Edit Title
            </>
          )}
        </Button>
      </div>
      <div>
        {!isEditing && <p className="text-sm mt-2">{initialData}</p>}
        {isEditing && (
          <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
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
                      placeholder="Whatsapp Clone"
                      {...field}
                      />
                  </FormControl>
              </FormItem>
          )}
          />
          <div className="flex items-center gap-x-2">
          <Button
          disabled={isSubmitting}
          type="submit"
          >Save</Button>  
          </div>
          </form>
        </Form>
        )}
      </div>
    </div>
  );
}

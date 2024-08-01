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
import { Textarea } from "@/components/ui/textarea";
interface GithubLinkFormProps {
  initialData: any;
  projectId: string | undefined;
}

const formSchema = z.object({
  githubLink: z.string().min(1, {
    message: "Required",
  }),
});

export default function GithubLinkForm({ initialData, projectId }: GithubLinkFormProps) {
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
      toast.success("Github Link Updated!");
      route.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border rounded-md p-4   ">
      <div className="font-medium flex items-center justify-between ">
        Github Link
        <Button variant="ghost" onClick={onToggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil size={16} className="mr-4" />
              Edit Github Link
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
          name="githubLink"
          render={({field}:any)=>(
              <FormItem>
                  <FormControl>
                      <Textarea
                      disabled={isSubmitting}
                      placeholder="Live link of Website if avialable"
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

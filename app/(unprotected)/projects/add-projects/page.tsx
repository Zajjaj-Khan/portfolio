"use client";
import React from "react";
import * as z from "zod";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectTitleFormSchema } from "@/lib/schema";
export default function page() {
  const route = useRouter();
  const form = useForm<z.infer<typeof ProjectTitleFormSchema>>({
    resolver: zodResolver(ProjectTitleFormSchema),
    defaultValues: {
      title: "",
    },
  });
  const { user } = useUser();

  const owner = user?.primaryEmailAddress?.emailAddress;
  if (owner !== "kzajjaj@gmail.com") return;

  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof ProjectTitleFormSchema>) => {
    try {
      const response = await axios.post("/api/projects", values);
      route.push(`/projects/add-projects/${response.data.id}`)
    } catch (error) {}
  };
  return (
    <div className="m-36 h-screen">
      <div>
        <h1 className="text-2xl font-semibold">Title of the Project</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-5"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project TItle</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Airbnb Clone"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

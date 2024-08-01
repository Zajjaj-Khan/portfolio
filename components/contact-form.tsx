"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/actions";
import { toast } from "sonner";
import { Fragment } from "react";
import { Button } from "./ui/button";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <div className="">
      <h1
        className="text-3xl font-semibold
       opacity-75 mb-8"
      >
        Contact Form
      </h1>
      <div className="w-full flex flex-col md:flex md:flex-row">
        <form
          onSubmit={handleSubmit(processForm)}
          className=" flex flex-1 flex-col gap-4 sm:w-1/2 lg:w-1/3"
        >
          <div className="flex flex-col md:flex md:flex-row">
            <div>
              <label className="  z-10 ">Name*</label>
              <input
                className="w-full rounded-lg py-2 mr-4  border-2 border-gray-500 bg-transparent"
                {...register("name")}
              />
              {errors.name?.message && (
                <p className="ml-1 mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="md:mx-4">
              <label className=" md:ml-4 z-10 ">Email*</label>
              <input
              
                className=" w-full rounded-lg py-2 mr-4  md:ml-2 border-2 border-gray-500 bg-transparent"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="ml-1 mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label>Message*</label>
            <textarea
              rows={5}
              cols={5}
              className="w-full  rounded-lg p-2 border-2 border-gray-500 bg-transparent"
              {...register("message")}
            />
            {errors.message?.message && (
              <p className="ml-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            disabled={isSubmitting}
            className="rounded-lg borderfont-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

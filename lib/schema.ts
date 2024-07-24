import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  message: z
    .string()

    .min(6, { message: "Message must be at least 6 characters." }),
});

export const ProjectTitleFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
});

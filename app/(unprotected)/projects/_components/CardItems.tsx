"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SiGithubcopilot } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
interface CardItemProps {
  title?: any;
  tagline?: any;
  date?: string;
  description?: any;
  id?: any;
  liveLink: string | null;
  githubLink?: string | null;
}

export default function CardItems({
  title,
  tagline,
  date,
  id,
  description,
  liveLink,
  githubLink,
}: CardItemProps) {
  const route = useRouter();
  const hyphenatedTitle = title.replace(/\s+/g, "-");
  const onClick = () => {
    route.push(`/projects/${id}`);
  };

  return (
    <div className="my-4 " onClick={onClick}>
      <Card className="shadow-lg rounded-2xl  hover:shadow-2xl cursor-pointer  ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{tagline}</CardDescription>
        </CardHeader>
        <CardContent className="hidden md:flex">
          <p className="font-medium px-2">
            {description?.substring(0, 150)} ...{" "}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          {liveLink != null ? (
            <p className="font-medium hover:text-blue-300">
              <Link href={liveLink} className="flex">
                <FaLink size={18} />

                <span className="ml-2">Live Link</span>
              </Link>
            </p>
          ) : (
            <p className="italic text-slate-400">Live link disabled </p>
          )}

          {githubLink != null ? (
            <p className="font-medium hover:text-blue-300">
              <Link href={githubLink} className="flex">
                <SiGithubcopilot size={18} />
                <span className="ml-2">Github Link</span>
              </Link>
            </p>
          ) : (
            <p className="italic text-slate-400">Github link disabled </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

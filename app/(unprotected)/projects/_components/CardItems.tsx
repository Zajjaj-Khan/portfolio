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

interface CardItemProps {
  title?: any;
  tagline?: any;
  date?: string;
  description?: any;
}

export default function CardItems({ title, tagline, date,description }: CardItemProps) {
  return (
    <div className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      <Card className="shadow-lg rounded-2xl  hover:shadow-2xl cursor-pointer "> 
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{tagline}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-medium px-2">{description.substring(0,300)} ... </p>
        </CardContent>
        <CardFooter className="flex justify-between">
         
           <p className="font-medium hover:text-blue-300">
           <Link href='/'>
            Live Link
            </Link>
           </p>
           <p className="font-medium hover:text-blue-300">
           <Link href='/'>
            Github Link
            </Link>
           </p>
     
        </CardFooter>
      </Card>
    </div>
  );
}

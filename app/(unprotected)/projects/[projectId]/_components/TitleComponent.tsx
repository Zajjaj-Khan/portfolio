'use client'
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import React, { useState ,useEffect} from "react";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
interface TitleProp {
  title: string | undefined;
  liveLink: any;
  githubLink?: any;
}

export default function TitleComponent({
  title,
  liveLink,
  githubLink,
}: TitleProp) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex justify-between md:py-2 md:px-4 ">
      <h2 className="text-center md:text-left text-4xl font-bold ">{title}</h2>
      <div className="hidden md:flex items-end">
       
          <Button size="sm" variant="secondary" disabled={liveLink == null}>
          <Link href={liveLink==null?'#':liveLink}>
            Live Link
            </Link>
          </Button>
      
      
     
        <Button size="sm" variant="secondary" disabled={githubLink == null} className="mx-3">
        <Link href={githubLink==null?'#':githubLink}>
          Github Link
          </Link>
        </Button>
      
      </div>
    </div>
  );
}

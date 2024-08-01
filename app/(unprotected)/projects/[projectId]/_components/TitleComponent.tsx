import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import React, { useState } from "react";
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
  
  return (
    <div className="flex justify-between md:py-2 md:px-4 mb-4">
      <h2 className="text-center md:text-left text-4xl font-bold ">{title}</h2>
      <div className="flex items-end">
        <Link href={liveLink==null?'#':liveLink}>
          <Button size="sm" variant="secondary" disabled={liveLink == null}>
            <span className="mx-2">
              <FaLink />
            </span>
            Live Link
          </Button>
        </Link>
      
      <Link href={githubLink==null?'#':liveLink}>
        <Button size="sm" variant="secondary" disabled={githubLink == null} className="mx-3">
          <span className="mx-2">
          <FaGithubAlt />
          </span>
          Github Link
        </Button>
      </Link>
      </div>
    </div>
  );
}

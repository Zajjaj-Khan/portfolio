import React from "react";
import { db } from "@/lib/db";
import ProjectItem from "./ProjectItem";
import CardItems from "./CardItems";

export default async function ProjectCard() {
  const projects = await db.project.findMany({
    include: {
      Stack: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">

        {projects.map((item) => (
            <>
            {item.pin && (
              <CardItems
                title={item.title}
                id={item.id}
                tagline={item.tagline}
                date={item.createdDate
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " ")}
                description={item?.description}
                liveLink= {item?.liveLink}
                githubLink= {item?.githubLink}
              />
            )}
            </>
  
))}
      </div>
    </div>
  );
}

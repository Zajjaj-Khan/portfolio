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
  return <div> {projects.map(item => (
    <div key={item.id}>
        {
            item.pin &&  <CardItems title={item.title} tagline= {item.tagline} date={item.createdDate.toISOString().slice(0, 19).replace('T', ' ')} description={item?.description}/>
        }
     
    </div>
  ))}</div>;
}



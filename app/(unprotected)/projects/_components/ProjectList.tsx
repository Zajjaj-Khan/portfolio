import React from "react";
import { db } from "@/lib/db";
import ProjectItem from "./ProjectItem";




export default async function ProjectList() {
  const projects = await db.project.findMany({
    orderBy: {
      createdDate: 'desc'
    },
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
      <ProjectItem title={item.title} tagline= {item.tagline} date={item.createdDate.toISOString().slice(0, 19).replace('T', ' ')}/>
    </div>
  ))}</div>;
}



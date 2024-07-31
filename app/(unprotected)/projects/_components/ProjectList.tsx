
import React from "react";
import { db } from "@/lib/db";
import ProjectItem from "./ProjectItem";

import { useRouter } from 'next/router';


export default async function ProjectList() {
  // const route = useRouter()
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

  const onSubmit = (id:any) =>{
    console.log(id)
  }

  return <div> {projects.map(item => (
    <div key={item.id}>
      <ProjectItem title={item.title} tagline= {item.tagline} date={item.createdDate.toISOString().slice(0, 19).replace('T', ' ')} id={item.id}/>
    </div>
  ))}</div>;
}



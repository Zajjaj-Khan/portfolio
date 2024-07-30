import React from "react";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import TitleForm from "./_components/TitleForm";
import { db } from "@/lib/db";
import DescriptionForm from "./_components/DescriptionForm";
import ImageForm from "./_components/ImageForm";
import TaglineForm from "./_components/Tagline";
import { SwitchForm } from "./_components/SwitchForm";
import StackForm from "./_components/StackForm";

async function CourseID({ params }: { params: { projectId: string } }) {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const project =await  db.project.findUnique({
    where: {
      id: params.projectId,
      userId,
    },
  });
  const projects = await db.project.findUnique({
    where: {
      id: params.projectId,
      userId
    },
    include:{
      Stack:{
        orderBy:{
          createdAt:"desc"
        }
      }
    }
  });
  console.log(typeof project);


  return (
    <div className="mt-36 p-6 px-24">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Project SetUp</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <TitleForm initialData={project?.title} projectId={project?.id} />
        <TaglineForm initialData={project?.tagline} projectId={project?.id}/>
        <DescriptionForm initialData={project?.description} projectId={project?.id}/>
        <ImageForm initialData={project?.imageUrl} projectId={project?.id}/>
        <SwitchForm initialData={project?.pin} projectId={project?.id}/>
        <StackForm initialData={projects} projectId={project?.id}/>
      </div>
    </div>
  );
}

export default CourseID;

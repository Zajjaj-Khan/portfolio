import { db } from "@/lib/db";
import React, { Fragment } from "react";
import Image from "next/image";
import ImageComponent from "./_components/ImageComponent";
import { AnimatedList } from "@/components/magicui/animated-list";
import Stack from "./_components/Stack";
import TitleComponent from "./_components/TitleComponent";
import DescriptionComponent from "./_components/DescriptionComponent";
import TaglineComponent from "./_components/TaglineComponent";
import MobileStackList from "./_components/MobileStackList";
export default async function page({
  params,
}: {
  params: { projectId: string };
}) {
  console.log(params.projectId);

  const project = await db.project.findUnique({
    where: {
      id: params.projectId,
    },
  });
  const projects = await db.project.findUnique({
    where: {
      id: params.projectId,
    },
    include: {
      Stack: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  const stacks = projects?.Stack;
  return (
    <div className="mt-28 mx-32">
      <div className="mb-3">
        <TitleComponent
          title={project?.title}
          liveLink={project?.liveLink}
          githubLink={project?.githubLink}
        />
        <TaglineComponent tagline={project?.tagline} />
      </div>
      <div className="flex ">
        <ImageComponent imageUrl={project?.imageUrl} />
        <AnimatedList
          className="hidden  lg:flex ml-3   p-6  w-64  rounded-xl overflow-hidden h-72"
          delay={1000}
        >
          {stacks?.map((stack) => (
            <Fragment key={stack.id}>
            <Stack stack={stack}  />
            </Fragment>
          ))}
        </AnimatedList>
      </div>
      <div>
      <DescriptionComponent description={project?.description} />
      </div>
      <div className="py-6 px-4 lg:hidden shadow-sm">
        <MobileStackList stacks={projects?.Stack} />
      </div>
    </div>
  );
}

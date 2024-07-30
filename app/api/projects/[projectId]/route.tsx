import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { userId } = auth();
    const projectId = params.projectId;
    const values = await req.json();
    console.log(values)
    if (!userId) return new NextResponse("Unautherzed User", { status: 401 });

    const project = await db.project.update({
      where: {
        id: projectId,
        userId,
      },
      data: {
        ...values,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.log("Title Update Route", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

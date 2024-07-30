import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { userId } = auth();
    const { title }:{title:string} = await req.json();

    if (!userId) {
      return new NextResponse("Unautherized", { status: 401 });
    }
    const projectOwner = await db.project.findUnique({
      where: {
        id: params.projectId,
        userId,
      },
    });
    if (!projectOwner) {
      return new NextResponse("Unautherized", { status: 401 });
    }
    

    const stack = await db.stack.create({
        data:{
            name:title,
            projectId:params.projectId,
        }
    });
    return NextResponse.json(stack);

  } catch (error) {
    console.log("[Chapters", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
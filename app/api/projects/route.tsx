import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized User");
    }

    const project = await db.project.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

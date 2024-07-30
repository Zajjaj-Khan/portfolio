import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
    req:Request,
{params}:{params:{projectId:string,stackId:string}}
){
    try {
        const {userId} = auth();
        if(!userId){
            return new NextResponse("Unauthenticated",{status:401});

        }
        const projectOwner = await db.project.findUnique({
            where:{
                id:params.projectId,
                userId:userId
            }
        });
        if(!projectOwner){
            return new NextResponse("Unatherized",{status:401})
        }
        const stack = await db.stack.delete({
            where:{
                projectId:params.projectId,
                id:params.stackId
            }
        })
        return NextResponse.json(stack)
    } catch (error) {
        console.log("Stack_DELETE:" , error)
        return new NextResponse("Server Eror",{status:500})
    }
}
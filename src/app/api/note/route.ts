import { NextRequest, NextResponse } from "next/server";
import { createNote, db } from "@/lib/drizzle";
import {desc, asc, eq} from "drizzle-orm"

export async function POST(request: NextRequest) {
    const body = await request.json();
    const data = await db.insert(createNote).values(body).returning();

    return new NextResponse(
        JSON.stringify({
            message: "Data Added",
            data,
        })
    )
}

export const GET = async (request: NextRequest) => {
  const username = request.headers.get("username") as any;
  try {
    const res = await db
      .select()
      .from(createNote)
      .where(eq(createNote.username, username))
      .orderBy(asc(createNote.id) );
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PATCH = async (request: NextRequest) => {
  const req = await request.json()
  console.log(req)
  try{
    await db
    .update(createNote)
    .set({title:req.title, description: req.description})
    .where(eq(createNote.id, req.id))
    return NextResponse.json({message: "Item updated successfully"})
  }
  catch(error){
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
}

export const DELETE = async (request: NextRequest)=> {
  const id = request.headers.get("itemId") as any;
  try {
    await db
      .delete(createNote)
      .where(eq(createNote.id, id)) 
      .execute();

    return NextResponse.json({message: "Item deleted successfully"});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
import { connectMongoDB } from "@/src/shared/lib/utils/connectMongoDB";
import Comment from "@/src/models/Comment";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  const body = await req.json();
  try {
    await connectMongoDB();
    const { text, author, articleId } = body;
    const comment = new Comment({ text, author, articleId });
    await comment.save();
    return new NextResponse(JSON.stringify(comment));
  } catch (error) {
    JSON.stringify({ message: "Error create comment" });
  }
};

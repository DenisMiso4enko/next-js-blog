import { NextResponse } from "next/server";
import { connectMongoDB } from "@/src/shared/lib/utils/connectMongoDB";
import Comment from "@/src/models/Comment";
import { revalidateTag } from "next/cache";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectMongoDB();
    const { id } = params;
    const comments = await Comment.find({ articleId: id }).sort({
      createdAt: -1,
    });
    revalidateTag("comments");
    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      // @ts-ignore
      JSON.stringify({ message: "Error fetch posts" }, { status: 500 })
    );
  }
};

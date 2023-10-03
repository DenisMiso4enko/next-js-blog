import { NextResponse } from "next/server";
import { connectMongoDB } from "@/src/shared/lib/utils/connectMongoDB";
import PostModel from "../../../src/models/Post";
import { revalidateTag } from "next/cache";

export const POST = async (req: Request): Promise<NextResponse> => {
  const body = await req.json();
  try {
    await connectMongoDB();
    const doc = new PostModel({
      ...body,
    });
    const post = await doc.save();
    revalidateTag("posts");
    return new NextResponse(JSON.stringify(post));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      // @ts-ignore
      JSON.stringify({ message: "Error create posts" }, { status: 500 })
    );
  }
};

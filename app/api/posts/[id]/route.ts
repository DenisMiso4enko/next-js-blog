import { connectMongoDB } from "@/src/shared/lib/utils/connectMongoDB";
import PostModel from "../../../../src/models/Post";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest, { params }: any) => {
  const { id } = params;
  try {
    await connectMongoDB();
    const post = await PostModel.findByIdAndUpdate(id, { $inc: { views: 1 } });

    if (post) {
      return new NextResponse(JSON.stringify(post), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};

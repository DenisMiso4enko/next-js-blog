import {NextResponse} from "next/server";
import {connectMongoDB} from "@/src/shared/lib/utils/connectMongoDB";
import {paginateResults} from "@/src/shared/lib/utils/paginateResults";
import PostModel from "../../../src/models/Post";

export const GET = async (req: any) => {
  const {searchParams} = new URL(req.url);
  await connectMongoDB();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  try {
    const posts = await PostModel.find().sort({createdAt: -1});
    // @ts-ignore
    const results = paginateResults(page, limit, posts);
    if (posts) {
      return new NextResponse(JSON.stringify(results))
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      // @ts-ignore
      JSON.stringify({message: "Error fetch posts"}, {status: 500})
    );
  }
};



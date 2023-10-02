import {NextResponse} from "next/server";
import {connectMongoDB} from "@/src/shared/lib/utils/connectMongoDB";
import PostModel from "../../../src/models/Post";
import {revalidateTag} from "next/cache";
import {NextApiRequest} from "next";


export const POST = async (req: NextApiRequest): Promise<NextResponse | void> => {
  const body = await req.json();
  try {
    await connectMongoDB();
    const doc = new PostModel({
      ...body,
    });
    const post = await doc.save();
    revalidateTag("posts");
    return new NextResponse(JSON.stringify(post))
  } catch (err) {
    console.log(err);
    return new NextResponse(
      // @ts-ignore
      JSON.stringify({message: "Error fetch posts"}, {status: 500})
    );
  }
};

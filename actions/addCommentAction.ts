"use server";
import { connectMongoDB } from "@/src/shared/lib/utils/connectMongoDB";
import Comment from "@/src/models/Comment";
import { revalidateTag } from "next/cache";

export const addComment = async (
  formData: FormData,
  author: string,
  articleId: string
) => {
  try {
    console.log(articleId);
    await connectMongoDB();
    const text = formData.get("content");
    const comment = new Comment({ text, author, articleId });
    await comment.save();
    revalidateTag("comments");
  } catch (e) {
    console.log(e);
  }
};

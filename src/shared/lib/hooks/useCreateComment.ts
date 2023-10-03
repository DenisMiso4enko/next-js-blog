import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { httpRequestPost } from "@/src/shared/api/httpRequest";
import { revalidateTag } from "next/cache";

export const useCreateComment = (articleId: string) => {
  const [text, setText] = useState("");
  const session = useSession();
  const author = session?.data?.user?.email!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const commentData = {
        text,
        author,
        articleId,
      };
      setText("");
      const response = await httpRequestPost(
        "/api/comments",
        "POST",
        commentData
      );
      revalidateTag("comments");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    handleSubmit,
    text,
    setText,
  };
};

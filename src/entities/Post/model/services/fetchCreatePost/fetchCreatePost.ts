import { BASE_URL } from "@/src/constance";
import { IPost } from "@/src/entities/Post/model/types/types";
import { revalidateTag } from "next/cache";

export const fetchCreatePost = async (fields: IPost): Promise<IPost> => {
  const res = await fetch(`${BASE_URL}/posts/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  if (res.status === 201) {
    return await res.json();
  }

  revalidateTag("posts");

  // настроить обработку ошибок
};

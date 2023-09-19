import { IPost } from "@/src/entities/Post/model/types/post";
import { revalidateTag } from "next/cache";
import { httpRequest } from "@/src/shared/api/httpRequest";

export const fetchCreatePost = async (fields: IPost) => {
  const res = await httpRequest("posts/create", "POST", fields);

  if (res.status === 201) {
    return await res.json();
  }
  // настроить обработку ошибок

  revalidateTag("posts");
};

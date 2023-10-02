import { IPost } from "@/src/entities/Post/model/types/post";
import { revalidateTag } from "next/cache";
import { httpRequest } from "@/src/shared/api/httpRequest";

export const fetchCreatePost = async (fields: IPost) => {
  const res = await httpRequest("http://localhost:3000/api/create", "POST", fields);

  if (res.status === 201) {
    return await res.json();
  }
  // настроить обработку ошибок

  revalidateTag("posts");
};

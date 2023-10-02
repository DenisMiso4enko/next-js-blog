import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IPost } from "@/src/entities/Post/model/types/post";
import { httpRequestPost } from "../../api/httpRequest";

export const useCreatePost = () => {
  const router = useRouter();
  const session = useSession();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const fields: IPost = {
        title,
        text,
        description,
        tags,
        image,
        userId: session?.data?.user?.email!,
        userName: session?.data?.user?.name!,
      };
      const response = await httpRequestPost("/api/create", "POST", fields);
      router.push(`/posts/${response._id}`);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return {
    title,
    setTitle,
    text,
    setText,
    description,
    setDescription,
    tags,
    setTags,
    image,
    setImage,
    handleSubmit,
  };
};

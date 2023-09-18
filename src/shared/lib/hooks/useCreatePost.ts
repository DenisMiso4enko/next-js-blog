import { fetchCreatePost } from "@/src/entities/Post/model/services/fetchCreatePost/fetchCreatePost";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const useCreatePost = () => {
  const router = useRouter();
  const session = useSession();
  const [title, setTitle] = useState("test");
  const [text, setText] = useState("test");
  const [description, setDescription] = useState("test");
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState("asca");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fields = {
      title,
      text,
      description,
      tags,
      image,
      userId: session?.data?.user?.email,
      userName: session?.data?.user?.name,
    };

    const data = await fetchCreatePost(fields);

    if (data) {
      router.push(`/posts/${data._id}`);
    }
    // Обработка ошибок
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

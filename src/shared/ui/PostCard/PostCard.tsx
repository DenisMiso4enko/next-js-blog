import Link from "next/link";
import { IPost } from "@/src/entities/Post/model/types/types";

interface PostCardProps {
  data: IPost;
}

const PostCard = ({ data }: PostCardProps) => {
  return (
    <Link href={`/posts/${data._id}`}>
      <h2>{data.title}</h2>
      {data.text}
    </Link>
  );
};

export default PostCard;

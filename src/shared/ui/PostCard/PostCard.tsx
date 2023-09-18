import Link from "next/link";
import { IPost } from "@/src/entities/Post/model/types/types";
import styles from "./postcard.module.css";
import Image from "next/image";

interface PostCardProps {
  data: IPost;
}

const PostCard = ({ data }: PostCardProps) => {
  return (
    <Link className={styles.card} href={`/posts/${data._id}`}>
      <Image
        className={styles.image}
        src={data.image}
        alt={data.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "35%" }}
      />
      <div className={styles.top}>
        <h2 className={styles.title}>{data.title}</h2>
        <span className={styles.views}>{data.views}</span>
      </div>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.info}>
        <h4>{data.userName}</h4>
        <span>{data.createdAt}</span>
      </div>
    </Link>
  );
};

export default PostCard;

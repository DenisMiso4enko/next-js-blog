import Link from "next/link";
import { IPost } from "@/src/entities/Post/model/types/post";
import Image from "next/image";
import Tag from "@/src/shared/ui/Tag/Tag";
import { AiOutlineEye } from "react-icons/ai";
import styles from "./postcard.module.css";

interface PostCardProps {
  data: IPost;
}

const PostCard = ({ data }: PostCardProps) => {
  return (
    <Link className={styles.container} href={`/posts/${data._id}`}>
      {data.image && (
        <div className={styles.imageContainer}>
          <Image src={data.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {data?.createdAt?.substring(0, 10)}
          </span>
          <span className={styles.views}>
            <AiOutlineEye /> {data.views}
          </span>
        </div>
        <h1>{data.title}</h1>
        <p className={styles.desc}>{data.description.substring(0, 60)}</p>
        <div className={styles.tags}>
          {data?.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

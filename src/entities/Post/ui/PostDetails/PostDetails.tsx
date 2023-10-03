import styles from "./postdetails.module.css";
import { IPost } from "@/src/entities/Post/model/types/post";
import Image from "next/image";

interface PostDetailsProps {
  data: IPost;
}

export const PostDetails = ({ data }: PostDetailsProps) => {
  const {
    image,
    title,
    text,
    _id,
    tags,
    description,
    userId,
    userName,
    views,
    userAvatar,
    updatedAt,
    createdAt,
  } = data;

  const formattedDate = (createdAt: string) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(createdAt);
    // @ts-ignore
    return date.toLocaleDateString("en-US", options);
  };

  const setUserImage = userAvatar ? userAvatar : userName[0];

  return (
    <div className={styles.details}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.creator}>
          <Image
            className={styles.avatar}
            src={setUserImage}
            alt={userName}
            width={50}
            height={50}
          />
          <div className={styles.userInfo}>
            <h3 className={styles.userName}>{userName}</h3>
            <p className={styles.date}>{formattedDate(createdAt!)}</p>
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <article className={styles.text}>{text}</article>
      </div>
    </div>
  );
};

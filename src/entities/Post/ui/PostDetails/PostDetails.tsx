import { IPost } from "@/src/entities/Post/model/types/post";
import Image from "next/image";
import { formattedDate } from "@/src/shared/lib/utils/formattedDate";
import styles from "./postdetails.module.css";

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

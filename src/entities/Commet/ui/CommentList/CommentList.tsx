import React from "react";
import { Comment } from "@/src/entities/Commet/model/types/comment";
import styles from "./commentList.module.css";
import { formattedDate } from "@/src/shared/lib/utils/formattedDate";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
    cache: "no-cache",
    next: { tags: ["comments"] },
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const CommentList = async ({ id }: any) => {
  const comments: Comment[] = await getData(id);
  return (
    <div className={styles.comments}>
      {comments &&
        comments.map((comment: Comment) => (
          <div key={comment._id} className={styles.comment}>
            <div className={styles.text}>{comment.text}</div>
            <div className={styles.info}>
              <p>{comment.author}</p>
              <span>{formattedDate(comment.createdAt)}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

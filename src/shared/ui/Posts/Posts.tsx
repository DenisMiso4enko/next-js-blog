import styles from "./posts.module.css";
import { BASE_URL } from "@/src/constance";
import React from "react";
import PostCard from "@/src/shared/ui/PostCard/PostCard";
import { IPost } from "@/src/entities/Post/model/types/post";

const getData = async () => {
  const res = await fetch(`${BASE_URL}/posts?page=1&limit=10`, {
    cache: "no-store",
    next: {
      tags: ["posts"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Posts = async () => {
  const data = await getData();
  return (
    <div className={styles.posts}>
      {data?.results?.map((post: IPost) => (
        <PostCard key={post._id} data={post} />
      ))}
    </div>
  );
};

export default Posts;

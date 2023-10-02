import styles from "./posts.module.css";
import React from "react";
import PostCard from "@/src/shared/ui/PostCard/PostCard";
import { IPost } from "@/src/entities/Post/model/types/post";
import Pagination from "@/src/shared/ui/Pagination/Pagination";

const getData = async (page: any) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&limit=3`,
    {
      cache: "no-store",
      next: { tags: ["posts"] },
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Posts = async ({ page }: any) => {
  const { totalPages, next, results, currentPage } = await getData(page);

  return (
    <div className={styles.posts}>
      {results?.map((post: IPost) => <PostCard key={post._id} data={post} />)}
      <div className={styles.pagination}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          next={next}
        />
      </div>
    </div>
  );
};

export default Posts;

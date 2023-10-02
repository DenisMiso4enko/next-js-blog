import styles from "./posts.module.css";
import React from "react";
import PostCard from "@/src/shared/ui/PostCard/PostCard";
import { IPost } from "@/src/entities/Post/model/types/post";
import Pagination from "@/src/shared/ui/Pagination/Pagination";

const Posts = async ({
  totalPages,
  next,
  results,
  currentPage,
  query,
}: any) => {
  return (
    <div className={styles.posts}>
      {results?.map((post: IPost) => <PostCard key={post._id} data={post} />)}
      <div className={styles.pagination}>
        <Pagination
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
          next={next}
        />
      </div>
    </div>
  );
};

export default Posts;

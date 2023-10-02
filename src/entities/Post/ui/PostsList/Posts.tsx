import styles from "./posts.module.css";
import React from "react";
import PostCard from "@/src/shared/ui/PostCard/PostCard";
import { IPost } from "@/src/entities/Post/model/types/post";
import Pagination from "@/src/shared/ui/Pagination/Pagination";

interface PostsProps {
  totalPages: number;
  results: IPost[];
  currentPage: number;
  query: string;
}

const Posts = async ({
  totalPages,
  results,
  currentPage,
  query,
}: PostsProps) => {
  return (
    <div className={styles.posts}>
      {results?.map((post: IPost) => <PostCard key={post._id} data={post} />)}
      <div className={styles.pagination}>
        <Pagination
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Posts;

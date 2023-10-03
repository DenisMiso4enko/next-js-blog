"use client";
import React from "react";
import Input from "@/src/shared/ui/Input/Input";
import styles from "./createComment.module.css";
import { useCreateComment } from "@/src/shared/lib/hooks/useCreateComment";

export const CreateComment = ({ articleId }: any) => {
  const { handleSubmit, text, setText } = useCreateComment(articleId);
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Enter your comment..."}
      />
    </form>
  );
};

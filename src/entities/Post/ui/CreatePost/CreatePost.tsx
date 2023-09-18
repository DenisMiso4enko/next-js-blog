"use client";
import TagsInput from "@/src/shared/ui/TagsInput/TagsInput";
import { useCreatePost } from "@/src/shared/lib/hooks/useCreatePost";
import { ChangeEvent } from "react";
import Input from "@/src/shared/ui/Input/Input";
import styles from "./createpost.module.css";
import Button from "@/src/shared/ui/Button/Button";

export const CreatePost = () => {
  const {
    title,
    setTitle,
    text,
    setText,
    description,
    setDescription,
    tags,
    setTags,
    image,
    setImage,
    handleSubmit,
  } = useCreatePost();

  // не отправлять форму с путсыми полями
  return (
    <div className={styles.CreatePost}>
      <h1 className={styles.title}>Create Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TagsInput tags={tags} onChangeTags={setTags} />
        <Input
          type="text"
          value={title}
          placeholder={"Enter post title..."}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required={true}
        />
        <Input
          type="text"
          value={description}
          placeholder={"Enter post description..."}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          required={true}
        />
        <Input
          type="text"
          value={image}
          placeholder={"Paste image URL..."}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
          required={true}
        />
        <textarea
          className={styles.textarea}
          cols={30}
          rows={10}
          value={text}
          placeholder={"Enter post text..."}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
          required={true}
        ></textarea>
        <Button type={"submit"}>Submit</Button>
      </form>
    </div>
  );
};

import { PostDetails } from "@/src/entities/Post";
import { CommentList, CreateComment } from "@/src/entities/Commet";
import styles from "./page.module.css";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Page = async ({ params }: any) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <>
      <PostDetails data={data} />
      <div>
        <h2 className={styles.commentTitle}>Comments</h2>
        <CreateComment articleId={id} />
        <CommentList id={id} />
      </div>
    </>
  );
};

export default Page;

import styles from "./page.module.css";
import Posts from "@/src/entities/Post/ui/PostsList/Posts";
import { Sidebar } from "@/src/widgets/Sidebar";

export default function Home({ searchParams }: any) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.content}>
        <Posts page={page} />
        <Sidebar />
      </div>
    </main>
  );
}

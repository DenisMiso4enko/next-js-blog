import styles from "./page.module.css";
import Posts from "@/src/shared/ui/Posts/Posts";
import { Sidebar } from "@/src/widgets/Sidebar";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.content}>
        <Posts />
        <Sidebar />
      </div>
    </main>
  );
}

import styles from "./page.module.css";
import Posts from "@/src/entities/Post/ui/PostsList/Posts";
import { Sidebar } from "@/src/widgets/Sidebar";

const getData = async (page: any, query: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&limit=3&search=${query}`,
    {
      cache: "no-store",
      next: { tags: ["posts"] },
    }
  );
  if (!res.ok) {
    throw new Error("Failed load posts");
  }
  return res.json();
};

export default async function Home({ searchParams }: any) {
  const page = parseInt(searchParams.page) || 1;
  const query = searchParams.search || "";

  const { totalPages, results, currentPage } = await getData(page, query);

  return (
    <main>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.content}>
        <Posts
          totalPages={totalPages}
          results={results}
          currentPage={currentPage}
          query={query}
        />
        <Sidebar search={query} />
      </div>
    </main>
  );
}

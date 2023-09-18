import styles from "./page.module.css";
import { BASE_URL } from "@/src/constance";

const getData = async (id: string) => {
  const res = await fetch(`${BASE_URL}/posts/getOne/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Page = async ({ params }: any) => {
  const { id } = params;

  // в jsx компонент postDetails
  const data = await getData(id);
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
};

export default Page;

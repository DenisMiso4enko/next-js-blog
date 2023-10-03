import { PostDetails } from "@/src/entities/Post";

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
      <div>Comments</div>
    </>
  );
};

export default Page;

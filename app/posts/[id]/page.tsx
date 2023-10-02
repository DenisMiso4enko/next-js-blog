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

  // в jsx компонент postDetails
  const data = await getData(id);
  return (
    <div>
      <h2>{data.title}</h2>
    </div>
  );
};

export default Page;

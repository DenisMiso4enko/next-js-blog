export const formattedDate = (createdAt: string) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(createdAt);
  // @ts-ignore
  return date.toLocaleDateString("en-US", options);
};

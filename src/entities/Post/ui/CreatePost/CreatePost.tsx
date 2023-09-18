"use client";
import TagsInput from "@/src/shared/ui/TagsInput/TagsInput";
import { useCreatePost } from "@/src/shared/lib/hooks/useCreatePost";

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
  const inputFields = [
    {
      id: 0,
      type: "text",
      value: title,
      onChange: (e) => setTitle(e.target.value),
      placeholder: "Enter title...",
    },
    {
      id: 1,
      type: "text",
      value: description,
      onChange: (e) => setDescription(e.target.value),
      placeholder: "Enter description...",
    },
    {
      id: 2,
      type: "text",
      value: text,
      onChange: (e) => setText(e.target.value),
      placeholder: "Enter text...",
    },
    {
      id: 3,
      type: "text",
      value: image,
      onChange: (e) => setImage(e.target.value),
      placeholder: "Paste image URL...",
    },
  ];

  return (
    <div>
      <h1>Create Post</h1>
      <form action="" onSubmit={handleSubmit}>
        <TagsInput tags={tags} onChangeTags={setTags} />
        {inputFields.map((field) => (
          <input
            key={field.id}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
          />
        ))}
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

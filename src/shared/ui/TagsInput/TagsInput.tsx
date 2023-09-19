import styles from "./tagsInput.module.css";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import Tag from "@/src/shared/ui/Tag/Tag";

interface TagsInputProps {
  tags: string[];
  onChangeTags: (tags: any) => void;
}

const TagsInput = (props: TagsInputProps) => {
  const { tags, onChangeTags } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onChangeTags([...tags, inputValue.trim()]);
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    onChangeTags(updatedTags);
  };

  return (
    <div className={styles.tagInput}>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} onChange={handleTagRemove} />
        ))}
      </div>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="Enter tag..."
      />
    </div>
  );
};

export default TagsInput;

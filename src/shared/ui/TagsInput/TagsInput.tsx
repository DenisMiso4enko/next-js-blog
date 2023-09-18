import styles from "./tagsInput.module.css";
import { ChangeEvent, KeyboardEvent, useState } from "react";

interface TagsInputProps {
  tags: string[];
  onChangeTags: (tags: any) => void;
}

const TagsInput = ({ tags, onChangeTags }: TagsInputProps) => {
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
          <div className={styles.tag} key={index}>
            {tag}
            <span
              className={styles.tagRemove}
              onClick={() => handleTagRemove(tag)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="Введите тег и нажмите Enter"
      />
    </div>
  );
};

export default TagsInput;

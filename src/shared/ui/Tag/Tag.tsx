import React from "react";
import styles from "./tag.module.css";

interface TagProps {
  tag: string;
  onChange?: (tagToRemove: string) => void;
}

const Tag = ({ tag, onChange }: TagProps) => {
  return (
    <div className={styles.tag}>
      {tag}
      {onChange && (
        <span className={styles.tagRemove} onClick={() => onChange(tag)}>
          &times;
        </span>
      )}
    </div>
  );
};

export default Tag;

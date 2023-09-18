import React, { memo } from "react";
import styles from "./input.module.css";

interface InputProps {
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
  readonly?: boolean;
  type?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const Input = memo((props: InputProps) => {
  const {
    type,
    value,
    onChange: onChangeHandler,
    placeholder,
    required,
  } = props;
  return (
    <div className={styles.inputWrapper}>
      <input
        required={required}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
});

export default Input;

import styles from "./button.module.css";
import { ReactNode, ButtonHTMLAttributes, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = (props: ButtonProps) => {
  const { children, className, disabled, type } = props;
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default memo(Button);

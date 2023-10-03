import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import styles from "./theme.module.css";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className={styles.sun} />
        ) : (
          <MoonIcon className={styles.moon} />
        )}
      </button>
    </div>
  );
};

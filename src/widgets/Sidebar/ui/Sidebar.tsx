"use client";
import styles from "./sidebar.module.css";
import Input from "@/src/shared/ui/Input/Input";
import { useState } from "react";

export const Sidebar = () => {
  const [search, setSeatch] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Input
          type={"text"}
          value={search}
          onChange={(e) => setSeatch(e.target.value)}
          placeholder={"Search post..."}
        />
        <div>Тут будет список тэгов и фильтрация по ним</div>
        <div>Топ популярных постов</div>
        <div>Тут будет виджет с погодой</div>
      </div>
    </div>
  );
};

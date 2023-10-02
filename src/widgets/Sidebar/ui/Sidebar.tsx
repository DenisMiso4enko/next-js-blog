"use client";
import { useGlobalContext } from "@/app/Context/store";
import styles from "./sidebar.module.css";
import Input from "@/src/shared/ui/Input/Input";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

interface SidebarProps {
  search?: string;
}

export const Sidebar = ({ search: searchQuery }: SidebarProps) => {
  const [text, setText] = useState(searchQuery);
  const router = useRouter();
  const [query] = useDebounce(text, 700);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push("/");
    } else {
      router.push(`/?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <form>
          <Input
            type={"text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Search post..."}
          />
        </form>
        <div>Тут будет список тэгов и фильтрация по ним</div>
        <div>Топ популярных постов</div>
        <div>Тут будет виджет с погодой</div>
      </div>
    </div>
  );
};

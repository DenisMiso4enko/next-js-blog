"use client";
import { useGlobalContext } from "@/app/Context/store";
import styles from "./sidebar.module.css";
import Input from "@/src/shared/ui/Input/Input";

export const Sidebar = () => {
  // const [search, setSearch] = useState("");
  const { search, setSearch } = useGlobalContext();
  const onSearchHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <form onSubmit={onSearchHandle}>
          <Input
            type={"text"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

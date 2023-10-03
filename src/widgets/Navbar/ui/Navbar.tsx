import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";
import styles from "./navbar.module.css";
import { ThemeChanger } from "@/src/shared/ui/ThemeChanger/ThemeChanger";

const linksData = [
  {
    id: 0,
    path: "/",
    text: "Home",
  },
  {
    id: 1,
    path: "/about",
    text: "About",
  },
];

export const Navbar = () => {
  const session = useSession();
  const userName = session?.data?.user?.name;
  return (
    <nav className={styles.navbar}>
      {linksData.map((link) => (
        <Link key={link.id} href={link.path}>
          {link.text}
        </Link>
      ))}
      {session?.data && <Link href={"/create"}>Create</Link>}
      {session?.data ? (
        <Link href={"/profile"} className={styles.user}>
          {userName && userName[0]}
        </Link>
      ) : (
        <Link href={"/api/auth/signin"} className={styles.linkIcon}>
          Login <FiLogIn />
        </Link>
      )}

      <ThemeChanger />
    </nav>
  );
};

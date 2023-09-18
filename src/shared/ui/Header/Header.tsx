"use client";
import React from "react";
import styles from "./header.module.css";
import { Navbar } from "@/src/widgets/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link href={"/"} className={styles.logo}>
        Blog.
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;

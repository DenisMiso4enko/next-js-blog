"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { SidebarProvider } from "./Context/store";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <SidebarProvider>
        <SessionProvider>{children}</SessionProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};

"use client";
import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";
import { SidebarProvider } from "./Context/store";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <SessionProvider>{children}</SessionProvider>
    </SidebarProvider>
  );
};

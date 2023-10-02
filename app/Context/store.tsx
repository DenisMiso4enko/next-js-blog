"use client";
import { useState, useContext, createContext, ReactNode } from "react";

interface SidebarContextProps {
  search: string;
  setSearch: (search: string) => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  search: "",
  setSearch: (search: string) => {},
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  return (
    <SidebarContext.Provider value={{ search, setSearch }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useGlobalContext = () => useContext(SidebarContext);

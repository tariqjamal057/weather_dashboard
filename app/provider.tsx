"use client";

import { SidebarProvider } from "@/components/layouts/sidebar/context";
import { ThemeProvider } from "next-themes";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}

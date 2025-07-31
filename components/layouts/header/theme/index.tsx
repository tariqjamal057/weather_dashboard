"use client";

import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ToggleTheme: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[52px] h-[40px]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="flex items-center justify-center py-2 bg-blue-500 text-white px-4 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      {isDark ? <IoMoonSharp size={20} /> : <IoSunnyOutline size={20} />}
    </button>
  );
};

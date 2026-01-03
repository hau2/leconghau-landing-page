/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🚨 bắt buộc

  return (
    <button
      className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <span className="material-symbols-outlined text-yellow-500 text-xl">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-slate-400 text-xl">
          dark_mode
        </span>
      )}
    </button>
  );
}

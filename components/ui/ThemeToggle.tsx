"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group relative flex h-11 w-11 items-center justify-center
        overflow-hidden rounded-full
        border border-[var(--border)]
        bg-[var(--surface)]
        text-[var(--foreground)]
        shadow-sm
        transition-all duration-300
        hover:scale-105
        hover:border-[var(--border-strong)]
      "
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className="
          absolute inset-0 rounded-full
          bg-[var(--primary-soft)]
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">
        {isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}
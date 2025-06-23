"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDark = theme === "dark";

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <button
        className={`p-2 rounded-lg text-fg-muted hover:text-fg transition-colors ${className}`}
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-4 h-4" /> {/* Placeholder to maintain layout */}
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      className={`p-2 rounded-lg text-fg-muted hover:text-fg transition-colors ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;

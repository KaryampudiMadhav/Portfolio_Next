import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Smaller placeholder
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-yellow-400 transition-transform duration-300 hover:rotate-180" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-800 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

export default ThemeToggle;
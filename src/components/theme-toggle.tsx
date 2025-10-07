"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();

    // Reset animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1);
  };

  return (
    <button
      onClick={handleToggle}
      className="cursor-pointer relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-yellow-400 hover:from-yellow-500 hover:via-yellow-600 hover:to-orange-600 dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-800 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl group"
      aria-label={
        theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
      }
    >
      <div className="relative overflow-hidden">
        {theme === "dark" ? (
          <Sun
            className={`h-6 w-6 transition-all duration-500 ease-in-out transform ${
              isAnimating ? "rotate-180 scale-110" : ""
            }`}
          />
        ) : (
          <Moon
            className={`h-6 w-6 transition-all duration-500 ease-in-out transform ${
              isAnimating ? "rotate-180 scale-110" : ""
            }`}
          />
        )}
      </div>

      {/* Efeito de brilho */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 ease-in-out ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Efeito de pulso */}
      <div
        className={`absolute inset-0 rounded-full bg-yellow-400/30 dark:bg-yellow-400/20 transition-opacity duration-300 ${
          isAnimating ? "opacity-100 animate-pulse" : "opacity-0"
        }`}
      />
    </button>
  );
}

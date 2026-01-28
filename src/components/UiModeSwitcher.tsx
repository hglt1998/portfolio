"use client";

import { useEffect, useRef } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function UiModeSwitcher() {
  const rootElement = useRef<HTMLElement | null>(null);

  const toggleDarkMode = () => {
    if (!rootElement.current) return;

    if (rootElement.current.classList.contains("dark")) {
      rootElement.current.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      rootElement.current.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    // Inicializar el ref en el cliente
    rootElement.current = document.documentElement;

    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      rootElement.current.classList.add("dark");
    } else {
      rootElement.current.classList.remove("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="transition-colors mr-3"
      aria-label="Toggle dark mode"
    >
      <SunIcon className="block dark:hidden size-6" />
      <MoonIcon className="hidden dark:block size-6 text-gray-300" />
    </button>
  );
}

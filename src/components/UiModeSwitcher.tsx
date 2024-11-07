"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function UiModeSwitcher() {
  // Función para alternar entre modo oscuro y claro
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <button
      onClick={toggleDarkMode}
      className="transition-colors mr-3"
      aria-label="Toggle dark mode" >
      {/* Cambia el icono según el tema */}
      <SunIcon className="block dark:hidden size-6" />
      <MoonIcon className="hidden dark:block size-6 text-gray-300" />
    </button>
  )
}
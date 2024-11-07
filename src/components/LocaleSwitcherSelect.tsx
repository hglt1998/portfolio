"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const localePath = pathname.split("/")[1];
  const currentPath = pathname.split("/").slice(2).join("/"); // Parte de la URL sin el idioma actual

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    const newPath = `/${selectedLocale}/${currentPath}`;
    router.push(newPath);
  };

  return (
    <select onChange={handleChange} value={localePath} className="text-center py-1 bg-transparent dark:text-gray-300">
      <option className="dark:text-white" value="es">🇪🇸 Esp</option>
      <option className="dark:text-white" value="en">🇺🇸 Eng</option>
    </select>
  );
}

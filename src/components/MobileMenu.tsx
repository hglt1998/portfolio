'use client';

import { useState, useRef, useEffect } from 'react';
import UiModeSwitcher from './UiModeSwitcher';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>();

  const t = useTranslations('Navbar')

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Cerrar el menú si se hace clic fuera del contenedor
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="md:hidden relative flex">
      <UiModeSwitcher />
      <button onClick={toggleMenu} className="flex items-center cursor-pointer">
        <svg
          className="w-6 h-6 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div ref={menuRef} className="flex flex-col absolute top-12 bg-white dark:bg-gray-800 shadow-md rounded mt-2 right-5 z-10">
          <Link href="/" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={closeMenu}>
            {t('index')}
          </Link>
          <Link href="/#projects" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={closeMenu}>
            {t('projects')}
          </Link>
          <Link href="/experience" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={closeMenu}>
            {t('experience')}
          </Link>
          <Link href="/me" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={closeMenu}>
            {t('aboutme')}
          </Link>
          <Link href="/contact" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={closeMenu}>
            {t('contact')}
          </Link>
          <LocaleSwitcherSelect />
        </div>
      )}
    </div>
  );
}

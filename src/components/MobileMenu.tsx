'use client';

import { useState, useRef, useEffect } from 'react';
import UiModeSwitcher from './UiModeSwitcher';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const t = useTranslations('Navbar')

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '');
    if (href === '/' && (pathWithoutLocale === '/' || pathWithoutLocale === '')) {
      return true;
    }
    if (href === '/#projects' && pathWithoutLocale === '/') {
      return false;
    }
    if (href !== '/' && href !== '/#projects') {
      return pathWithoutLocale.startsWith(href);
    }
    return false;
  };

  // Cerrar el menú si se hace clic fuera del contenedor
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Gestionar el cierre del menú con la tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);


  return (
    <div className="md:hidden relative flex">
      <UiModeSwitcher />
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        aria-label={isOpen ? t('closeMenu') || 'Close menu' : t('openMenu') || 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <svg
          className="w-6 h-6 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="navigation"
          aria-label="Mobile navigation"
          className="flex flex-col absolute top-12 bg-white dark:bg-gray-800 shadow-lg rounded mt-2 right-0 z-10 animate-fadeIn border border-gray-200 dark:border-gray-700 min-w-[200px]"
        >
          <Link
            href="/"
            className={`px-4 py-2 ${
              isActive('/')
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMenu}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            {t('index')}
          </Link>
          <Link
            href="/#projects"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            {t('projects')}
          </Link>
          <Link
            href="/experience"
            className={`px-4 py-2 ${
              isActive('/experience')
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMenu}
            aria-current={isActive('/experience') ? 'page' : undefined}
          >
            {t('experience')}
          </Link>
          <Link
            href="/me"
            className={`px-4 py-2 ${
              isActive('/me')
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMenu}
            aria-current={isActive('/me') ? 'page' : undefined}
          >
            {t('aboutme')}
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 ${
              isActive('/contact')
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onClick={closeMenu}
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            {t('contact')}
          </Link>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
            <LocaleSwitcherSelect />
          </div>
        </div>
      )}
    </div>
  );
}

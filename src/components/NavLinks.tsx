'use client';

import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function NavLinks() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const links = [
    { href: '/', label: t('index'), key: 'index' },
    { href: '/#projects', label: t('projects'), key: 'projects' },
    { href: '/experience', label: t('experience'), key: 'experience' },
    { href: '/me', label: t('aboutme'), key: 'me' },
    { href: '/contact', label: t('contact'), key: 'contact' },
  ];

  const isActive = (href: string) => {
    // Remover el locale del pathname para comparar
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '');

    // Para el home
    if (href === '/' && (pathWithoutLocale === '/' || pathWithoutLocale === '')) {
      return true;
    }

    // Para proyectos (anchor link)
    if (href === '/#projects' && pathWithoutLocale === '/') {
      return false; // No marcar como activo si estamos en home
    }

    // Para otras páginas
    if (href !== '/' && href !== '/#projects') {
      return pathWithoutLocale.startsWith(href);
    }

    return false;
  };

  return (
    <>
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.key}
            href={link.href}
            className={`px-4 py-2 rounded transition-colors ${
              active
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

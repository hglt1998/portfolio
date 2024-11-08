import { useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import UiModeSwitcher from './UiModeSwitcher';
import { Link } from '@/i18n/routing';
import MobileMenu from './MobileMenu'; // Componente cliente

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md static bottom-0 z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold">
            <Link href="/" className="text-indigo-700 dark:text-indigo-300">
              Humberto López
            </Link>
          </div>

          {/* Componente cliente que gestiona el menú móvil */}
          <MobileMenu />

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('index')}
            </Link>
            <Link href="/#projects" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('projects')}
            </Link>
            <Link href="/experience" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('experience')}
            </Link>
            <Link href="/me" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('aboutme')}
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('contact')}
            </Link>
            <LocaleSwitcherSelect />
            <UiModeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

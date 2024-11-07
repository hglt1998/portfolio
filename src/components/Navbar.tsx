import { useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import UiModeSwitcher from './UiModeSwitcher';
import { Link } from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md static bottom-0 z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Título */}
          <div className="text-lg font-bold">
            <Link href="/" className="text-indigo-700 dark:text-indigo-300">
              Humberto López
            </Link>
          </div>

          {/* Menú desplegable para móviles */}
          <details className="md:hidden">
            <summary className="flex items-center cursor-pointer">
              <UiModeSwitcher />
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
            </summary>
            <div className="flex flex-col absolute top-0 bg-white dark:bg-gray-800 shadow-md rounded mt-2 right-5">
              <Link href="/" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                {t('index')}
              </Link>
              <Link href="/#projects" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                {t('projects')}
              </Link>
              <Link href="/me" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                {t('aboutme')}
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                {t('contact')}
              </Link>
              <LocaleSwitcherSelect />
            </div>
          </details>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('index')}
            </Link>
            <Link href="/#projects" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              {t('projects')}
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

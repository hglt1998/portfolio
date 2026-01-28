import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import UiModeSwitcher from './UiModeSwitcher';
import { Link } from '@/i18n/routing';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold">
            <Link href="/" className="text-indigo-700 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors">
              Humberto López
            </Link>
          </div>

          {/* Componente cliente que gestiona el menú móvil */}
          <MobileMenu />

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex space-x-2 items-center">
            <NavLinks />
            <LocaleSwitcherSelect />
            <UiModeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

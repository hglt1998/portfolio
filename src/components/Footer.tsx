import { Link } from "@/i18n/routing";
import GitHubIcon from "@/static/icons/GitHubIcon";
import LinkedInIcon from "@/static/icons/LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full static bottom-0 p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {year} Developed by Humberto López.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li><Link href="/portfolio" className="hover:underline mr-4 md:mr-6">About</Link></li>
        <li><Link target="_blank" href="https://github.com/hglt1998" className="hover:underline mr-4 md:mr-6 flex gap-2 items-center"><GitHubIcon />Github</Link></li>
        <li><Link target="_blank" href="https://www.linkedin.com/in/hglt1998/" className="hover:underline items-center mr-4 md:mr-6 flex gap-2"><LinkedInIcon />LinkedIn</Link></li>
        <li><Link href="mailto:humbertolopezdev@gmail.com" className="hover:underline flex items-center gap-2"><EnvelopeIcon className="size-6" />Email</Link></li>
      </ul>
    </footer>
  );
}

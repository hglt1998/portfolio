import { useTranslations } from "next-intl";
import Head from "next/head";
import Projects from '@/components/Projects';
import { Link } from "@/i18n/routing";
import TechnologiesBlock from "@/components/TechnologiesStack";

export default function Home({ params: { locale } }: any) {
  const t = useTranslations('Index');

  return (
    <div>
      <Head>
        <title>Mi Portfolio</title>
        <meta name="description" content="Portfolio personal de Humberto López" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-300">
        {/* Hero Section */}
        <section className="max-w-5xl h-[calc(100vh-4rem)] flex flex-col justify-center mx-auto text-center p-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
            {t('title')}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-300 dark:to-indigo-500">
              &lt;Humberto López/&gt;
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            {t('description')}
          </p>
          <div className="flex justify-center items-center gap-4 md:flex-row flex-col">
            <Link
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-200"
            >
              {t('projectsButton')}
            </Link>
            <Link
              href='/portfolio'
              className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2 hover:scale-105 transition-transform"
            >
              {t('portfolio')} &gt;
            </Link>
          </div>
        </section>

        {/* Techstack Section */}
        <section id="techstack" className="md:px-24 px-10 my-10 w-full">
          <h1 className="text-3xl text-center uppercase font-extrabold mb-5 text-indigo-700 dark:text-indigo-300 tracking-wide">
            {t('techstack')}
          </h1>
          <TechnologiesBlock />
        </section>
        {/* Projects Section */}
        <section id="projects" className="md:px-24 px-10 my-10 w-full">
          <h1 className="text-3xl text-center uppercase font-extrabold mb-5 text-indigo-700 dark:text-indigo-300 tracking-wide">
            {t('projects')}
          </h1>
          <Projects locale={locale} />
        </section>
      </main>
    </div>
  );
}

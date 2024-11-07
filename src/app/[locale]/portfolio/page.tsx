import { useTranslations } from 'next-intl';

export default function AboutPortfolioPage() {
  const t = useTranslations('About');

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 mt-9 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[calc(100vh-11rem)]">
      {/* Columna izquierda - Sidebar */}
      <aside className="col-span-1 bg-gray-100 dark:bg-gray-900 p-4 sm:mx-auto rounded-lg shadow-lg md:sticky top-6 h-full">
        <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
          {t('technologiesTitle')}
        </h2>
        <ul className="space-y-3">
          <li className="flex space-x-3">
            <span className="text-lg">⚛️</span>
            <span><strong>{t('nextjs')}</strong> - {t('nextjsDesc')}</span>
          </li>
          <li className="flex space-x-3">
            <span className="text-lg">🗄️</span>
            <span><strong>{t('notionAPI')}</strong> - {t('notionDesc')}</span>
          </li>
          <li className="flex space-x-3">
            <span className="text-lg">🌍</span>
            <span><strong>{t('i18n')}</strong> - {t('i18nDesc')}</span>
          </li>
          <li className="flex space-x-3">
            <span className="text-lg">🎨</span>
            <span><strong>{t('tailwind')}</strong> - {t('tailwindDesc')}</span>
          </li>
          <li className="flex space-x-3">
            <span className="text-lg">📩</span>
            <span><strong>{t('mail')}</strong> - {t('mailDesc')}</span>
          </li>
          <li className="flex space-x-3">
            <span className="text-lg">📡</span>
            <span><strong>{t('hosting')}</strong> - {t('hostingDesc')}</span>
          </li>
        </ul>
      </aside>

      {/* Columna derecha - Cuerpo */}
      <section className="col-span-2 space-y-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400">
            {t('title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t('intro')}
          </p>
        </header>

        {/* Funcionalidades Destacadas */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{t('featuresIntro')}</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>{t('featureMultilanguage')}</li>
            <li>{t('featureResponsive')}</li>
            <li>{t('featureSEO')}</li>
            <li>{t('featureDark')}</li>
          </ul>
        </section>

        {/* Ejemplos Visuales */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
            {t('aboutTitle')}
          </h2>
          <p className='text-gray-700 dark:text-gray-400'>{t('aboutParagraph')}</p>
          <p className='text-gray-700 dark:text-gray-400'>{t('aboutParagraph2')}</p>
        </section>

        {/* Proceso de Desarrollo */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
            {t('developmentProcessTitle')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t('developmentProcessText')}
          </p>
        </section>

        {/* Conclusión */}
        <footer className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400">
            {t('conclusion')}
          </p>
        </footer>
      </section>
    </main>
  );
}

// src/components/TechnologiesBlock.tsx

import { useTranslations } from 'next-intl';

const TechnologiesBlock = () => {
  const t = useTranslations('Technologies');

  // Lista de tecnologías con niveles de conocimiento en porcentaje (0 a 100)
  const technologies = [
    { name: "React", level: 100 },
    { name: "React Native", level: 100 },
    { name: "Expo", level: 100 },
    { name: "Typescript", level: 100 },
    { name: "Javascript", level: 100 },
    { name: "Angular", level: 100 },
    { name: "NextJS", level: 80 },
    { name: "Node", level: 100 },
    { name: ".NET", level: 60 },
    { name: "Java", level: 70 },
    { name: "Firebase", level: 100 },
    { name: "Mongodb", level: 75 },
    { name: "Stripe", level: 70 },
    { name: "Cloud", level: 80 },
    { name: "SQL", level: 75 },
    { name: "NoSQL", level: 70 },
    { name: "GraphQL", level: 45 },
    { name: "TailwindCSS", level: 100 },
    { name: "SASS", level: 85 },
    { name: "Machine Learning", level: 60 },
  ];

  return (
    <div className="lg:max-w-4xl sm:max-w-full mx-auto py-8 px-4 bg-indigo-100 dark:bg-gray-800 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        {t('technologiesTitle')}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t('technologiesIntro')}
      </p>

      <div className="grid grid-cols-1 w-full sm:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="text-left mb-4">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {tech.name}
            </span>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-2">
              <div
                className="h-4 rounded-full"
                style={{
                  width: `${tech.level}%`,
                  backgroundColor: '#6366F1',
                }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              {tech.level}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesBlock;

"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type LocaleParams = {
  locale: string;
};

export default function AboutPage() {
  const params = useParams<LocaleParams>();
  const locale = params.locale;
  const t = useTranslations("Me");

  return (
    <div className="container mx-auto px-6 py-12 md:flex md:space-x-8 lg:px-16">
      {/* Columna izquierda: Detalles personales */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/3 lg:w-1/4 p-4 bg-indigo-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <Image
            src="https://avatars.githubusercontent.com/u/62303659?v=4" // Reemplaza con la ruta de tu imagen
            alt="Profile photo"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-200">
            {t("name")}
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mt-2">
            {t("jobTitle")}
          </p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-start flex-col">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              {t("dateOfBirthLabel")}:
            </span>
            <span className="text-gray-800 justify-end dark:text-gray-300">
              {new Date(1998, 0, 22).toLocaleDateString(locale, { dateStyle: "medium" })}
            </span>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              {t("locationLabel")}:
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {t("location")}
            </span>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              {t("countryLabel")}:
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {t("country")}
            </span>
          </div>
          <div className="flex items-start flex-col ">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              {t("emailLabel")}:
            </span>
            <a
              href={`mailto:${t("email")}`}
              className="text-indigo-600 dark:text-indigo-400 hover:underline">
              {t("email")}
            </a>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              {t("hobbiesLabel")}:
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {t("hobbies")}
            </span>
          </div>
        </div>
      </div>

      {/* Columna derecha: Biografía */}
      <div className="md:w-2/3 lg:w-3/4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-gray-800 dark:text-gray-300">
        <h1 className="text-3xl font-bold text-indigo-900 dark:text-indigo-200 mb-4">
          {t("biographyTitle")}
        </h1>
        <p className="leading-relaxed mb-4">
          {t("biographyContent")}
        </p>
        <p className="leading-relaxed mb-4">
          {t("biographyContent2")}
        </p>
        <p className="leading-relaxed mb-4">
          {t("biographyContent3")}
        </p>
        <p className="leading-relaxed mb-4">
          {t("biographyContent4")}
        </p>
        <p className="leading-relaxed mb-4">
          {t("biographyContent5")}
        </p>
      </div>
    </div>
  );
}

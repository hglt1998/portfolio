// src/pages/experience.js

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";

export default function Experience() {
	const t = useTranslations("experience");

	const experiences = [
		{
			id: 5,
			company: t("company5"),
			role: t("role5"),
			description: t("description5"),
			startDate: t("startDate5"),
			endDate: t("endDate5"),
			logo: "https://refu.com/wp-content/uploads/2025/04/Logo.png"
		},
		{
			id: 1,
			company: t("company1"),
			role: t("role1"),
			description: t("description1"),
			startDate: t("startDate1"),
			endDate: t("endDate1"),
			logo: "https://www.montrel.es/wp-content/uploads/2025/05/Montrel_LOGO-FONDO-BLANCO-1-1-scaled.png"
		},
		{
			id: 2,
			company: t("company2"),
			role: t("role2"),
			description: t("description2"),
			startDate: t("startDate2"),
			endDate: t("endDate2"),
			logo: "https://www.deloitte.com/content/dam/assets-shared/icons/es/favicon.ico"
		},
		{
			id: 3,
			company: t("company3"),
			role: t("role3"),
			description: t("description3"),
			startDate: t("startDate3"),
			endDate: t("endDate3"),
			logo: "https://www.ayesa.com/wp-content/themes/ayesa/images/logo.svg"
		},
		{
			id: 4,
			company: t("company4"),
			role: t("role4"),
			description: t("description4"),
			startDate: t("startDate4"),
			endDate: t("endDate4"),
			logo: "https://www.emergya.com/themes/custom/da_vinci/emergya_Ayesa_logo.svg"
		}

		// Agrega más experiencias según sea necesario
	];

	return (
		<>
			<Head>
				<title>{t("pageTitle")}</title>
			</Head>

			<main className="container mx-auto px-4 py-8 lg:py-16">
				<h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">{t("pageTitle")}</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					{experiences.map((experience) => (
						<div key={experience.id} className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg transition transform hover:scale-105">
							<div className="flex items-center mb-4">
								<Image src={experience.logo} alt={`${experience.company} logo`} width={50} height={50} className="mr-4 rounded" />
								<div>
									<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{experience.company}</h2>
									<p className="text-sm text-gray-600 dark:text-gray-400">{experience.role}</p>
								</div>
							</div>

							<p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>

							<p className="text-sm mt-auto text-gray-500 dark:text-gray-500">
								{t("dateRange", {
									start: experience.startDate,
									end: experience.endDate
								})}
							</p>
						</div>
					))}
				</div>
				<div className="">
					<h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">{t("otherTitle")}</h1>
					<div className="flex gap-2 items-center">
						<p className="text-xl text-gray-800 dark:text-gray-200">{t("otherContent")}</p>
						<Link className="m-0 p-0 text-indigo-600 dark:text-indigo-300 hover:-translate-y-2 transition-all duration-200" href={"/#projects"}>
							{t("projects")}
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}

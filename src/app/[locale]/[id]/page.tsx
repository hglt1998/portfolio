"use client"
import { Link, usePathname } from "@/i18n/routing"
import { useEffect, useState } from "react"
import defaultImage from '@/static/placeholder.webp';
import Image from "next/image";
import { useTranslations } from "next-intl";
import ModalImage from "@/components/ModalImage";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function ProjectDetailPage() {

  const pathName = usePathname()

  const locale = window.location.pathname.split("/")[1];

  const t = useTranslations('Detail');

  const id = pathName.split("/")[1];

  const [project, setProject] = useState<any>({})
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getData = async () => {
    const response = await fetch(`/api/projects/${id}`)

    const { data } = await response.json()
    setProject(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const openModal = (url: string) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  const images = project.properties?.files.files || [];

  if (!project.properties) {
    return <div className="flex h-screen justify-center items-center"><svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
      <span className="sr-only">Loading...</span></div>
  }
  return (
    <div className="container flex flex-col mx-auto p-6 max-w-4xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mt-10 rounded-lg shadow-md">
      {project.properties.active.checkbox ? (<span className="self-end bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{t('active')}</span>) : (<span className="self-end bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{t('unactive')}</span>)}

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{project.properties.Name.title[0].plain_text}</h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{project.properties[locale + '_ShortDescription'].rich_text[0].plain_text}</p>
      </div>

      {/* Imagen de portada */}
      <div className="w-full h-64 relative mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image src={project.cover.file.url || defaultImage}
          alt="cover image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-xl drop-shadow-lg"
        />
      </div>
      {selectedImage && (<ModalImage selectedImage={selectedImage} closeModal={closeModal} />)}
      {/* Tecnologías */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-4">{locale === "es" ? "Tecnologías utilizadas" : "Technologies used"}</h3>
        <div className="flex flex-wrap gap-2">
          {project.properties.Tech_stack.multi_select.map((tech: any) => (
            <span key={tech.id} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* Descripción completa */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-4">{locale === "es" ? "Descripción" : "Description"}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.properties[locale + '_description'].rich_text[0].plain_text}</p>
      </section>
      {images.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-4">
            {locale === "es" ? "Galería de Imágenes" : "Image Gallery"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img: any, index: number) => (
              <div key={index} onClick={() => openModal(img.file.url)} className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={img.file.url}
                  alt={img.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-200 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}


      {/* Tags */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-4">{locale === "es" ? "Etiquetas" : "Tags"}</h3>
        <div className="flex flex-wrap gap-2">
          {project.properties?.Tags.multi_select.map((tag: any) => (
            <span key={tag.id} className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
              {tag.name}
            </span>
          ))}
        </div>
      </section>

      {/* Enlace al proyecto */}
      <div className="text-center">
        <Link rel="_noopener" target="_blank" className="flex text-center justify-center gap-3 items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors md:w-3/12 md:m-auto duration-200" href={project.properties?.Link.url || "#"}>
          {locale === "es" ? "Ver proyecto" : "View Project"}
          <ArrowTopRightOnSquareIcon className="size-6" />
        </Link>
      </div>
    </div>
  )
}
export default ProjectDetailPage  
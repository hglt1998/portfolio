import Image from "next/image";
import Chip from "./Chip";
import defaultImage from '@/static/placeholder.webp';
import { useTranslations } from "next-intl";
import { SignalSlashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function ProjectCard({ item, locale }: any) {

  const router = useRouter()
  const handleClick = () => {
    router.push(locale + "/" + item.id)
  }
  return (
    <div
      onClick={handleClick}
      key={item.id}
      className="bg-indigo-50 dark:bg-gray-800 dark:shadow-gray-900 rounded-lg min-h-full shadow-lg flex shadow-indigo-300 p-5 hover:bg-indigo-200 dark:hover:bg-gray-700 hover:cursor-pointer transition-transform transform hover:scale-105 duration-300"
    >
      {/* Contenedor de imagen con tamaño fijo */}
      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md drop-shadow-lg">
        <Image
          className="object-cover w-full h-full rounded-md"
          src={item.cover?.file.url || defaultImage}
          alt="cover image"
          width={64}
          height={64}
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex flex-col ml-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-indigo-800 dark:text-indigo-300 font-bold flex-1 uppercase text-lg">
            {item.properties.Name.title[0].plain_text}
          </h1>
          {/* Indicador de estado activo */}
          {item.properties.active.checkbox ? (
            <span className="animate-ping h-3 w-3 rounded-full bg-green-500"></span>
          ) : (
            <SignalSlashIcon className="w-5 h-5 text-red-500 dark:text-red-400" />
          )}
        </div>

        {/* Descripción corta */}
        <h2 className="text-indigo-800 dark:text-gray-300 text-sm mb-3">
          {item.properties[`${locale}_ShortDescription`].rich_text[0]?.plain_text}
        </h2>

        {/* Chips de etiquetas */}
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {item.properties.Tags.multi_select.map((tag: any, index: number) => (
            <Chip key={tag.id} info={tag} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

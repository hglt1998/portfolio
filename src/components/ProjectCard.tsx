'use client';

import Image from 'next/image';
import Link from 'next/link';
import Chip from './Chip';
import defaultImage from '@/static/placeholder.webp';
import { SignalSlashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useLocale } from 'next-intl';

type ProjectTag = {
  id: string;
  name: string;
  color: string;
};

type ProjectItem = {
  id: string;
  cover?: {
    file: {
      url: string;
    };
  };
  properties: {
    Name: {
      title: Array<{
        plain_text: string;
      }>;
    };
    active: {
      checkbox: boolean;
    };
    Tags: {
      multi_select: ProjectTag[];
    };
    [key: string]: any;
  };
};

type ProjectCardProps = {
  item: ProjectItem;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const locale = useLocale();
  const projectName = item.properties.Name.title[0]?.plain_text || 'Untitled Project';
  const shortDescriptionKey = `${locale}_ShortDescription`;
  const shortDescription = item.properties[shortDescriptionKey]?.rich_text?.[0]?.plain_text || '';

  return (
    <Link
      href={`/${locale}/${item.id}`}
      className='bg-indigo-50 dark:bg-gray-800 dark:shadow-gray-900 rounded-lg min-h-full shadow-lg flex shadow-indigo-300 p-5 hover:bg-indigo-200 dark:hover:bg-gray-700 transition-all transform hover:scale-[1.02] duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
      aria-label={`Ver detalles del proyecto ${projectName}`}>
      <div className='w-16 h-16 flex-shrink-0 overflow-hidden rounded-md drop-shadow-lg'>
        <Image
          className='object-cover w-full h-full rounded-md'
          src={imageError ? defaultImage : item.cover?.file.url || defaultImage}
          alt={`${projectName} cover`}
          width={64}
          height={64}
          onError={() => setImageError(true)}
        />
      </div>

      <div className='flex flex-col ml-4 flex-grow'>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='text-indigo-800 dark:text-indigo-300 font-bold flex-1 uppercase text-lg'>{projectName}</h2>
          {item.properties.active.checkbox ? (
            <span className='relative flex h-3 w-3' aria-label='Proyecto activo'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
            </span>
          ) : (
            <SignalSlashIcon className='w-5 h-5 text-red-500 dark:text-red-400' aria-label='Proyecto inactivo' />
          )}
        </div>

        <p className='text-indigo-800 dark:text-gray-300 text-sm mb-3'>{shortDescription}</p>

        <div className='flex flex-wrap gap-x-2 gap-y-1'>
          {item.properties.Tags.multi_select.map((tag: ProjectTag, index: number) => (
            <Chip key={tag.id} info={tag} index={index} />
          ))}
        </div>
      </div>
    </Link>
  );
}

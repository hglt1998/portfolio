'use client';

import { useEffect, useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

type NotionPage = {
  id: string;
  properties: {
    [key: string]: any;
  };
};

export default function ClientComponent({ locale }: any) {
  const [data, setData] = useState<NotionPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CardSkeleton = () => (
    <div className="bg-indigo-50 rounded-lg shadow-lg p-4 max-w-sm w-full mx-auto animate-pulse">
      <div className="flex">
        <div className="bg-slate-200 rounded-md w-24 h-14"></div>
        <div className="flex-1 space-y-4 ml-4">
          <div className="h-6 bg-slate-200 rounded w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
          <div className="flex gap-x-2">
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const results = await response.json();
        console.log(results);

        setData(results);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderedContent = useMemo(() => {
    if (loading) {
      return Array.from({ length: 3 }).map((_, index) => <CardSkeleton key={index} />);
    }

    return data.map((item) => (
      <div
        key={item.id}
        className="opacity-0 animate-fadeIn transition-opacity duration-500"
      >
        <ProjectCard item={item} locale={locale} />
      </div>
    ));
  }, [loading, data, locale]);

  if (error) return <div>Error: {error}</div>;

  return <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">{renderedContent}</div>;
}

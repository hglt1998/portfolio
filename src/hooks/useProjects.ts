import { useState, useEffect } from 'react';
import { searchProjects } from '@/services/projects';

interface Project {
  id: string;
  properties: { [key: string]: any };
}

export function useProjects() {
  const [data, setData] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await searchProjects();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { data, loading, error };
}

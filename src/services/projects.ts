export const searchProjects = async () => {
  try {
    const response = await fetch('/api/projects');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const json = await response.json()

    return json;
  } catch (error) {
    return error
  }
}
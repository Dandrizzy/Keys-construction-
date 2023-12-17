import { useQuery } from '@tanstack/react-query';
import { getProject } from '../../Services/apiProject';

export const useProject = () => {
  const {
    isLoading,
    data: project,
    error,
  } = useQuery({
    queryFn: getProject,
    queryKey: ['project'],
  });

  return { project, error, isLoading };
};

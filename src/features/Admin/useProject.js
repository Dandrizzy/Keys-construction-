import { useQuery } from '@tanstack/react-query';
import { getProject } from '../../Services/apiProject';

export const useProject = () => {
  const { data, error, isLoading } = useQuery({
    queryFn: getProject,
    queryKey: ['project'],
  });

  const projectLength = data?.length;
  return { data, isLoading, error, projectLength };
};

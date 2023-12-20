import { useQuery } from '@tanstack/react-query';
import { getSpecificProject } from '../../Services/apiProject';
import { useParams } from 'react-router-dom';

export const useSpecificProject = () => {
  const { projectId: id } = useParams();
  const { data: project, isLoading } = useQuery({
    queryFn: () => getSpecificProject(id),
    queryKey: ['project', id],
  });
  return { project, isLoading };
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject as deleteFn } from '../../Services/apiProject';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const useDeleteProject = () => {
  const { projectId } = useParams();
  const queryClient = useQueryClient();
  console.log(projectId, 'id');
  const {
    mutation: deleteProject,
    error,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: () => deleteFn(projectId),
    mutationKey: ['project'],
    onSuccess: () => {
      toast.success('Project successfully deleted');
      queryClient.invalidateQueries(['project', projectId]);
    },
    onError: (error) => toast.error('There is an error:', error.message),
  });

  console.log(error);

  return { deleteProject, isDeleting };
};

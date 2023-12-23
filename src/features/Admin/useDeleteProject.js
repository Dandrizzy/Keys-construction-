import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteProject as deleteFn } from '../../Services/apiProject';

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { mutation: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteFn(id),
    mutationKey: ['project'],
    onSuccess: () => {
      toast.success('Project successfully deleted');
      queryClient.invalidateQueries(['project']);
    },
    onError: (error) => {
      toast.error('There is an error:', error.message);
      throw new Error('There is an error:', error.message);
    },
  });

  return { deleteProject, isDeleting };
};

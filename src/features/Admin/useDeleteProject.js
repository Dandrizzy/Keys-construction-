import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteProject as deleteFn } from '../../Services/apiProject';

export function useDeleteProject() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProject } = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      toast.success('Cabin successfully deleted');

      queryClient.invalidateQueries({
        queryKey: ['project'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProject };
}

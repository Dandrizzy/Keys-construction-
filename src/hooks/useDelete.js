import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useDelete({ key, fn }) {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteFn } = useMutation({
    mutationFn: fn,
    onSuccess: () => {
      toast.success('Service successfully deleted');

      queryClient.invalidateQueries({
        queryKey: [key],
      });
    },
    onError: (err) => toast.error('Service could not be deleted', err.message),
  });

  return { isDeleting, deleteFn };
}

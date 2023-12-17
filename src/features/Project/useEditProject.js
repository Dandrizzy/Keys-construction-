import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useEditProject = () => {
  const queryClient = useQueryClient();
  const { mutate: editedProject, isLoading: isEditing } = useMutation({
    mutationFn: editedProject,
    onSuccess: () => {
      toast.success('Project successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['project'],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { editedProject, isEditing };
};

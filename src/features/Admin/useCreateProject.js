import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditProject } from '../../Services/apiProject';
import toast from 'react-hot-toast';

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { mutate: createProject, isLoading: isCreating } = useMutation({
    mutationFn: createEditProject,
    onSuccess: () => {
      toast.success('New Project successfully created');
      queryClient.invalidateQueries({ queryKey: ['project'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProject };
};

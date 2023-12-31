import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditProject } from '../../Services/apiProject';
import toast from 'react-hot-toast';

export const useEditProject = () => {
  const queryClient = useQueryClient();
  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationKey: ['project'],
    mutationFn: ({ newProjectData, id }) =>
      createEditProject(newProjectData, id),
    onSuccess: () => {
      toast.success('Project successfully edited');
      queryClient.invalidateQueries({ queryKey: ['project'] });
    },
    onError: (err) => toast.error(err.message, err.name),
  });

  return { isEditing, editProject };
};

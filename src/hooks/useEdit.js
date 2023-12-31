import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useEdit = ({ fn, key }) => {
  const queryClient = useQueryClient();
  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationKey: [key],
    mutationFn: ({ serviceData, id }) => fn(serviceData, id),
    onSuccess: () => {
      toast.success('Service successfully edited');
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: (err) => toast.error(err.message, err.name),
  });

  return { isEditing, edit };
};

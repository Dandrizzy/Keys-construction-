import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editFaq } from '../../Services/apiFaq';
import toast from 'react-hot-toast';

export function useEditFaq() {
  const queryClient = useQueryClient();

  const { mutate: editFaqs, isLoading: isEditing } = useMutation({
    mutationFn: ({ newFaqData, id }) => editFaq(newFaqData, id),
    onSuccess: () => {
      toast.success('Question successfully edited');
      queryClient.invalidateQueries({
        queryKey: ['faq'],
      });
    },
    onError: (err) => toast.error(err.message, 'there was an error'),
  });

  return { isEditing, editFaqs };
}

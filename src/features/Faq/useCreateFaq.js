import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFaq } from '../../Services/apiFaq';
import { toast } from 'react-hot-toast';

function useCreateFaq() {
  const queryClient = useQueryClient();
  const {
    mutate: addFaq,
    isPending,
    error,
  } = useMutation({
    mutationFn: createFaq,
    onSuccess: () => {
      toast.success('New question Successfully created');
      queryClient.invalidateQueries({ queryKey: ['faq'] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { addFaq, error, isPending };
}

export default useCreateFaq;

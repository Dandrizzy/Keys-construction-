import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage } from '../../Services/apiMessage';
import toast from 'react-hot-toast';

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  const {
    mutate: message,
    isPending: isSending,
    error,
  } = useMutation({
    mutationFn: (message) => sendMessage(message),
    // mutationKey: ['message'],
    onSuccess: () => {
      toast.success('Message successfully sent 📧');
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
    onError: (error) => {
      toast.error('Message not successfully sent ⛔', error.message);
    },
  });

  return { message, isSending, error };
};

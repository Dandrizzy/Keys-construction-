import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage as message } from '../../Services/apiMessage';
import toast from 'react-hot-toast';

export const useSendMessage = () => {
  const queryClient = useQueryClient();

  const { mutate: sendMessage, isLoading: isSending } = useMutation({
    mutationFn: message,
    onSuccess: () => {
      toast.success('Message successfully sent');
      queryClient.invalidateQueries(['messages']);
    },
    onError: (err) => toast.error(err.message),
  });

  return { sendMessage, isSending };
};

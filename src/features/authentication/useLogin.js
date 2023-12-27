import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../Services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/admin', { replace: true });
      console.log(user.user);
    },
    onError: (err) => {
      console.log('ERROR', err.message);
      toast.error('Provided email or password are incorrect - ' + err.message);
    },
  });

  return { login, isLoading };
}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../Services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLoginTwo() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    // Pass an asynchronous function as mutationFn
    mutationFn: async ({ email, password }) => {
      try {
        const user = await loginApi({ email, password });
        // Update user in the cache
        queryClient.setQueryData(['user'], user);
        // Redirect to '/admin' on successful login
        navigate('/admin', { replace: true });
        return user; // Return the user data to the React Query
      } catch (error) {
        // Handle errors
        console.error('Login Error:', error);
        throw error; // Rethrow the error to be caught by React Query's onError
      }
    },

    onSuccess: () => {
      // Optional: You can add logic to run after a successful mutation.
    },
    onError: (error) => {
      // Handle errors
      console.error('Login Error:', error.message);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}

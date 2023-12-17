import { useQuery } from '@tanstack/react-query';
import { getMessages } from '../../Services/apiMessage';

export function useMsg() {
  const { data, isLoading, error } = useQuery({
    queryFn: getMessages,
    queryKey: ['messages'],
  });

  const length = data && data?.length;
  return { data, isLoading, error, length };
}

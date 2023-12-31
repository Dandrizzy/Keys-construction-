import { useQuery } from '@tanstack/react-query';

export const useFetchId = ({ id, key, fn }) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => fn(id),
    queryKey: [key, id],
  });

  if (error) {
    console.log(error);
    throw new Error('There was an error loading data- ', error.message);
  }

  return { data, isLoading };
};

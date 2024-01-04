import { useQuery } from '@tanstack/react-query';

export const useFetchData = ({ key, fn }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`${key}`],
    queryFn: fn,
  });

  if (error) {
    console.log(error);
    throw new Error('There was an error loading data-', error.message);
  }

  const length = data?.length;

  return { data, isLoading, length };
};

import { useQuery } from '@tanstack/react-query';
import { getSpecificFaq } from '../../Services/apiFaq';
import { useParams } from 'react-router-dom';

export const useSpecificFaq = () => {
  const faqId = useParams();
  const id = Number(faqId.faqId);
  const { data, isLoading, error } = useQuery({
    queryFn: () => getSpecificFaq(id),
    queryKey: ['specificFaq', id],
  });

  return { data, isLoading, error };
};

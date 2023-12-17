import { useQuery } from '@tanstack/react-query';
import getFaq from '../../Services/apiFaq';

export function useFaq() {
  const {
    data: faq,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['faq'],
    queryFn: getFaq,
  });

  const faqLength = faq?.length;
  return { faq, isLoading, error, faqLength };
}

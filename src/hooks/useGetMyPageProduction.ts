import { useQuery } from 'react-query';
import { getMyPageProduction, InGetMyPageProductionTypes } from '@api/getMyPageProduction';

export default function useGetMyPageProduction() {
  const result = useQuery<InGetMyPageProductionTypes, Error>(['getMyPageProduction'], getMyPageProduction, {
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  // Log the data when it is available
  if (result.data) {
    console.log('데이터:', result.data);
  }

  return result;
}

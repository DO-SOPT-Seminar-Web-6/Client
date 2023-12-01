import { useQuery } from 'react-query';
import { DataTypes } from 'types/dataTypes';
import { getMyPageProduction } from '@api/getMyPageProduction';

export default function useGetMyPageProduction() {
  const result = useQuery<DataTypes[], Error>(['getMyPageProduction'], getMyPageProduction, {
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });

  return result;
}

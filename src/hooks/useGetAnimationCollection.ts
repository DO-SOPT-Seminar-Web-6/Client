import { useQuery } from 'react-query';
import { getAnimationCollection, DataTypes } from '@api/getAnimationCollection';

export default function useGetAnimationCollection() {
  const result = useQuery<DataTypes, Error>(['getAnimationCollection'], getAnimationCollection, {
    onError: (error) => {
      console.error('에러가 났음', error);
    },
  });
  return result;
}

import { useQuery } from 'react-query';
import getComment, { InCommentDataTypes } from '@api/getComment';

export default function useGetComment(sort: string) {
  const result = useQuery<InCommentDataTypes[], Error>(['getComment', sort], () => getComment(sort), {
    onSettled: () => {
      console.log('loading,,,');
    },

    onError: (error) => {
      console.error('에러가 났음', error);
    },
  });

  return result;
}

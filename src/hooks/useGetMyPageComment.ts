import { useQuery } from 'react-query';
import { CommentDataTypes } from 'types/commentDataTypes';
import { getMyPageComment } from '@api/getMyPageComment';

export default function useGetMyPageComment() {
  const result = useQuery<CommentDataTypes[], Error>(['getMyPageComment'], getMyPageComment, {
    refetchOnMount: 'always',
    onError: (error) => {
      console.error('에러 발생', error);
    },
  });

  return result;
}

import { postCollectionAnimationProps } from 'types/postCollectionAnimationTypes';
import { customAxios } from './customAxios';

export async function postCollectionAnimation(props: postCollectionAnimationProps) {
  const { userId, content } = props;
  const response = await customAxios.post('/api/collection/1', {
    userId: userId,
    content: content,
  });

  return response;
}

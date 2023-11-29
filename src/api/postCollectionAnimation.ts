import axios from 'axios';
import { postCollectionAnimationProps } from 'types/postCollectionAnimationTypes';

export async function postCollectionAnimation(props: postCollectionAnimationProps) {
  const { userId, content } = props;
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/api/collection/1`,
    {
      userId: userId,
      content: content,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
}

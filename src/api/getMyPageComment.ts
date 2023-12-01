import axios, {AxiosResponse} from 'axios';
import { CommentDataTypes } from 'types/commentDataTypes';

export interface InGetMyPageCommentTypes{
  status: number;
  message: string;
  data: CommentDataTypes[];
}

export async function getMyPageComment(): Promise<CommentDataTypes[]> {
  const response: AxiosResponse<InGetMyPageCommentTypes> = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/api/comment?sort=default`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const { data } = response?.data;
  return data;
}
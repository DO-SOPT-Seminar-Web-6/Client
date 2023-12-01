import { AxiosResponse } from 'axios';
import { customAxios } from './customAxios';

export interface InCommentDataTypes {
  imageUrl: string;
  name: string;
  star: number;
  content: string;
  likeCount: number;
  commentCount: number;
  isLike: boolean;
}

interface InGetCommentTypes {
  status: number;
  message: string;
  data: InCommentDataTypes[];
}

export default async function getComment(sort: string = 'default'): Promise<InCommentDataTypes[]> {
  const response: AxiosResponse<InGetCommentTypes> = await customAxios.get('/api/comment', {
    params: {
      sort,
    },
  });

  const { data } = response?.data;

  return data;
}

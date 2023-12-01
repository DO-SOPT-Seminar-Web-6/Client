import { AxiosResponse } from 'axios';
import { RepliesTypes } from 'types/repliesTypes';
import { customAxios } from './customAxios';

export interface DataTypes {
  title: string;
  replyCount: number;
  replies: RepliesTypes[];
}

interface GetAnimationTypes {
  status: number;
  message: string;
  data: DataTypes;
}

export async function getAnimationCollection(): Promise<DataTypes> {
  const response: AxiosResponse<GetAnimationTypes> = await customAxios.get('/api/collection/1', {});

  const { data } = response?.data;
  return data;
}

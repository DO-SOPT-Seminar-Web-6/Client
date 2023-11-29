import axios, { AxiosResponse } from 'axios';
import { RepliesTypes } from 'types/repliesTypes';

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
  const response: AxiosResponse<GetAnimationTypes> = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/api/collection/1`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const { data } = response?.data;
  return data;
}

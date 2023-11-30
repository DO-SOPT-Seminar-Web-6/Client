import axios, { AxiosResponse } from 'axios';
import { DataTypes } from 'types/dataTypes';

export interface InGetMyPageProductionTypes {
  status: number;
  message: string;
  data: DataTypes[];
}
export async function getMyPageProduction(): Promise<any> {
  const response: AxiosResponse<InGetMyPageProductionTypes> = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/api/production`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const { data } = response?.data;
  return data;
}

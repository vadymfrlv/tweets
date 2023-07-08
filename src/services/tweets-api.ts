import axios, { AxiosResponse } from 'axios';

import { User } from '../types/types';
import { API_URL } from '../config/constants';

export const fetchData = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await axios.get(API_URL, { responseType: 'json' });
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

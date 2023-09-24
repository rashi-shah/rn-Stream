import {instance} from '../config';
import {UserType} from '../types';

interface SupportType {
  text: string;
  url: string;
}
interface APIDataType {
  data: {
    data: UserType[];
    page: number;
    per_page: number;
    support: SupportType;
    total: number;
    total_pages: number;
  };
}
interface FetchReturnType {
  data: UserType[];
  page: number;
  per_page: number;
  support: SupportType;
  total: number;
  total_pages: number;
}

const fetchData = async (endpoint: string): Promise<FetchReturnType> => {
  const result: APIDataType = await instance.get(endpoint);
  return result.data;
};

const deleteData = async (endpoint: string): Promise<object> => {
  const result = await instance.delete(endpoint);
  return result.data;
};

const setData = async (endpoint: string, body: object): Promise<object> => {
  const result = await instance.post(endpoint, body);
  return result.data;
};

const updateData = async (endpoint: string, body: object): Promise<object> => {
  const result = await instance.put(endpoint, body);
  return result.data;
};

export {updateData, fetchData, deleteData, setData};

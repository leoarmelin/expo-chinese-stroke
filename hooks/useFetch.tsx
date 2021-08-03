import useSWR from 'swr';
import { api } from '../services/api';

export function useFetch<T>(
  url: string | null,
  params: { [key: string]: string } = {},
) {
  const { data, error, mutate } = useSWR(url, async fetchUrl => {
    const { data: responseData } = await api.get<T>(fetchUrl, {
      params,
    });
    return responseData;
  });

  return { error, data, url, mutate };
}

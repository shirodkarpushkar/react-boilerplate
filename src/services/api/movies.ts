import { useQuery } from 'react-query';
import { getVariableFromEnv } from 'utils/config';
import { APIParams } from './typings';

const BASE_URL = getVariableFromEnv('BASE_URL');
const apikey = getVariableFromEnv('API_KEY');

export const getTopRatedMovies = async (params: APIParams) => {
  const res = await fetch(
    `${BASE_URL}/tv/top_rated?${new URLSearchParams({
      api_key: apikey,
      ...params,
    })}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  const result = await res.json();

  return result;
};

export const useTopRatedMovies = (params: APIParams) =>
  useQuery(['top_rated_movies', params], () => getTopRatedMovies(params));

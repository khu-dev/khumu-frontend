import axios, { AxiosResponse } from 'axios';
import { BASE_URI } from '@config/baseURI';

import { accesskey } from '@config/_key';
// import { accesskey } from '@config/key';

type Board =
  | 'following'
  | 'my'
  | 'bookmarked'
  | 'like'
  | 'commented'
  | 'hot'
  | '';

type FetchArticleList = (
  token: string,
  board: Board,
  size: number,
  page: number,
) => Promise<AxiosResponse<any>>;

export const fetchArticleList: FetchArticleList = (
  token = accesskey,
  board,
  size,
  page,
) =>
  axios.get(BASE_URI + `/articles?board=${board}&size=${size}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const fetchArticleByNumber = (number: number) =>
  axios.get(BASE_URI + `articles/${number}`);

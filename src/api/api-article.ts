import axios, { AxiosResponse } from 'axios';
import { BASE_URI } from '@config/baseURI';

type Board = 'following' | 'my' | 'bookmarked' | 'like' | 'commented' | 'hot' | '';

type FetchArticleList = ({
  board,
  size,
  page,
}: {
  board: Board;
  size: number;
  page: number;
}) => Promise<AxiosResponse<any>>;

export const fetchArticleList: FetchArticleList = ({ board, size, page }) =>
  axios.get(`${BASE_URI}/articles?board=${board}&size=${size}&page=${page}`);

export const fetchArticleByNumber = ({ id }: { id: number }) =>
  axios.get(`${BASE_URI}/articles/${id}`);

export const fetchArticlesHot = () =>
  axios.get(`${BASE_URI}/articles?board=hot&size=10`);

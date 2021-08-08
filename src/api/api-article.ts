import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

// type Board = 'following' | 'my' | 'bookmarked' | 'like' | 'commented' | 'hot' | '';

export const fetchArticles = {
  list: ({ board, size, page }) =>
    axios.get(`${BASE_URI}/articles?board=${board}&size=${size}&page=${page}`),
  id: ({ id }: { id: number }) => axios.get(`${BASE_URI}/articles/${id}`),
  hot: () => axios.get(`${BASE_URI}/articles?board=hot&size=10`),
};

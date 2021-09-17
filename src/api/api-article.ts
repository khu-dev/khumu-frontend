import { webClient } from 'src/module';

// type Board = 'following' | 'my' | 'bookmarked' | 'like' | 'commented' | 'hot' | '';

export const fetchArticles = {
  list: ({ board, size, page }) =>
    webClient.get(`/articles?board=${board}&size=${size}&page=${page}`),
  id: ({ id }: { id: number }) => webClient.get(`/articles/${id}`),
  hot: () => webClient.get(`/articles?board=hot&size=10`),
};

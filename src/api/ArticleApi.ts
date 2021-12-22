import { webClient } from 'src/module';

export const ArticleApi = {
  hot: () => webClient.get(`/articles?board=hot&size=10`),
};

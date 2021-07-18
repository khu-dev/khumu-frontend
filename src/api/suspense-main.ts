import { wrapPromise } from 'src/utils/functions';
import { fetchArticlesHot } from './api-article';

export const fetchMain = () => {
  let hotArticles = fetchArticlesHot();

  return {
    hotArticles: wrapPromise(hotArticles),
  };
};

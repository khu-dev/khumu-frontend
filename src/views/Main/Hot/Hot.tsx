import { fetchArticles } from '@api/api-article';
import { useFetchAxios } from '@hooks/fetch';

const Hot = () => {
  const { result } = useFetchAxios({
    func: fetchArticles.hot,
  });

  const list = result?.data?.data?.data || [];

  console.log('hotdata', list);

  return <div>hot</div>;
};

export default Hot;

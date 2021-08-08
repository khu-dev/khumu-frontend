import { fetchArticles } from '@api/api-article';
import { useFetchAxios } from '@hooks/fetch';

import * as cs from '../common.styled';
import * as s from './styled';

const Hot = () => {
  const { result } = useFetchAxios({
    func: fetchArticles.hot,
  });

  const list: Array<any> = result?.data?.data?.data || Array(3).fill(null);
  console.log(list);

  return (
    <cs.MainSection>
      <cs.Title title={'실시간 인기 글'} />
      {list.map((_, idx) => (
        <s.HotItem key={idx}>
          <s.Author></s.Author>
          <s.Title></s.Title>
          <s.Content></s.Content>
        </s.HotItem>
      ))}
    </cs.MainSection>
  );
};

export default Hot;

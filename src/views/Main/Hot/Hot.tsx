import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdComment } from 'react-icons/md';

import { fetchArticles } from '@api/api-article';
import LinkIcon from '@components/Link';
import { useFetchAxios } from '@hooks/fetch';
import { HotArticle } from '@interface/response-hot';
import { calculateDayDiff } from '@utils/day';

import * as cs from '../common.styled';
import * as s from './styled';

const Hot = () => {
  const { result } = useFetchAxios({
    func: fetchArticles.hot,
  });

  const hots: Array<HotArticle> = result?.data?.data?.data || Array(3).fill(null);
  const now = new Date();
  const year = now.getFullYear();

  return (
    <cs.MainSection>
      <LinkIcon pathname={`/articles?board=hot`}>
        <cs.Title title={'실시간 인기 글'} />
      </LinkIcon>
      {hots.slice(0, 3).map((hot, idx) => (
        <Link key={hot?.id || idx} href={`/articles/${hot?.id}`}>
          <s.HotItem>
            <s.Author>{hot?.author?.nickname}</s.Author>
            <s.TimeAgo>
              {calculateDayDiff({ day1: now, day2: year + hot?.created_at })}
            </s.TimeAgo>
            <s.Title>{hot?.title}</s.Title>
            <s.Content>{hot?.content}</s.Content>
            <s.BoardName>{hot?.board_display_name}</s.BoardName>
            <s.Summary>
              <s.SummaryItem>
                <AiOutlineHeart css={s.iconStyle} />
                {hot?.like_article_count}
              </s.SummaryItem>
              <s.SummaryItem>
                <MdComment css={s.iconStyle} />
                {hot?.comment_count}
              </s.SummaryItem>
            </s.Summary>
          </s.HotItem>
        </Link>
      ))}
    </cs.MainSection>
  );
};

export default Hot;

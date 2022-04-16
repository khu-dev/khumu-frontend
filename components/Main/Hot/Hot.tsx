import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdComment } from 'react-icons/md'

import { HotArticle } from '@interface/HotArticle'
import { calculateDayDiff } from '@utils/day'

import * as cs from '../common.styled'
import * as s from './styled'
import { useLoading } from '@context/Loading'

const initialHots = Array(3).fill({
  author: {
    username: '',
    nickname: '',
    state: '',
  },
  board_display_name: '',
  comment_count: 0,
  content: '',
  created_at: '',
  id: 0,
  like_article_count: 0,
  title: '',
})

interface Props {
  hots: HotArticle[]
}

const Hot = ({ hots }: Props) => {
  const { isLoading } = useLoading()
  const now = new Date()

  const _hotArticles = isLoading ? initialHots : hots.slice(0, 3)

  return (
    <cs.MainSection>
      <cs.IconTitle
        pathname="/articles?board=hot"
        title="실시간 인기 글"
        isLoading={isLoading}
      />
      {_hotArticles.map((hot, idx) => (
        <Link
          key={hot?.id || idx}
          href={isLoading ? '#' : `/articles/${hot?.id}`}
        >
          <s.Anchor>
            <s.HotItem isLoading={isLoading}>
              <s.Author isLoading={isLoading}>{hot?.author?.nickname}</s.Author>
              <s.TimeAgo isLoading={isLoading}>
                {calculateDayDiff({ day1: now, day2: '20' + hot?.created_at })}
              </s.TimeAgo>
              <s.Title isLoading={isLoading}>{hot?.title}</s.Title>
              <s.Content isLoading={isLoading}>{hot?.content}</s.Content>
              <s.BoardName isLoading={isLoading}>
                {hot?.board_display_name}
              </s.BoardName>
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
          </s.Anchor>
        </Link>
      ))}
    </cs.MainSection>
  )
}

export default Hot

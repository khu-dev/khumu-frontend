import React, { useState } from 'react'
import styled from '@emotion/styled'

import InputProvider from '@context/Feed'
import { color } from '@constants/theme'
import { Schedule } from '@interface/Schedule'

import FeedContent from './FeedContent'
import FeedInput from './FeedInput'
import { css } from '@emotion/react'
import { useLoading } from '@context/Loading'

const initialSchedule = [
  {
    id: 1,
    starts_at: String(Date.now()),
    ends_at: String(Date.now()),
    title: '',
  },
  {
    id: 2,
    starts_at: String(Date.now()),
    ends_at: String(Date.now()),
    title: '',
  },
  {
    id: 3,
    starts_at: String(Date.now()),
    ends_at: String(Date.now()),
    title: '',
  },
]

interface Props {
  schedules: Schedule[]
}

const Feed = ({ schedules }: Props) => {
  const { isLoading } = useLoading()
  const [isMore, setMore] = useState(false)

  const handleMore = () => {
    setMore((prev) => !prev)
  }
  const scheduleList = (isLoading ? initialSchedule : schedules).slice(
    0,
    isMore ? 3 : 3,
  )

  return (
    <Container isMore={isMore}>
      <InputProvider>
        <FeedInput />
      </InputProvider>
      <FeedContent.Tab />
      <FeedContent isMore={isMore}>
        <FeedContent.Schedule isMore={isMore}>
          {scheduleList.map((schedule, idx) => (
            <div
              key={schedule.id}
              css={css`
                margin-bottom: 12px;

                ${!isMore &&
                idx > 0 &&
                css`
                  opacity: 0;
                `};
                transition: opacity 0.5s;
              `}
            >
              <FeedContent.Title title={schedule.title} />
              <FeedContent.Date
                isValid={schedule.title !== ''}
                isMore={isMore}
                start={schedule.starts_at}
                end={schedule.ends_at}
              />
            </div>
          ))}
          <FeedContent.Link
            title={isMore ? '숨기기' : '더보기'}
            handleClick={handleMore}
          />
        </FeedContent.Schedule>
      </FeedContent>
    </Container>
  )
}

export default Feed

const Container = styled.div<{ isMore: boolean }>`
  width: 100%;
  height: 204px;

  position: relative;

  background-color: ${color.main};

  ${({ isMore }) =>
    isMore &&
    css`
      height: 340px;
    `};

  transition: height 0.5s;
`

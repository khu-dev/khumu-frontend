//@ts-nocheck

import React, { useState } from 'react'
import styled from '@emotion/styled'

import FeedInputProvider from '@context/Feed/Input'
import { color } from '@src/constants/theme'
import { Schedule } from '@interface/Schedule'

import FeedContent from './FeedContent'
import FeedInput from './FeedInput'

const initialSchedule = [
  {
    id: 1,
    starts_at: String(Date.now()),
    ends_at: String(Date.now()),
    title: '',
  },
]

interface Props {
  schedules: Schedule[]
}

const Feed = ({ schedules = initialSchedule }: Props) => {
  const [isMore, setMore] = useState(false)

  const handleMore = () => {
    setMore((prev) => !prev)
  }
  const scheduleList = schedules.slice(0, isMore ? 3 : 1)

  return (
    <Container>
      <FeedInputProvider>
        <FeedInput>
          <FeedInput.TextArea placeholder={'자유로운 피드백 부탁드립니다'} />
        </FeedInput>
      </FeedInputProvider>
      <FeedContent isMore={isMore}>
        <FeedContent.Tab tab={{ title: '학사 일정' }} />
        <FeedContent.Schedule isMore={isMore}>
          {scheduleList.map((schedule) => (
            <React.Fragment key={schedule.id}>
              <FeedContent.Title title={schedule.title} isMore={isMore} />
              <FeedContent.Date
                isValid={schedule.title !== ''}
                isMore={isMore}
                start={schedule.starts_at}
                end={schedule.ends_at}
              />
            </React.Fragment>
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

const Container = styled.div`
  width: 100%;
  height: min-content;
  min-height: 206px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;

  background-color: ${color.main};
`

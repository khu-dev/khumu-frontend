/**
 * @description main 화면의 상단 피드
 */
import React, { useState } from 'react';

// import FeedTitle from './FeedTitle';
import FeedInputProvider from '@context/Feed/Input';
import FeedContent from './FeedContent';
import FeedInput from './FeedInput';
import { Schedule } from '@interface/Schedule';

const initialSchedule = [
  {
    id: 1,
    starts_at: String(Date.now()),
    ends_at: String(Date.now()),
    title: '',
  },
];

interface Props {
  schedules: Schedule[];
}

const Feed = ({ schedules = initialSchedule }: Props) => {
  const [isMore, setMore] = useState(false);

  const handleMore = () => {
    setMore((prev) => !prev);
  };
  const scheduleList = schedules.slice(0, isMore ? 3 : 1);

  return (
    <div className={'main-feed-container'}>
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
    </div>
  );
};

export default Feed;

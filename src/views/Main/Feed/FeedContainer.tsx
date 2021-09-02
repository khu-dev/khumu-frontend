/**
 * @description main 화면의 상단 피드
 */
import { useEffect, useState } from 'react';

// import FeedTitle from './FeedTitle';
import { fetchSchedule } from '@api/api-schedules';
import FeedInputProvider from '@context/Feed/Input';
import FeedContent from './FeedContent';
import FeedInput from './FeedInput';

const initialSchedule = {
  id: 1,
  starts_at: Date.now(),
  ends_at: Date.now(),
  title: '',
};

const Feed = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchSchedule();

      if (data) {
        setSchedule(data[0]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={'main-feed-container'}>
      <FeedInputProvider>
        <FeedInput>
          <FeedInput.Title title={'쿠뮤에게 말해줘'} />
          <FeedInput.TextArea placeholder={'불편한 사항을 말해줘'} />
        </FeedInput>
      </FeedInputProvider>
      <FeedContent>
        <FeedContent.Tab tab={{ title: '학사 일정' }} />
        <FeedContent.Schedule>
          <FeedContent.Title title={schedule.title} />
          <FeedContent.Date
            isValid={schedule.title !== ''}
            start={schedule.starts_at}
            end={schedule.ends_at}
          />
          <FeedContent.Link title={'바로가기'} />
        </FeedContent.Schedule>
      </FeedContent>
    </div>
  );
};

export default Feed;

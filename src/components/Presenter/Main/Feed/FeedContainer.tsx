/**
 * @description main 화면의 상단 피드
 */

import FeedTitle from './FeedTitle';
import FeedContent from './FeedContent';

export default function Feed() {
  return (
    <div className={'main-feed-container'}>
      <FeedTitle title={'나의 피드'} />
      <FeedContent
        feedList={[
          {
            title: '오늘의 강의',
            id: 'lecture',
          },
          { title: '학사 일정', id: 'calender' },
        ]}
      />
    </div>
  );
}

/**
 * @description main 화면의 상단 피드
 */

// import FeedTitle from './FeedTitle';
import FeedContent from './FeedContent';
import FeedInput from './SearchArea';

const Feed = ({ schedule }) => (
  <div className={'main-feed-container'}>
    <FeedInput />
    <FeedContent tab={{ title: '학사 일정' }} schedule={schedule} />
  </div>
);

export default Feed;

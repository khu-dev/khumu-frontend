import FeedTab from './FeedTab';
import LectureName from './Lecture/Name';
import LectureDescription from './Lecture/Description';
import { LectureLink } from './Lecture/Link';

const FeedContent = ({ tab }) => {
  const handleShortCut = () => {};

  return (
    <div className={'main-feed-content-container'}>
      <FeedTab tab={tab} />
      <div className={'main-feed-content'}>
        <LectureName name={'산업디자인사'} />
        <LectureDescription description={'7월 7일(수) ~ 7월 12일(월)까지'} />
        <LectureLink title={'바로가기'} handleClick={handleShortCut} />
      </div>
    </div>
  );
};

export default FeedContent;

import FeedTab from './FeedTab';
import LectureName from './Lecture/Name';
import LectureDescription from './Lecture/Description';
import { LectureLink } from './Lecture/Link';
import { formatMonthDayDate } from 'src/utils/day';

const FeedContent = ({ tab, schedule }) => {
  const handleShortCut = () => {};

  const startDate = formatMonthDayDate(schedule.starts_at);
  const endDate = formatMonthDayDate(schedule.starts_at);

  return (
    <div className={'main-feed-content-container'}>
      <FeedTab tab={tab} />
      <div className={'main-feed-content'}>
        <LectureName name={schedule.title} />
        <LectureDescription description={`${startDate} ~ ${endDate}까지`} />
        <LectureLink title={'바로가기'} handleClick={handleShortCut} />
      </div>
    </div>
  );
};

export default FeedContent;

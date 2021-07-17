import FeedTab from './FeedTab';
import ScheduleTitle from './Schedule/Title';
import ScheduleDate from './Schedule/Date';
import ScheduleShortCut from './Schedule/ShortCut';

const Schedule = ({ children }) => (
  <div className={'main-feed-content'}>{children}</div>
);

const FeedContent = ({ children }) => (
  <div className={'main-feed-content-container'}>{children}</div>
);

FeedContent.Tab = FeedTab;
FeedContent.Schedule = Schedule;
FeedContent.Title = ScheduleTitle;
FeedContent.Date = ScheduleDate;
FeedContent.Link = ScheduleShortCut;

export default FeedContent;

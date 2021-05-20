import moment from 'moment';
import { convertDate } from '@components/utils/functions';
import { feedListState, TabType } from './type';

interface FeedTabProps {
  feedList: Array<feedListState>;
  handleTab: (e: React.MouseEvent<HTMLElement>) => void;
  currentTab: TabType;
}

export default function FeedTab({
  feedList,
  handleTab,
  currentTab,
}: FeedTabProps) {
  const now = Date.now();
  const formatMonthAndDay = moment(now).format('M/DD');
  const formatDate = convertDate[moment(now).format('ddd')];

  return (
    <div className={'main-feed-tab-menu'}>
      <div className={'feed-tab-container'}>
        {feedList.map(({ title, id }: feedListState) => (
          <div
            key={title}
            className={
              'feed-tab ' + (currentTab === id ? 'feed-tab-active' : '')
            }
            id={id}
            onClick={handleTab}
          >
            {title}
          </div>
        ))}
      </div>
      <div className={'feed-tab-date'}>
        [ {formatMonthAndDay} {formatDate} ]
      </div>
    </div>
  );
}

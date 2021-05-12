import moment from 'moment';
import { convertDate } from '@components/utils/convert.date';

export default function FeedTab({
  feedList,
  handleTab,
}: {
  feedList: Array<string>;
  handleTab: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const now = Date.now();
  const formatMonthAndDay = moment(now).format('M/DD');
  const formatDate = convertDate[moment(now).format('ddd')];

  return (
    <div>
      {feedList.map((title: string) => (
        <div key={title} onClick={handleTab}>
          {title}
        </div>
      ))}
      <div>
        [ {formatMonthAndDay} {formatDate} ]
      </div>
    </div>
  );
}

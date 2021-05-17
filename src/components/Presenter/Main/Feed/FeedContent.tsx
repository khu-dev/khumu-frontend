import FeedLecture from './FeedLecture';
import { TabType } from './type';
import FeedTab from './FeedTab';
import { useState } from 'react';

export default function FeedContent() {
  const [currentTab, setCurrentTab] = useState<TabType>('lecture');

  const handleTab = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { id: nextState } = target;

    setCurrentTab(nextState as TabType);
  };

  return (
    <div className={'main-feed-content-container'}>
      <FeedTab
        feedList={[
          {
            title: '오늘의 강의',
            id: 'lecture',
          },
          { title: '학사 일정', id: 'calender' },
        ]}
        handleTab={handleTab}
        currentTab={currentTab}
      />
      {currentTab === 'lecture' ? (
        <FeedLecture isLoading={true} />
      ) : (
        <FeedLecture isLoading={true} />
      )}
    </div>
  );
}

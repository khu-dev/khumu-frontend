import React, { useState } from 'react';

import { feedListState, TabType } from './type';

import FeedTab from './FeedTab';
import LectureName from './Lecture/Name';
import LectureDescription from './Lecture/Description';
import Skeleton from '@components/Skeleton';
import SkeletonMainFeed from '@components/Skeleton/Main/Feed';

interface FeedContentProps {
  feedList: Array<feedListState>;
}

function FeedLecture() {
  return (
    <>
      <LectureName name={'산업디자인사'} time={'09:00 ~ 13:45'} />
      <LectureDescription
        description={['수업종료까지', ' 1시간 45분 ', '남았습니다']}
      />
    </>
  );
}

export default function FeedContent({ feedList }: FeedContentProps) {
  const [currentTab, setCurrentTab] = useState<TabType>('lecture');

  const handleTab = ({ target }: React.MouseEvent<HTMLElement>) => {
    const { id: nextState } = target as HTMLElement;

    setCurrentTab(nextState as TabType);
  };

  return (
    <>
      <div className={'main-feed-content-container'}>
        <FeedTab
          feedList={feedList}
          handleTab={handleTab}
          currentTab={currentTab}
        />
        <div className={'main-feed-content'}>
          {currentTab === 'lecture' ? (
            <Skeleton
              isLoading={true}
              render={() => <FeedLecture />}
              Skeleton={SkeletonMainFeed}
            />
          ) : (
            <FeedLecture />
          )}
        </div>
      </div>
    </>
  );
}

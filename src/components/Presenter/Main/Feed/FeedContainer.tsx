/**
 * @description main 화면의 상단 피드
 */

import React, { useState } from 'react';

import { TabType } from './type';

import FeedTitle from './FeedTitle';
import FeedTab from './FeedTab';
import FeedContent from './FeedContent';

export default function Feed() {
  const [currentTab, setCurrentTab] = useState<TabType>('lecture');

  const handleTab = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { id: nextState } = target;

    setCurrentTab(nextState as TabType);
  };

  return (
    <div className={'main-feed-container'}>
      <FeedTitle title={'나의 피드'} />
      <FeedTab feedList={['오늘의 강의', '학사 일정']} handleTab={handleTab} />
      <FeedContent currentTab={currentTab} />
    </div>
  );
}

/**
 * @description main 화면의 상단 피드
 */

import React, { useState } from 'react';

import FeedPresenter from './FeedPresenter';

const FeedContainer = () => {
  const [selected, setSelected] = useState('lecture');

  const isMain = true;
  const tabList = ['lecture', 'calender'];

  const onTabClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (!tabList.includes(target.id)) return;
    setSelected(target.id);
  };

  return <FeedPresenter {...{ isMain, selected, onTabClick }} />;
};

export default FeedContainer;

/**
 * @description main 화면의 상단 피드
 */

import React, { useState } from 'react';

import { FeedPresenter } from './Feed.presenter';

const tabList = ['lecture', 'calender'];

const FeedContainer = () => {
  const isMain = true;
  const [selected, setSelected] = useState('lecture');

  const onTabClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!tabList.includes(e.target.id)) return;
    setSelected(e.target.id);
  };

  const presenterProps = { isMain, selected, onTabClick };

  return <FeedPresenter {...presenterProps} />;
};

export default FeedContainer;

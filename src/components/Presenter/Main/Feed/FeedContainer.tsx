/**
 * @description main 화면의 상단 피드
 */

import React, { useState } from 'react';
import { BsCaretRightFill } from 'react-icons/bs';

import * as ms from '../MainStyled';
import { TitleContainer, XLTitle } from '@components/utils/styles/Title';
import { ItemContainer } from '@components/Presenter/Main/items/itemsStyled';
import { theme } from '@constants/theme';

import Lecture from '../items/Lecture';

type TabType = 'lecture' | 'calender';

function FeedContent({ selected }: { selected: TabType }) {
  return (
    <>
      <span id="lecture" />
      <span id="calender" />
      {selected === 'lecture' ? (
        <Lecture isLoading={true} />
      ) : (
        <Lecture isLoading={true} />
      )}
      <span id="date" />
      <span />
    </>
  );
}

function FeedTitle() {
  return (
    <TitleContainer isMain>
      <XLTitle color={theme.color.white}>나의 피드</XLTitle>
      <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
    </TitleContainer>
  );
}

export default function Feed() {
  const [currentTab, setCurrentTab] = useState<TabType>('lecture');

  const onTabClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { id: nextState } = target;

    setCurrentTab(nextState as TabType);
  };

  const isMain = true;

  return (
    <ms.FeedContainer>
      <FeedTitle />
      <ItemContainer
        isMain={isMain}
        selected={currentTab}
        onClick={onTabClick}
        height="140px"
      >
        <FeedContent selected={currentTab} />
      </ItemContainer>
    </ms.FeedContainer>
  );
}

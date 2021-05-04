/**
 * @description main 피드의 presenter
 *              오늘의 강의(lecture) or 학사일정(calender) 반환
 */

import React from 'react';
import { BsCaretRightFill } from 'react-icons/bs';
import { ItemContainer } from '@components/Main/items/itemsStyled';
import { TitleContainer, XLTitle } from '@components/utils/styles/Title';
import { theme } from '@constants/theme';
import * as ms from '../MainStyled';

import { FeedPropsType } from '@interfaces/components';

import Lecture from './Lecture';

interface FeedTitleProps {
  isMain: boolean;
}

/**
 * @description 메인 피드의 타이틀 컴포넌트
 */
const FeedTitle = React.memo(({ isMain }: FeedTitleProps) => (
  <TitleContainer isMain={isMain}>
    <XLTitle color={theme.color.white}>나의 피드</XLTitle>
    <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
  </TitleContainer>
));

export default function FeedPresenter({
  isMain,
  selected,
  onTabClick: onClick,
}: FeedPropsType) {
  return (
    <ms.FeedContainer>
      <FeedTitle isMain={isMain} />
      <ItemContainer
        isMain={isMain}
        selected={selected}
        onClick={onClick}
        height="140px"
      >
        <span id="lecture" />
        <span id="calender" />
        {selected === 'lecture' ? (
          <Lecture isLoading={true} />
        ) : (
          <Lecture isLoading={true} />
        )}
        <span id="date" />
        <span />
      </ItemContainer>
    </ms.FeedContainer>
  );
}

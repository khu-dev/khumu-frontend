/**
 * @description main 피드의 presenter
 *              오늘의 강의(lecture) or 학사일정(calender) 반환
 */

import React from 'react';
import { BsCaretRightFill } from 'react-icons/bs';
import { ItemContainer } from '@components/main/items/items.styled';
import { TitleContainer, XLTitle } from '@components/utils/styles/title.styled';
import { theme } from 'src/constants/theme';
import * as ms from '../Main.styled';

import { FeedPropsType } from '@interfaces/components';

import { Lecture } from './Lecture';

interface FeedTitleProps {
  isMain: boolean;
}

/**
 * @description 메인 피드의 타이틀 컴포넌트
 */
const FeedTitle = React.memo(({ isMain }: FeedTitleProps) => (
  <TitleContainer {...{ isMain }}>
    <XLTitle color={theme.color.white}>나의 피드</XLTitle>
    <BsCaretRightFill color={theme.color.white} size={theme.icon.fontSize} />
  </TitleContainer>
));

const FeedPresenter = ({
  isMain,
  selected,
  onTabClick: onClick,
}: FeedPropsType) => (
  <ms.FeedContainer>
    <FeedTitle {...{ isMain }} />
    <ItemContainer {...{ isMain, selected, onClick }} height="140px">
      <span id="lecture" />
      <span id="calender" />
      {selected === 'lecture' ? <Lecture /> : <Lecture />}
      <span id="date" />
      <span />
    </ItemContainer>
  </ms.FeedContainer>
);

export default FeedPresenter;

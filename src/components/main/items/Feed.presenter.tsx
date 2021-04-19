/**
 * @description main 피드의 presenter
 *              오늘의 강의(lecture) or 학사일정(calender) 반환
 */

import React from 'react';
import { ItemContainer } from '@components/utils/container.styled';
import { TitleContainer, XLTitle } from '@components/utils/title.styled';
import { theme } from '@components/utils/theme';
import * as ms from '../Main.styled';

import { FeedPropsType } from '@interfaces/components';

import { Lecture } from './Lecture';

export const FeedPresenter = ({
  isMain,
  selected,
  onTabClick,
}: FeedPropsType) => (
  <ms.FeedContainer>
    <TitleContainer isMain={isMain}>
      <XLTitle color={theme.color.white}>나의 피드</XLTitle>
    </TitleContainer>
    <ItemContainer
      isMain={isMain}
      height="140px"
      selected={selected}
      onClick={onTabClick}
    >
      <span id="lecture" />
      <span id="calender" />
      {selected === 'lecture' ? <Lecture /> : <Lecture />}
      <span id="date" />
      <span />
    </ItemContainer>
  </ms.FeedContainer>
);

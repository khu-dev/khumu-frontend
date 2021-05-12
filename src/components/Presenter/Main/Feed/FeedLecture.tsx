/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { STitle } from '@components/utils/styles/Title';
import * as s from '../items/itemsStyled';
import { theme } from '@constants/theme';
import Checkbox from '@components/Checkbox';
import { css } from '@emotion/react';

interface LecturePropsType {
  isLoading: boolean;
}

function LectureDescription({ isLoading }: LecturePropsType) {
  return (
    <STitle
      size={theme.title.M}
      isLoading={isLoading}
      css={css`
        margin-left: 25px;
        font-size: 14px;
        font-weight: 40;
        width: calc(100% - 25px);
      `}
    >
      {isLoading || (
        <>
          <span>수업종료까지</span>
          <span
            css={css`
              font-weight: 700;
              color: ${theme.color.main};
            `}
          >
            &nbsp;1시간 45분&nbsp;
          </span>
          <span>남았습니다</span>
        </>
      )}
    </STitle>
  );
}

function LectureTitle({ isLoading }: LecturePropsType) {
  return (
    <s.LectureContainer>
      <s.LectureName>
        <Checkbox />
        <STitle
          size={theme.title.L}
          isLoading={isLoading}
          css={css`
            color: ${theme.color.main};
          `}
        >
          {isLoading || '산업디자인사'}
        </STitle>
      </s.LectureName>
      <STitle
        size={theme.title.L}
        isLoading={isLoading}
        css={css`
          margin-left: 25px;
          width: 140px;
          color: ${theme.color.darkgray};
        `}
      >
        {isLoading || '09:00 ~ 13:45'}
      </STitle>
    </s.LectureContainer>
  );
}

export default function FeedLecture({ isLoading = true }: LecturePropsType) {
  return (
    <s.FeedContents>
      <LectureTitle isLoading={isLoading} />
      <LectureDescription isLoading={isLoading} />
    </s.FeedContents>
  );
}

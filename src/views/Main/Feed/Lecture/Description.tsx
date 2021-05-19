/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { STitle } from '@components/Title/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';
import { LectureProps } from './type';

interface LectureDescriptionProps extends LectureProps {
  description: string[];
}

export default function LectureDescription({
  description,
  isLoading,
}: LectureDescriptionProps) {
  return (
    <STitle
      size={theme.title.M}
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

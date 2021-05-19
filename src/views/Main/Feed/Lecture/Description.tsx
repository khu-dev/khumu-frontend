/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { CustomTitle } from '@components/Title';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';

interface LectureDescriptionProps {
  description: string[];
}

export default function LectureDescription({
  description,
}: LectureDescriptionProps) {
  return (
    <CustomTitle
      size={theme.title.M}
      css={css`
        margin-left: 25px;
        font-size: 14px;
        font-weight: 40;
        width: calc(100% - 25px);
      `}
    >
      <span>{description[0]}</span>
      <span
        css={css`
          font-weight: 700;
          color: ${theme.color.main};
        `}
      >
        &nbsp;{description[1]}&nbsp;
      </span>
      <span>{description[2]}</span>
    </CustomTitle>
  );
}

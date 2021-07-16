/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { CustomTitle } from '@components/Title';
import { title, color } from '@constants/theme';
import { css } from '@emotion/react';

const LectureDescription = ({ description }) => (
  <CustomTitle
    size={title.M}
    css={css`
      margin-left: 25px;
      font-size: 14px;
      font-weight: 600;
      width: calc(100% - 25px);
      color: ${color.main};
    `}
  >
    {description}
  </CustomTitle>
);

export default LectureDescription;

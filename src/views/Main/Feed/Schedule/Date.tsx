/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { css } from '@emotion/react';
import { CustomTitle } from '@components/Title';
import { title as titleStyle, color } from '@constants/theme';
import { formatMonthDayDate } from '@utils/day';

const ScheduleDate = ({ isValid, start, end }) => {
  const startDate = formatMonthDayDate(start);
  const endDate = formatMonthDayDate(end);

  return (
    <CustomTitle
      size={titleStyle.M}
      css={css`
        margin-left: 25px;
        font-size: 14px;
        font-weight: 600;
        width: calc(100% - 25px);
        color: ${color.main};
      `}
    >
      {isValid ? `${startDate} ~ ${endDate}까지` : ''}
    </CustomTitle>
  );
};

export default ScheduleDate;
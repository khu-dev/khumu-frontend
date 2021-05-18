/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { STitle } from '@components/Title/Title';
import { theme } from '@constants/theme';
import Checkbox from '@components/Checkbox';
import { css } from '@emotion/react';
import { LectureProps } from './type';

interface LectureNameProps extends LectureProps {
  name: string;
  time: string;
}

export default function LectureName({ isLoading, name, time }: LectureNameProps) {
  const styles = useStyles();
  return (
    <div css={styles.titleConatiner}>
      <div css={styles.name}>
        <Checkbox />
        <STitle
          size={theme.title.L}
          css={css`
            color: ${theme.color.main};
          `}
        >
          {isLoading || name}
        </STitle>
      </div>
      <STitle size={theme.title.L} css={styles.time}>
        {isLoading || time}
      </STitle>
    </div>
  );
}

function useStyles() {
  return {
    titleConatiner: css`
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
    `,
    name: css`
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 6px;
    `,
    time: css`
      margin-left: 25px;
      width: 140px;
      color: ${theme.color.darkgray};
    `,
  };
}

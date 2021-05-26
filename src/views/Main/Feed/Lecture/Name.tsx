/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { CustomTitle, mainStyle } from '@components/Title';
import { title, color } from '@constants/theme';
import Checkbox from '@components/Checkbox';
import { css } from '@emotion/react';

interface LectureNameProps {
  name: string;
  time: string;
}

export default function LectureName({ name, time }: LectureNameProps) {
  const styles = useStyles();

  return (
    <div css={styles.titleConatiner}>
      <div css={styles.name}>
        <Checkbox />
        <CustomTitle size={title.L} css={mainStyle}>
          {name}
        </CustomTitle>
      </div>
      <CustomTitle size={title.L} css={styles.time}>
        {time}
      </CustomTitle>
    </div>
  );
}

function useStyles() {
  return {
    titleConatiner: css`
      display: flex;
      flex-direction: column;
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
      color: ${color.gray4};
    `,
  };
}

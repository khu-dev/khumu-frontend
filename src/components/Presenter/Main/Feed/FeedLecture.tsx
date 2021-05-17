/**
 * @description 피드의 오늘의 강의
 */

import React from 'react';
import { theme } from '@constants/theme';
import { css } from '@emotion/react';

import { LectureProps } from './Lecture/interface';
import LectureName from './Lecture/Name';
import LectureDescription from './Lecture/Description';

export default function FeedLecture({ isLoading = true }: LectureProps) {
  const styles = useStyles();

  return (
    <div
      // css={styles.container}
      className={'main-feed-content'}
    >
      <LectureName name={'산업디자인사'} time={'09:00 ~ 13:45'} isLoading={isLoading} />
      <LectureDescription
        description={['수업종료까지', ' 1시간 45분 ', '남았습니다']}
        isLoading={isLoading}
      />
    </div>
  );
}

function useStyles() {
  return {
    container: css`
      display: flex;
      flex-direction: column;
      width: ${theme.padding.width};
      height: 100%;
      padding: 0px 32px;
      justify-content: space-evenly;
      position: relative;
      z-index: 2;
    `,
  };
}

/**
 * @description 피드의 오늘의 강의
 */

import React, { CSSProperties } from 'react';
import * as ts from '@components/utils/styles/Title';
import * as s from './itemsStyled';
import { theme } from '@constants/theme';
import Checkbox from '@components/Checkbox';

interface LecturePropsType {
  isLoading: boolean;
}

function LectureDescription({ isLoading }: LecturePropsType) {
  return (
    <ts.MTitle isLoading={isLoading} style={styles.left}>
      {isLoading || (
        <>
          <span>수업종료까지</span>
          <span style={styles.leftText}>&nbsp;1시간 45분&nbsp;</span>
          <span>남았습니다</span>
        </>
      )}
    </ts.MTitle>
  );
}

function LectureTitle({ isLoading }: LecturePropsType) {
  return (
    <s.LectureContainer>
      <s.LectureName>
        <Checkbox />
        <ts.LTitle isLoading={isLoading} color={theme.color.main}>
          {isLoading || '산업디자인사'}
        </ts.LTitle>
      </s.LectureName>
      <ts.LTitle
        isLoading={isLoading}
        color={theme.color.darkgray}
        style={styles.time}
      >
        {isLoading || '09:00 ~ 13:45'}
      </ts.LTitle>
    </s.LectureContainer>
  );
}

export default function Lecture({ isLoading = true }: LecturePropsType) {
  return (
    <s.FeedContents>
      <LectureTitle isLoading={isLoading} />
      <LectureDescription isLoading={isLoading} />
    </s.FeedContents>
  );
}

interface StyleType {
  [key: string]: CSSProperties;
}

const styles: StyleType = {
  time: { marginLeft: '25px', width: '140px' },
  left: {
    marginLeft: '25px',
    fontSize: '14px',
    fontWeight: 400,
    width: 'calc(100% - 25px)',
  },
  leftText: {
    fontWeight: 700,
    color: theme.color.main,
  },
};

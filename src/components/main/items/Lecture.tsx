import React from 'react';
import * as ts from '@components/utils/title.styled';
import * as s from './items.styled';

const isLoading = true;

export const Lecture = () => (
  <s.FeedContents>
    <s.LectureContainer>
      <s.LectureName>
        <s.LectureCheckBox type="checkbox" />
        <ts.LTitle isLoading={isLoading}>{null || ' '}</ts.LTitle>
      </s.LectureName>
      <ts.MTitle isLoading={isLoading} style={styles.time}>
        {null || ' '}
      </ts.MTitle>
    </s.LectureContainer>
    <ts.MTitle isLoading={isLoading} style={styles.left}>
      {isLoading ? ' ' : '수업종료까지 1시간 45분 남았습니다'}
    </ts.MTitle>
  </s.FeedContents>
);

const styles = {
  time: { marginLeft: '25px', width: '140px' },
  left: {
    marginLeft: '25px',
    fontSize: '14px',
    fontWeight: '400',
    width: '180px',
  },
};

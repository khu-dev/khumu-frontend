import React from 'react';
import { LTitle } from '@components/utils/title.styled';
import * as s from './items.styled';

export const Lecture = () => (
  <s.FeedContents>
    <s.LectureContainer>
      <s.LectureName>
        <s.LectureCheckBox type="checkbox" />
        <LTitle>산업디자인사</LTitle>
      </s.LectureName>
      <div style={{ marginLeft: '25px' }}>09:00 ~ 13:45</div>
    </s.LectureContainer>
    <span style={{ marginLeft: '25px', fontSize: '14px' }}>
      수업종료까지 <strong>1시간 45분</strong> 남았습니다
    </span>
  </s.FeedContents>
);

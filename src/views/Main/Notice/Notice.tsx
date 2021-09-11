import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Notice as NoticeType } from '@interface/Notice';
import * as cs from '../common.styled';
import * as s from './styled';

const initialState = [
  { title: '총학생회', body: '2021-1 기말시험 안내', id: 0 },
  { title: '총학생회', body: '2021-1 코로나 관련 특별 장학금 지금 안내', id: 1 },
];

const Notice = () => {
  const [notices, _] = useState<NoticeType[]>(initialState);

  return (
    <cs.MainSection>
      <cs.IconTitle pathname={`/notice`} title={'오늘의 공지사항'} />
      {notices.map((notice) => (
        <s.NoticeItem key={notice.id}>
          <s.NoticeThumbnail />
          <s.NoticeBody>
            <s.Title>{notice.title}</s.Title>
            <s.Content>{notice.body}</s.Content>
            <s.More>
              <MdKeyboardArrowDown size={24} />
            </s.More>
          </s.NoticeBody>
        </s.NoticeItem>
      ))}
    </cs.MainSection>
  );
};

export default Notice;

/**
 * @description Main화면 보여주는 Presenter
 */

import React from 'react';
import { ContentContainer } from './Main.styled';
import Feed from './items/Feed.container';
import { ScrollAnimationItem } from '@components/utils/hoc/ScrollAnimationItem';
import { LTitle, TitleContainer } from '@components/utils/styles/title.styled';
import { theme } from '@components/utils/styles/theme';

const MainPresenter = (props: any) => {
  return (
    <ContentContainer>
      <Feed />
      {itemList.map((item, idx) => (
        <ScrollAnimationItem
          key={item.title}
          init={{
            isInit: idx < 3,
            idx,
          }}
          height={item.height}
          isAdvertise={item.title === '광고'}
        >
          {item.title !== '광고' && (
            <TitleContainer>
              <LTitle color={theme.color.main}>{item.title}</LTitle>
            </TitleContainer>
          )}
          <div
            style={{
              width: '100%',
              flex: 5,
              display: 'flex',
              flexDirection: item.flexDirection || 'row',
            }}
          >
            {Array(item.numOfContents)
              .fill(0)
              .map((content, i) => (
                <div
                  key={item.title + i}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: `1px solid ${theme.color.main}`,
                    borderRadius:
                      item.title === '광고' ? '0px' : theme.borderRadius,
                    ...(item.margin && { ...item.margin[i] }),
                  }}
                ></div>
              ))}
          </div>
        </ScrollAnimationItem>
      ))}
    </ContentContainer>
  );
};

export default MainPresenter;

const itemList = [
  {
    title: '오늘의 공지사항',
    flexDirection: 'column',
    numOfContents: 2,
    height: '180px',
    margin: {
      '0': { marginBottom: '16px' },
      '1': { marginBottom: '0px' },
    },
  },
  {
    title: '동아리',
    height: '200px',
    numOfContents: 1,
  },
  {
    title: '광고',
    numOfContents: 1,
    height: '100px',
  },
  {
    title: '실시간 인기글',
    numOfContents: 1,
    height: '300px',
  },
  {
    title: '정보',
    numOfContents: 2,
    height: '130px',
    margin: {
      '0': { marginRight: '16px' },
      '1': { marginRight: '0px' },
    },
  },
  {
    title: '바로가기',
    numOfContents: 3,
    height: '70px',
    margin: {
      '0': { marginRight: '16px' },
      '1': { marginRight: '16px' },
      '2': { marginRight: '0px' },
    },
  },
];

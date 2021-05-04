import React from 'react';
import MainPresenter from './MainPresenter';

const MainContainer = () => {
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
      isAdvertise: true,
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

  return <MainPresenter {...{ itemList }} />;
};

export default MainContainer;

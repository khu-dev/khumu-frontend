import { css } from '@emotion/react';

export const mainItemList = [
  {
    title: '오늘의 공지사항',
    flexDirection: 'column',
    numOfContents: 2,
    commonStyle: css`
      height: 180px;
    `,
    contentsStyle: {
      '0': css`
        margin-bottom: 16px;
      `,
      '1': css`
        margin-bottom: 0px;
      `,
    },
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
    commonStyle: css`
      height: 200px;
    `,
  },
  {
    title: '광고',
    numOfContents: 1,
    height: '100px',
    commonStyle: css`
      height: 100px;
    `,
    isAdvertise: true,
  },
  {
    title: '실시간 인기글',
    numOfContents: 1,
    height: '300px',
    commonStyle: css`
      height: 300px;
    `,
  },
  {
    title: '정보',
    numOfContents: 2,
    height: '130px',
    commonStyle: css`
      height: 130px;
    `,
    contentsStyle: {
      '0': css`
        margin-right: 16px;
      `,
      '1': css`
        margin-right: 0px;
      `,
    },
    margin: {
      '0': { marginRight: '16px' },
      '1': { marginRight: '0px' },
    },
  },
  {
    title: '바로가기',
    numOfContents: 3,
    height: '70px',
    commonStyle: css`
      height: 70px;
    `,
    contentsStyle: {
      '0': css`
        margin-right: 16px;
      `,
      '1': css`
        margin-right: 16px;
      `,
      '2': css`
        margin-right: 0px;
      `,
    },
    margin: {
      '0': { marginRight: '16px' },
      '1': { marginRight: '16px' },
      '2': { marginRight: '0px' },
    },
  },
];

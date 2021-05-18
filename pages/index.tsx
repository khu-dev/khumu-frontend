// import { apiBase } from '@api/api-base';
import React from 'react';
import { GetServerSideProps } from 'next';

import { mainItemList } from '@constants/mainItemList';

import Feed from '@components/Presenter/Main/Feed';
import ScrollContents from '@components/Presenter/Main/ScrollContents';

export default function MainPage() {
  return (
    <>
      <Feed />
      {mainItemList.map((item: any, idx: number) => (
        <ScrollContents key={item.title} item={item} idx={idx} />
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (/*context*/) => {
  // const data = (await apiBase())?.data || null;
  // console.log('loading ...');
  // function sleep(ms: number) {
  //   const wakeUpTime = Date.now() + ms;
  //   while (Date.now() < wakeUpTime) {}
  // }
  // sleep(1000);
  // console.log('done!');

  return {
    props: {
      // data,
      null: null,
    },
  };
};

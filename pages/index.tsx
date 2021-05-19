// import { apiBase } from '@api/api-base';
import React from 'react';
import { GetServerSideProps } from 'next';

import { mainItemList } from '@constants/mainItemList';

import Feed from '@views/Main/Feed';
import Skeleton from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';
import RepeatSkeleton from '@components/Skeleton/RepeatSkeleton';

export default function MainPage() {
  return (
    <>
      <Feed />
      <Skeleton
        isLoading={true}
        repeat={4}
        Skeleton={SkeletonMainItem}
        render={(props: any) => (
          <div className={'main-item-container'}>
            <div className={'main-item-content'} {...props}>
              hi
            </div>
          </div>
        )}
      />
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

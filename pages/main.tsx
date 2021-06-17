// import { apiBase } from '@api/api-base';
import React from 'react';
import { GetStaticProps } from 'next';

import { mainItemList } from '@constants/mainItemList';

import Feed from '@views/Main/Feed';
import Skeleton from '@components/Skeleton';
import SkeletonMainItem from '@components/Skeleton/Main/Item';

export default function MainPage() {
  return (
    <>
      <Feed />
      <Skeleton
        isLoading={true}
        repeat={6}
        Skeleton={SkeletonMainItem}
        render={(props: any) => (
          <>
            {mainItemList.map((_, idx: number) => (
              <div className={'main-item-container'} key={idx}>
                <div className={'main-item-content'} {...props}>
                  hi
                </div>
              </div>
            ))}
          </>
        )}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (/*context*/) => {
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
